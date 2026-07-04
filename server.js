const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Frontend dosyaları için

// Tüm siteler
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

// Arama endpoint'i
app.post('/api/search', async (req, res) => {
    const { query } = req.body;
    
    if (!query || query.length < 2) {
        return res.status(400).json({ error: 'En az 2 karakter girin' });
    }

    console.log(`🔍 Aranıyor: "${query}" - ${SITES.length} site`);

    const normalizedQuery = query.toLowerCase();
    const results = [];

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const countOccurrences = (text, substring) => {
        let count = 0;
        let pos = 0;
        while ((pos = text.indexOf(substring, pos)) !== -1) {
            count++;
            pos += substring.length;
        }
        return count;
    };

    const isStrongMatch = (html, queryText) => {
        const escapedQuery = escapeRegExp(queryText);
        const titleMatch = new RegExp(`<title[^>]*>[^<]*${escapedQuery}[^<]*<\\/title>`).test(html);
        const headingMatch = new RegExp(`<h[1-6][^>]*>[^<]*${escapedQuery}[^<]*<\\/h[1-6]>`).test(html);
        const linkMatch = new RegExp(`<a[^>]*>[^<]*${escapedQuery}[^<]*<\\/a>`).test(html);
        const exactWordMatch = new RegExp(`\\b${escapedQuery}\\b`).test(html);
        const matchCount = countOccurrences(html, queryText);

        return titleMatch || headingMatch || linkMatch || matchCount >= 2 || exactWordMatch;
    };

    for (const site of SITES) {
        try {
            const searchUrls = [
                `${site.url}/?s=${encodeURIComponent(query)}`,
                `${site.url}/search?q=${encodeURIComponent(query)}`,
                `${site.url}/?search=${encodeURIComponent(query)}`,
                `${site.url}/?q=${encodeURIComponent(query)}`
            ];

            let found = false;
            for (const url of searchUrls) {
                try {
                    const response = await axios.get(url, {
                        timeout: 5000,
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                        }
                    });

                    if (response.data) {
                        const html = response.data.toLowerCase();
                        if (html.includes(normalizedQuery) && isStrongMatch(html, normalizedQuery)) {
                            results.push({
                                site: site.name,
                                url: url
                            });
                            found = true;
                            console.log(`✅ ${site.name}: Bulundu!`);
                            break;
                        }
                    }
                } catch (e) {}
            }
            
            if (!found) {
                console.log(`❌ ${site.name}: Bulunamadı`);
            }
        } catch (error) {
            console.log(`⚠️ ${site.name}: Hata`);
        }
    }

    res.json({
        query: query,
        totalSites: SITES.length,
        found: results.length,
        results: results
    });
});

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server çalışıyor: http://localhost:${PORT}`);
    console.log(`📊 ${SITES.length} site taranacak`);
});
