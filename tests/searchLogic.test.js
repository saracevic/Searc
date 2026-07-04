const assert = require('assert');
const { shouldTreatAsMatch } = require('../lib/searchMatcher');

assert.strictEqual(shouldTreatAsMatch('<html><title>Breaking Bad</title><body>...</body></html>', 'breaking bad'), true);
assert.strictEqual(shouldTreatAsMatch('<html><body>Bu sayfada breaking kelimesi var.</body></html>', 'breaking bad'), false);
assert.strictEqual(shouldTreatAsMatch('<html><body><h1>Breaking Bad</h1><p>Yayın akışı burada.</p></body></html>', 'breaking bad'), true);
assert.strictEqual(shouldTreatAsMatch('<html><body><nav>Breaking</nav><p>Bu bir genel menü metnidir.</p></body></html>', 'breaking bad'), false);

console.log('search logic tests passed');
