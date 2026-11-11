const litery = {slonce: "S", wiatr: "W", woda: "H", biomasa: "B", biogaz: "G", geotermia: "T"};
const filtrEnergii = document.querySelector("#filtr-energii");
const statusMapy = document.querySelector("#status-mapy");
let mapa;
let warstwaObiektow;

function pasujaceObiekty() {
    return obiekty.filter(function (obiekt) {
        return filtrEnergii.value === "wszystkie" || obiekt.rodzaj === filtrEnergii.value || (obiekt.inneRodzaje || []).includes(filtrEnergii.value);
    });
}

function aktualizujMape() {
    const widoczne = pasujaceObiekty();
    if (!mapa || !warstwaObiektow) return;
    warstwaObiektow.clearLayers();
    widoczne.forEach(function (obiekt) {
        const ikona = L.divIcon({
            className: "ikona-mapy",
            html: `<span class="znacznik znacznik--${obiekt.rodzaj}"><span>${litery[obiekt.rodzaj]}</span></span>`,
            iconSize: [31, 31],
            iconAnchor: [4, 27],
            popupAnchor: [11, -24]
        });
        L.marker([obiekt.lat, obiekt.lon], {icon: ikona, title: obiekt.nazwa, alt: obiekt.nazwa, keyboard: true})
            .bindPopup(`<strong>${obiekt.nazwa}</strong><p>${obiekt.etykieta}<br>${obiekt.miejsce}</p><p><b>Moc / rodzaj:</b> ${obiekt.moc}</p><p>${obiekt.opis}</p>`)
            .addTo(warstwaObiektow);
    });
    const liczba = widoczne.length;
    const forma = liczba === 1 ? "obiekt" : (liczba % 10 >= 2 && liczba % 10 <= 4 && (liczba % 100 < 12 || liczba % 100 > 14) ? "obiekty" : "obiektów");
    statusMapy.textContent = `Na mapie: ${liczba} ${forma}.`;
}

try {
    if (typeof L === "undefined") throw new Error("Brak biblioteki mapy");
    mapa = L.map("mapa", {scrollWheelZoom: false}).setView([52.35, 19.05], 6);
    mapa.attributionControl.setPrefix(false);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);
    warstwaObiektow = L.layerGroup().addTo(mapa);
} catch (blad) {
    statusMapy.textContent = "Nie udało się wczytać mapy. Sprawdź połączenie z internetem i odśwież stronę.";
    document.querySelector("#mapa").hidden = true;
}
filtrEnergii.addEventListener("change", aktualizujMape);
aktualizujMape();

const wyborMiasta = document.querySelector("#wybor-miasta");
const kontenerMiast = document.querySelector("#miasta");
const statusPogody = document.querySelector("#status-pogody");
const przyciskOdswiez = document.querySelector("#odswiez-pogode");
let danePogodowe = null;
let trwaPobieranie = false;

miasta.forEach(function (miasto, indeks) {
    const opcja = document.createElement("option");
    opcja.value = String(indeks);
    opcja.textContent = miasto.nazwa;
    wyborMiasta.appendChild(opcja);
});

function pokazPogode() {
    if (!danePogodowe) return;
    kontenerMiast.innerHTML = miasta.map(function (miasto, indeks) {
        if (wyborMiasta.value !== "wszystkie" && wyborMiasta.value !== String(indeks)) return "";
        const aktualna = danePogodowe[indeks].current || {};
        const slonce = ocenaSlonca(aktualna.shortwave_radiation, aktualna.is_day);
        const wiatr = ocenaWiatru(aktualna.wind_speed_10m);
        return `<article class="karta-pogody">
            <div class="pogoda-naglowek">
                <div><h3>${miasto.nazwa}</h3><p class="warunki">${opisPogody(aktualna.weather_code)} · ${pokazLiczbe(aktualna.temperature_2m, "°C", 1)}</p></div>
                ${ilustracjaPogody(aktualna.weather_code, aktualna.is_day)}
            </div>
            <div class="parametr"><div class="parametr-naglowek"><strong>Słońce</strong><span>${pokazLiczbe(aktualna.shortwave_radiation, "W/m²", 1)}</span></div><span class="ocena ${slonce.klasa}">${slonce.tekst}</span></div>
            <div class="parametr parametr-wiatrowy">
                <div class="wiatr-opis"><div class="parametr-naglowek"><strong>Wiatr na 10 m</strong><span>${pokazLiczbe(aktualna.wind_speed_10m, "m/s", 1)}</span></div><span class="ocena ${wiatr.klasa}">${wiatr.tekst}</span></div>
                ${ilustracjaWiatraka(aktualna.wind_speed_10m)}
            </div>
            <p class="karta-czas">Dane z: ${czasDanych(aktualna.time)}</p>
        </article>`;
    }).join("");
}

async function pobierzPogode() {
    if (trwaPobieranie) return;
    trwaPobieranie = true;
    przyciskOdswiez.disabled = true;
    statusPogody.textContent = "Pobieranie aktualnych danych pogodowych…";
    const parametry = new URLSearchParams({
        latitude: miasta.map(function (miasto) { return miasto.lat; }).join(","),
        longitude: miasta.map(function (miasto) { return miasto.lon; }).join(","),
        current: "temperature_2m,wind_speed_10m,shortwave_radiation,is_day,weather_code",
        wind_speed_unit: "ms",
        timezone: "Europe/Warsaw"
    });
    const kontroler = new AbortController();
    const limit = window.setTimeout(function () { kontroler.abort(); }, 15000);
    try {
        const odpowiedz = await fetch(`https://api.open-meteo.com/v1/forecast?${parametry}`, {signal: kontroler.signal});
        if (!odpowiedz.ok) throw new Error("Błąd odpowiedzi");
        const wynik = await odpowiedz.json();
        if (!Array.isArray(wynik) || wynik.length !== miasta.length) throw new Error("Niepełne dane");
        danePogodowe = wynik.map(function (pozycja) { return pozycja || {}; });
        statusPogody.textContent = "Dane modelowe Open-Meteo · czas lokalny w Polsce";
        pokazPogode();
    } catch (blad) {
        statusPogody.textContent = danePogodowe
            ? "Nie udało się odświeżyć pogody. Poniżej pozostają ostatnie pobrane dane — sprawdź ich godzinę."
            : "Nie udało się pobrać pogody. Sprawdź połączenie z internetem i spróbuj ponownie.";
    } finally {
        window.clearTimeout(limit);
        trwaPobieranie = false;
        przyciskOdswiez.disabled = false;
    }
}

wyborMiasta.addEventListener("change", pokazPogode);
przyciskOdswiez.addEventListener("click", pobierzPogode);
pobierzPogode();
window.setInterval(pobierzPogode, 15 * 60 * 1000);
