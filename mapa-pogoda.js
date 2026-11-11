const obiekty = [
    {nazwa: "Kleczew Solar & Wind", rodzaj: "slonce", inneRodzaje: ["wiatr"], etykieta: "Energia słoneczna i wiatrowa", miejsce: "okolice Kleczewa, woj. wielkopolskie", moc: "250 MW fotowoltaiki i 19,2 MW wiatru", opis: "Duża instalacja hybrydowa na terenach pokopalnianych.", lat: 52.414, lon: 18.160, zrodlo: "https://www.orlen.pl/pl/o-firmie/media/komunikaty-prasowe/biezace/2026/Maj-2026/Najwieksza-farma-fotowoltaiczna-ORLENU-gotowa-Kleczew-osiagnal-250-MW"},
    {nazwa: "Farma fotowoltaiczna Zwartowo", rodzaj: "slonce", etykieta: "Energia słoneczna", miejsce: "Zwartowo, woj. pomorskie", moc: "204 MW", opis: "Jedna z największych farm fotowoltaicznych w Polsce.", lat: 54.698, lon: 17.818, zrodlo: "https://respect.energy/press-releases/pierwsza-jednostka-odnawialna-w-polsce-ukonczyla-proces-kwalifikacji-do-swiadczenia-uslug-bilansujacych/"},
    {nazwa: "Baltic Power", rodzaj: "wiatr", etykieta: "Energia wiatrowa na morzu", miejsce: "Bałtyk, na wysokości Łeby i Choczewa", moc: "około 1 200 MW docelowo", opis: "Pierwsza energia trafiła do sieci w 2026 r.; moc podano dla całej farmy po pełnym uruchomieniu.", lat: 55.050, lon: 17.650, zrodlo: "https://www.gov.pl/web/klimat/pierwsza-polska-morska-farma-wiatrowa-ukonczona"},
    {nazwa: "Farma wiatrowa Potęgowo", rodzaj: "wiatr", etykieta: "Energia wiatrowa na lądzie", miejsce: "okolice Potęgowa, woj. pomorskie", moc: "219,5 MW", opis: "Jeden z największych lądowych zespołów farm wiatrowych w Polsce.", lat: 54.476, lon: 17.481, zrodlo: "https://inwestycjeenergetyczne.pw.edu.pl/inwestycja/farma-wiatrowa-potegowo/"},
    {nazwa: "Elektrownia wodna Włocławek", rodzaj: "woda", etykieta: "Energia wodna", miejsce: "Włocławek, woj. kujawsko-pomorskie", moc: "około 160 MW", opis: "Największa przepływowa elektrownia wodna w Polsce, wykorzystująca wody Wisły.", lat: 52.620, lon: 19.122, zrodlo: "https://energa-wytwarzanie.pl/nasze-zrodla/duze-elektrownie-wodne/19959/wloclawek"},
    {nazwa: "Elektrownia wodna Solina", rodzaj: "woda", etykieta: "Energia wodna i magazynowanie", miejsce: "Solina, woj. podkarpackie", moc: "około 199 MW", opis: "Elektrownia szczytowo-pompowa z naturalnym dopływem. Część energii pochodzi z wody wcześniej przepompowanej do zbiornika.", lat: 49.398, lon: 22.451, zrodlo: "https://www.gkpge.pl/content/download/ae87254f9a72f57bc4ee84feb63bbd75/file/sz_gkpge_2024_pl.pdf?contentId=169210&inLanguage=pol-PL&version=2"},
    {nazwa: "Elektrownia Żarnowiec", rodzaj: "woda", etykieta: "Magazynowanie energii", miejsce: "Czymanowo, woj. pomorskie", moc: "716 MW", opis: "Elektrownia szczytowo-pompowa jest magazynem energii: zużywa prąd do pompowania wody, a później oddaje jego część do sieci.", lat: 54.778, lon: 18.095, zrodlo: "https://www.gkpge.pl/content/download/ae87254f9a72f57bc4ee84feb63bbd75/file/sz_gkpge_2024_pl.pdf?contentId=169210&inLanguage=pol-PL&version=2"},
    {nazwa: "Zielony Blok w Połańcu", rodzaj: "biomasa", etykieta: "Energia z biomasy", miejsce: "Zawada koło Połańca, woj. świętokrzyskie", moc: "225 MW", opis: "Blok energetyczny opalany biomasą, znajdujący się w kompleksie Elektrowni Połaniec.", lat: 50.433, lon: 21.281, zrodlo: "https://www.enea.pl/strona-korporacyjna/spolki/enea-elektrownia-polaniec/o-spolce"},
    {nazwa: "Biogazownia Murowana Goślina", rodzaj: "biogaz", etykieta: "Energia z biogazu", miejsce: "Murowana Goślina, woj. wielkopolskie", moc: "2,996 MW", opis: "Jedna z dużych instalacji biogazowych; lokalizacja punktu jest przybliżona do miejscowości.", lat: 52.575, lon: 17.009, zrodlo: "https://www.bip.powiat.poznan.pl/plik%2C43837%2Cprogram-ochrony-srodowiska.pdf"},
    {nazwa: "Biogazownia Konopnica", rodzaj: "biogaz", etykieta: "Energia z biogazu", miejsce: "Konopnica koło Rawy Mazowieckiej, woj. łódzkie", moc: "1,998 MW elektrycznej", opis: "Biogazownia rolnicza wytwarzająca energię elektryczną i ciepło.", lat: 51.787, lon: 20.291, zrodlo: "https://biometan.orlen.pl/pl/o-spolce/nasze-instalacje"},
    {nazwa: "Geotermia Podhalańska", rodzaj: "geotermia", etykieta: "Ciepło geotermalne", miejsce: "Bańska Niżna, woj. małopolskie", moc: "ciepłownia geotermalna", opis: "Wykorzystuje ciepło wód podziemnych do ogrzewania. To ciepłownia, a nie elektrownia produkująca prąd.", lat: 49.431, lon: 19.995, zrodlo: "https://www.gov.pl/web/nfosigw/wizyta-prezydenta-rp-w-geotermii-podhalanskiej"}
];

const miasta = [
    {nazwa: "Warszawa", lat: 52.2297, lon: 21.0122},
    {nazwa: "Kraków", lat: 50.0647, lon: 19.9450},
    {nazwa: "Łódź", lat: 51.7592, lon: 19.4560},
    {nazwa: "Wrocław", lat: 51.1079, lon: 17.0385},
    {nazwa: "Poznań", lat: 52.4064, lon: 16.9252},
    {nazwa: "Gdańsk", lat: 54.3520, lon: 18.6466},
    {nazwa: "Szczecin", lat: 53.4285, lon: 14.5528},
    {nazwa: "Lublin", lat: 51.2465, lon: 22.5684},
    {nazwa: "Białystok", lat: 53.1325, lon: 23.1688},
    {nazwa: "Katowice", lat: 50.2649, lon: 19.0238},
    {nazwa: "Bydgoszcz", lat: 53.1235, lon: 18.0084},
    {nazwa: "Toruń", lat: 53.0138, lon: 18.5984},
    {nazwa: "Rzeszów", lat: 50.0412, lon: 21.9991},
    {nazwa: "Olsztyn", lat: 53.7784, lon: 20.4801},
    {nazwa: "Opole", lat: 50.6751, lon: 17.9213},
    {nazwa: "Kielce", lat: 50.8661, lon: 20.6286},
    {nazwa: "Gorzów Wielkopolski", lat: 52.7368, lon: 15.2288},
    {nazwa: "Zielona Góra", lat: 51.9356, lon: 15.5062}
];

const litery = {slonce: "S", wiatr: "W", woda: "H", biomasa: "B", biogaz: "G", geotermia: "T"};
const filtrEnergii = document.querySelector("#filtr-energii");
const listaObiektow = document.querySelector("#obiekty-lista");
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
    listaObiektow.innerHTML = widoczne.map(function (obiekt) {
        return `<li><strong>${obiekt.nazwa}</strong> — ${obiekt.moc}. ${obiekt.miejsce}. <a href="${obiekt.zrodlo}" target="_blank" rel="noopener noreferrer">Informacje o obiekcie</a></li>`;
    }).join("");
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
            .bindPopup(`<strong>${obiekt.nazwa}</strong><p>${obiekt.etykieta}<br>${obiekt.miejsce}</p><p><b>Moc / rodzaj:</b> ${obiekt.moc}</p><p>${obiekt.opis}</p><a href="${obiekt.zrodlo}" target="_blank" rel="noopener noreferrer">Informacje o obiekcie</a>`)
            .addTo(warstwaObiektow);
    });
    const liczba = widoczne.length;
    const forma = liczba === 1 ? "obiekt" : (liczba % 10 >= 2 && liczba % 10 <= 4 && (liczba % 100 < 12 || liczba % 100 > 14) ? "obiekty" : "obiektów");
    statusMapy.textContent = `Na mapie: ${liczba} ${forma}.`;
}

try {
    if (typeof L === "undefined") throw new Error("Brak biblioteki mapy");
    mapa = L.map("mapa", {scrollWheelZoom: false}).setView([52.35, 19.05], 6);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);
    warstwaObiektow = L.layerGroup().addTo(mapa);
} catch (blad) {
    statusMapy.textContent = "Nie udało się wczytać mapy. Poniżej możesz otworzyć listę obiektów i ich źródeł.";
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

function ocenaSlonca(promieniowanie, dzien) {
    if (dzien === 0) return {tekst: "Noc — brak produkcji PV", klasa: "slabiej"};
    if (typeof promieniowanie !== "number" || !Number.isFinite(promieniowanie)) return {tekst: "Brak danych", klasa: "slabiej"};
    if (promieniowanie < 150) return {tekst: "Słabe warunki", klasa: "slabiej"};
    if (promieniowanie < 500) return {tekst: "Umiarkowane warunki", klasa: ""};
    return {tekst: "Dobre warunki", klasa: ""};
}

function ocenaWiatru(wiatr) {
    if (typeof wiatr !== "number" || !Number.isFinite(wiatr)) return {tekst: "Brak danych", klasa: "slabiej"};
    if (wiatr < 2) return {tekst: "Słaby wiatr", klasa: "slabiej"};
    if (wiatr < 5) return {tekst: "Umiarkowany wiatr", klasa: ""};
    if (wiatr < 12) return {tekst: "Sprzyjający wiatr", klasa: ""};
    return {tekst: "Silny wiatr — możliwe ograniczenia", klasa: "uwaga"};
}

function opisPogody(kod) {
    if (kod === 0) return "Bezchmurnie";
    if (kod === 1) return "Przeważnie pogodnie";
    if (kod === 2) return "Częściowe zachmurzenie";
    if (kod === 3) return "Pochmurno";
    if ([45, 48].includes(kod)) return "Mgła";
    if ([51, 53, 55, 56, 57].includes(kod)) return "Mżawka";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(kod)) return "Deszcz";
    if ([71, 73, 75, 77, 85, 86].includes(kod)) return "Śnieg";
    if ([95, 96, 99].includes(kod)) return "Burza";
    return "Aktualne warunki";
}

function ilustracjaPogody(kod, dzien) {
    if (typeof kod !== "number" || !Number.isFinite(kod)) {
        return '<span class="brak-ikony" aria-hidden="true">—</span>';
    }
    const pogodne = [0, 1, 2].includes(kod);
    const slonce = dzien === 1 && pogodne;
    const ksiezyc = dzien === 0 && pogodne;
    const chmura = ![0, 1].includes(kod);
    if (!slonce && !ksiezyc && !chmura) return '<span class="brak-ikony" aria-hidden="true">—</span>';
    const deszcz = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(kod);
    const snieg = [71, 73, 75, 77, 85, 86].includes(kod);
    const mgla = [45, 48].includes(kod);
    const burza = [95, 96, 99].includes(kod);
    const tarcza = slonce ? `<g class="pogoda-slonce"><circle cx="29" cy="25" r="10"/><path d="M29 7v5 M29 38v5 M11 25h5 M42 25h5 M16.3 12.3l3.6 3.6 M38.1 34.1l3.6 3.6 M41.7 12.3l-3.6 3.6 M19.9 34.1l-3.6 3.6"/></g>` : "";
    const noc = ksiezyc ? `<g class="pogoda-ksiezyc"><path d="M32 12a14 14 0 1 0 14 19A13 13 0 0 1 32 12Z"/><circle cx="46" cy="13" r="1.6"/><circle cx="51" cy="20" r="1"/></g>` : "";
    const obloki = chmura ? `<g class="pogoda-chmura"><path d="M24 47h31a10 10 0 0 0 .2-20A15.5 15.5 0 0 0 26 25a11.1 11.1 0 0 0-2 22Z"/></g>` : "";
    const krople = deszcz ? `<g class="pogoda-deszcz"><path d="M29 52l-2 5 M42 52l-2 5 M55 52l-2 5"/></g>` : "";
    const platki = snieg ? `<g class="pogoda-snieg"><circle cx="28" cy="54" r="2"/><circle cx="41" cy="57" r="2"/><circle cx="54" cy="54" r="2"/></g>` : "";
    const mgielka = mgla ? `<g class="pogoda-mgla"><path d="M24 53h27 M30 58h24"/></g>` : "";
    const blysk = burza ? `<path class="pogoda-blysk" d="M43 45l-5 9h5l-2 6 8-11h-5l3-4Z"/>` : "";
    return `<svg class="ikona-pogody" viewBox="0 0 80 64" aria-hidden="true" focusable="false">${tarcza}${noc}${obloki}${krople}${platki}${mgielka}${blysk}</svg>`;
}

function czasObrotuWiatraka(wiatr) {
    if (typeof wiatr !== "number" || !Number.isFinite(wiatr) || wiatr <= 0) return null;
    return Math.max(1.2, Math.min(50, 18 / wiatr)).toFixed(2);
}

function ilustracjaWiatraka(wiatr) {
    const czas = czasObrotuWiatraka(wiatr);
    const bezRuchu = czas === null ? " bez-wiatru" : "";
    const tempo = czas === null ? "" : ` style="--czas-obrotu: ${czas}s"`;
    return `<svg class="ikona-wiatraka" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <path class="wiatrak-grunt" d="M17 60h30"/>
        <path class="wiatrak-wieza" d="M29 26h6l3.5 33h-13Z"/>
        <g class="wiatrak-wirnik${bezRuchu}"${tempo}>
            <path class="wiatrak-lopata" d="M31 23C28.2 18 28.5 7 31.7 3c3.4 4 3.5 15 .9 20Z"/>
            <path class="wiatrak-lopata" d="M31 23C28.2 18 28.5 7 31.7 3c3.4 4 3.5 15 .9 20Z" transform="rotate(120 32 24)"/>
            <path class="wiatrak-lopata" d="M31 23C28.2 18 28.5 7 31.7 3c3.4 4 3.5 15 .9 20Z" transform="rotate(240 32 24)"/>
            <circle class="wiatrak-srodek" cx="32" cy="24" r="3.3"/>
        </g>
    </svg>`;
}

function pokazLiczbe(wartosc, jednostka, miejsca) {
    if (typeof wartosc !== "number" || !Number.isFinite(wartosc)) return "brak danych";
    return wartosc.toLocaleString("pl-PL", {maximumFractionDigits: miejsca}) + " " + jednostka;
}

function czasDanych(czas) {
    if (typeof czas !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(czas)) return "brak danych";
    return `${czas.slice(8, 10)}.${czas.slice(5, 7)}.${czas.slice(0, 4)}, ${czas.slice(11, 16)}`;
}

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
