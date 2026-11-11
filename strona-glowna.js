const wyborMiastaGlownej = document.querySelector("#miasto-glowna");
const statusPogodyGlownej = document.querySelector("#pogoda-glowna-status");
const kartaPogodyGlownej = document.querySelector("#pogoda-glowna-karta");
const statusMapyGlownej = document.querySelector("#mapa-glowna-status");
let ostatniePobranieGlownej = 0;
let kontrolerPogodyGlownej = null;

wyborMiastaGlownej.innerHTML = "";
miasta.forEach(function (miasto, indeks) {
    const opcja = document.createElement("option");
    opcja.value = String(indeks);
    opcja.textContent = miasto.nazwa;
    wyborMiastaGlownej.appendChild(opcja);
});
wyborMiastaGlownej.value = String(miasta.findIndex(function (miasto) { return miasto.nazwa === "Łódź"; }));

function wyswietlPogodeGlownej(miasto, aktualna) {
    const slonce = ocenaSlonca(aktualna.shortwave_radiation, aktualna.is_day);
    const wiatr = ocenaWiatru(aktualna.wind_speed_10m);
    kartaPogodyGlownej.innerHTML = `<article class="karta-pogody glowna-pogoda">
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
}

async function pobierzPogodeGlownej() {
    const miasto = miasta[Number(wyborMiastaGlownej.value)];
    if (!miasto) return;
    if (kontrolerPogodyGlownej) kontrolerPogodyGlownej.abort();
    const numerPobrania = ++ostatniePobranieGlownej;
    const kontroler = new AbortController();
    kontrolerPogodyGlownej = kontroler;
    const limit = window.setTimeout(function () { kontroler.abort(); }, 15000);
    kartaPogodyGlownej.innerHTML = "";
    statusPogodyGlownej.textContent = "Pobieranie aktualnej pogody…";
    const parametry = new URLSearchParams({
        latitude: miasto.lat,
        longitude: miasto.lon,
        current: "temperature_2m,wind_speed_10m,shortwave_radiation,is_day,weather_code",
        wind_speed_unit: "ms",
        timezone: "Europe/Warsaw"
    });
    try {
        const odpowiedz = await fetch(`https://api.open-meteo.com/v1/forecast?${parametry}`, {signal: kontroler.signal});
        if (!odpowiedz.ok) throw new Error("Błąd odpowiedzi");
        const wynik = await odpowiedz.json();
        if (!wynik || !wynik.current) throw new Error("Brak danych");
        if (numerPobrania !== ostatniePobranieGlownej) return;
        wyswietlPogodeGlownej(miasto, wynik.current);
        statusPogodyGlownej.textContent = "Aktualizacja co 15 minut";
    } catch (blad) {
        if (numerPobrania !== ostatniePobranieGlownej) return;
        statusPogodyGlownej.textContent = "Nie udało się pobrać pogody. Sprawdź połączenie i odśwież stronę.";
    } finally {
        window.clearTimeout(limit);
        if (numerPobrania === ostatniePobranieGlownej) kontrolerPogodyGlownej = null;
    }
}

wyborMiastaGlownej.addEventListener("change", pobierzPogodeGlownej);
pobierzPogodeGlownej();
window.setInterval(pobierzPogodeGlownej, 15 * 60 * 1000);

try {
    if (typeof L === "undefined") throw new Error("Brak biblioteki mapy");
    const literyGlownej = {slonce: "S", wiatr: "W", woda: "H", biomasa: "B", biogaz: "G", geotermia: "T"};
    const mapaGlownej = L.map("mapa-glowna", {scrollWheelZoom: false}).setView([52.2, 19], 5);
    mapaGlownej.attributionControl.setPrefix(false);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapaGlownej);
    obiekty.forEach(function (obiekt) {
        const ikona = L.divIcon({
            className: "ikona-mapy",
            html: `<span class="znacznik znacznik--${obiekt.rodzaj}"><span>${literyGlownej[obiekt.rodzaj]}</span></span>`,
            iconSize: [25, 25],
            iconAnchor: [4, 22],
            popupAnchor: [8, -20]
        });
        L.marker([obiekt.lat, obiekt.lon], {icon: ikona, title: obiekt.nazwa, alt: obiekt.nazwa, keyboard: true})
            .bindPopup(`<strong>${obiekt.nazwa}</strong><p>${obiekt.etykieta}<br>${obiekt.miejsce}</p><p>${obiekt.moc}</p><a href="mapa-pogoda.html#mapa-tytul">Zobacz pełną mapę</a>`)
            .addTo(mapaGlownej);
    });
    statusMapyGlownej.textContent = `Wybrane obiekty: ${obiekty.length}.`;
} catch (blad) {
    document.querySelector("#mapa-glowna").hidden = true;
    statusMapyGlownej.textContent = "Nie udało się wczytać mapy. Otwórz pełną mapę poniżej.";
}
