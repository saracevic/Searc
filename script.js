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

// CORS proxy - Ücretsiz proxy servisi
// NOT: Bu proxy'ler bazen yavaş olabilir veya çalışmayabilir
const PROXY_URL = "https://api.allorigins.win/raw?url=";
// Alternatif proxy: https://corsproxy.io/?

let searchTimeout;

async function searchAll() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        showStatus('Lütfen bir film/dizi adı girin!', 'loading');
        setTimeout(() => hideStatus(), 2000);
        return;
    }

    const resultsDiv = document.getElementById('results');
    const statusDiv = document.getElementById('status');
    
    resultsDiv.innerHTML = '';
    showStatus(`🔍 "${query}" aranıyor... (${SITES.length} site taranıyor)`, 'loading');

    let foundResults = [];
    let totalChecked = 0;

    // Site başına arama yap
    for (const site of SITES) {
        try {
            const searchUrl = `${site.url}`;
            // Site içinde arama yapmak için siteye özel URL oluştur
            // Çoğu sitede ?s= veya ?search= parametresiyle arama yapılır
            const searchUrls = [
                `${site.url}/?s=${encodeURIComponent(query)}`,
                `${site.url}/search?q=${encodeURIComponent(query)}`,
                `${site.url}/?search=${encodeURIComponent(query)}`,
                `${site.url}/search/${encodeURIComponent(query)}`,
                `${site.url}/?q=${encodeURIComponent(query)}`
            ];

            let found = false;
            for (const url of searchUrls) {
                try {
                    const response = await fetch(`${PROXY_URL}${encodeURIComponent(url)}`);
                    if (response.ok) {
                        const html = await response.text();
                        // Site içinde arama terimini ara (basitçe)
                        if (html.toLowerCase().includes(query.toLowerCase())) {
                            foundResults.push({
                                site: site.name,
                                url: url
                            });
                            found = true;
                            break;
                        }
                    }
                } catch (e) {
                    // Bu URL denemesi başarısız, devam et
                }
            }

            totalChecked++;
            // Durumu güncelle
            if (totalChecked % 5 === 0 || totalChecked === SITES.length) {
                showStatus(`🔍 "${query}" aranıyor... (${totalChecked}/${SITES.length} site tarandı, ${foundResults.length} sonuç bulundu)`, 'loading');
            }

        } catch (error) {
            // Bu site için hata, devam et
            console.log(`${site.name} hatası:`, error);
        }
    }

    // Sonuçları göster
    if (foundResults.length > 0) {
        showStatus(`✅ ${foundResults.length} sonuç bulundu!`, 'complete');
        displayResults(foundResults, query);
    } else {
        showStatus(`❌ "${query}" için hiçbir sonuç bulunamadı.`, 'complete');
        resultsDiv.innerHTML = `<div class="no-result">😕 Hiçbir sitede "${query}" bulunamadı.</div>`;
    }
}

function displayResults(results, query) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = results.map(result => `
        <div class="result-item">
            <a href="${result.url}" target="_blank">🔗 ${result.site} - ${query}</a>
            <span class="site-name">${result.site}</span>
        </div>
    `).join('');
}

function showStatus(message, type) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = type;
    status.style.display = 'block';
}

function hideStatus() {
    const status = document.getElementById('status');
    status.style.display = 'none';
}

// Sayfa yüklendiğinde inputa odaklan
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchInput').focus();
});
