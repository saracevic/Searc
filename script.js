// SİTE LİSTESİ - Buraya ekleme/çıkarma yapabilirsiniz
const SITES = [
    { name: "DiziPod", url: "https://dizipod.com" },
    { name: "Dizilla", url: "https://dizillahd.com" },
    { name: "DiziMag", url: "https://dizimag.onl" },
    { name: "DiziMom", url: "https://www.dizimom.fun" },
    { name: "DiziPal", url: "https://dizipal.bid" },
    { name: "DiziPalOrijinal", url: "https://dizipal1560.com" },
    { name: "DiziYo", url: "https://www.diziyo.so" },
    { name: "FilmModu", url: "https://www.filmmodu.one" },
    { name: "SezonlukDizi", url: "https://sezonlukdizi.cc" },
    { name: "SinemaCX", url: "https://www.sinema.gg" },
    { name: "Sinezy", url: "https://sinezy.to" },
    { name: "UgurFilm", url: "https://ugurfilm3.xyz" },
    { name: "Animecix", url: "https://animecix.tv" },
    { name: "Animely", url: "https://animecim.tv" },
    { name: "Animeler", url: "https://animeler.pw" },
    { name: "Anizium", url: "https://api.anizium.co" },
    { name: "Asyaanimeleri", url: "https://asyaanimeleri.top" },
    { name: "Asyafanatiklerim", url: "https://asyafanatiklerim.com" },
    { name: "HDHUB4u", url: "https://new2.hdhub4u.cl" },
    { name: "4kHdHub", url: "https://4khdhub.one" },
    { name: "VegaMovies", url: "https://vegamovies.navy" },
    { name: "MoviesMod", url: "https://moviesmod.farm" },
    { name: "HDFilmCehennemi", url: "https://www.hdfilmcehennemi.nl" },
    { name: "Jetfilmizle", url: "https://jetfilmizle.now" },
    { name: "AsyaMinik", url: "https://asyaminik.com" },
    { name: "AsyaWatch", url: "https://asyawatch.com" },
    { name: "Atv", url: "https://www.atv.com.tr" },
    { name: "BelgeselX", url: "https://belgeselx.com" },
    { name: "CizgiMax", url: "https://cizgimax.online" },
    { name: "CizgiveDizi", url: "https://cizgivedizi.com" },
    { name: "Ddizi", url: "https://www.ddizi.im" },
    { name: "DiziAsia", url: "https://diziasia.com" },
    { name: "DiziAsya", url: "https://api.diziasya.com" },
    { name: "DiziBox", url: "https://www.dizibox.live" },
    { name: "DiziKorea", url: "https://dizikorea3.com" },
    { name: "DiziLife", url: "https://dizi68.life" },
    { name: "DiziYou", url: "https://www.diziyou.one" },
    { name: "DMax", url: "https://www.dmax.com.tr" },
    { name: "FilmEkseni", url: "https://filmekseni.top" },
    { name: "FilmHane", url: "https://www.filmhane.ink" },
    { name: "FilmMakinesi", url: "https://filmmakinesi.to" },
    { name: "Filmzal", url: "https://filmzal.me" },
    { name: "FullHDFilmizlesene", url: "https://www.fullhdfilmizlesene.life" },
    { name: "GinikoCanli", url: "https://www.giniko.com" },
    { name: "KanalD", url: "https://www.kanald.com.tr" },
    { name: "Kick", url: "https://kick.com" },
    { name: "KoreanTurk", url: "https://www.koreanturk.net" },
    { name: "KultFilmler", url: "https://kultfilmler.net" },
    { name: "NowTv", url: "https://www.nowtv.com.tr" },
    { name: "OnePaceTr", url: "https://www.onepacetr.net" },
    { name: "OpenAnime", url: "https://openani.me" },
    { name: "RareFilmm", url: "https://rarefilmm.com" },
    { name: "SeiCode", url: "https://seiwatch.net" },
    { name: "SelcukFlix", url: "https://selcukflix.co" },
    { name: "SetFilmIzle", url: "https://www.setfilmizle.uk" },
    { name: "ShowTv", url: "https://www.showtv.com.tr" },
    { name: "StarTv", url: "https://www.startv.com.tr" },
    { name: "Teve2", url: "https://www.tv2.com.tr" },
    { name: "TLC", url: "https://www.tlctv.com.tr" },
    { name: "TrAnimeIzle", url: "https://www.tranimeizle.io" },
    { name: "TrDiziIzle", url: "https://www.trdiziizle.tv" },
    { name: "Trt1", url: "https://www.trt1.com.tr" },
    { name: "TrtCocuk", url: "https://www.trtcocuk.net.tr" },
    { name: "Tv8", url: "https://www.tv8.com.tr" },
    { name: "WebteIzle", url: "https://webteizle3.xyz" },
    { name: "TvDiziler", url: "https://tvdiziler.tv" },
    { name: "YabanciDizi", url: "https://yabancidizi.life" },
    { name: "YeniKaynak", url: "https://www.yenikaynak.com" },
    { name: "YesilCamTv", url: "https://yesilcamtv.com.tr" },
    { name: "YTS", url: "https://yts.gg" },
    { name: "Turkanime", url: "https://www.turkanime.tv" },
    { name: "WebDramaTurkey", url: "https://webdramaturkey2.com" },
    { name: "Watch2Movies", url: "https://watch2movies.net" },
    { name: "HDFilmDelisi", url: "https://hdfilmdelisi.one" },
    { name: "Netmirror", url: "https://net11.cc" },
    { name: "Dismirror", url: "https://net11.cc" },
    { name: "Primemirror", url: "https://net11.cc" },
    { name: "HubCloud", url: "https://hubcloud.cx" },
    { name: "uhdmovies", url: "https://gamesleech.com" },
    { name: "DizifilmORG", url: "https://dizifilm.org" },
    { name: "HDFilmizle", url: "https://www.hdfilmizle.now" },
    { name: "YTSYedek", url: "https://en.yts.lu" },
    { name: "MultiEmbedAPI", url: "https://multiembed.mov" },
    { name: "vidsrctoAPI", url: "https://vidsrc.cc" },
    { name: "Vidsrcxyz", url: "https://vsembed.ru" },
    { name: "Watch32", url: "https://watch32.sx" },
    { name: "movieBox", url: "https://themoviebox.org" },
    { name: "vidrock", url: "https://vidrock.ru" },
    { name: "vidlink", url: "https://vidlink.pro" },
    { name: "vidfastProApi", url: "https://vidfast.pro" },
    { name: "vidPlusApi", url: "https://player2.vidplus.pro" },
    { name: "Videasy", url: "https://api.videasy.net" },
    { name: "WFilmizle", url: "https://www.wfilmizle.pw" },
    { name: "DiziGecesi", url: "https://dizigecesi.com" },
    { name: "SSRMovies", url: "https://ssrmovies.archi" }
];

// CORS proxy list (ücretsiz)
const PROXIES = [
    "https://api.allorigins.win/raw?url=",
    "https://api.allorigins.cf/raw?url="
];
const MAX_CONCURRENT_FETCHES = 8;

function normalizeUrl(url) {
    return url.replace(/\/+$/g, "");
}

async function fetchWithProxy(url) {
    for (const proxy of PROXIES) {
        try {
            const response = await fetch(proxy + encodeURIComponent(url));
            if (response.ok) {
                return await response.text();
            }
        } catch (error) {
            console.warn('Proxy başarısız:', proxy, error);
        }
    }
    throw new Error('Tüm proxy istekleri başarısız oldu');
}

async function searchAll() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (!query) {
        alert('Lütfen bir film/dizi adı girin!');
        searchInput.focus();
        return;
    }

    const normalizedQuery = query.toLowerCase();
    const loading = document.getElementById('loading');
    const resultsDiv = document.getElementById('results');
    const searchButton = document.getElementById('searchButton');

    loading.style.display = 'block';
    resultsDiv.innerHTML = '';
    searchButton.disabled = true;

    const found = [];
    const errors = [];

    const jobs = SITES.map(site => async () => {
        const url = `${normalizeUrl(site.url)}/?s=${encodeURIComponent(query)}`;
        try {
            const html = await fetchWithProxy(url);
            if (html.toLowerCase().includes(normalizedQuery)) {
                found.push({ site: site.name, url });
            }
        } catch (error) {
            errors.push(site.name);
        }
    });

    for (let i = 0; i < jobs.length; i += MAX_CONCURRENT_FETCHES) {
        const batch = jobs.slice(i, i + MAX_CONCURRENT_FETCHES).map(job => job());
        await Promise.all(batch);
    }

    loading.style.display = 'none';
    searchButton.disabled = false;

    if (found.length > 0) {
        resultsDiv.innerHTML = found.map(item => `
            <div class="result-item">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer">🔗 ${item.site}</a>
            </div>
        `).join('');
    } else {
        resultsDiv.innerHTML = `<div class="no-result">😕 "${query}" için sonuç bulunamadı</div>`;
    }

    if (errors.length > 0 && found.length === 0) {
        resultsDiv.innerHTML += `<div class="no-result">Bazı sitelere erişilemedi veya proxy isteği başarısız oldu.</div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        searchAll();
    });
});
