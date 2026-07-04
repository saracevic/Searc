// Backend URL (Render'daki adresin)
const API_URL = window.location.origin + '/api/search';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').focus();
    document.getElementById('searchBtn').addEventListener('click', searchAll);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchAll();
    });
});

async function searchAll() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (!query || query.length < 2) {
        showStatus('Lütfen en az 2 karakter girin', 'error');
        return;
    }

    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').innerHTML = '';
    showStatus(`🔍 "${query}" aranıyor...`, 'success');

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });

        const data = await response.json();
        document.getElementById('loading').style.display = 'none';

        if (data.found > 0) {
            showStatus(`✅ ${data.found} sonuç bulundu!`, 'success');
            displayResults(data.results, query);
        } else {
            showStatus(`❌ "${query}" için sonuç bulunamadı`, 'error');
            document.getElementById('results').innerHTML = `
                <div class="no-result">😕 Hiçbir sonuç bulunamadı</div>
            `;
        }
    } catch (error) {
        document.getElementById('loading').style.display = 'none';
        showStatus('❌ Sunucu hatası!', 'error');
    }
}

function displayResults(results, query) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = results.map(item => `
        <div class="result-item">
            <a href="${item.url}" target="_blank">🔗 ${item.site} - ${query}</a>
        </div>
    `).join('');
}

function showStatus(message, type) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = type;
    status.style.display = 'block';
}
