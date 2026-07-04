function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function countOccurrences(text, substring) {
  let count = 0;
  let pos = 0;
  while ((pos = text.indexOf(substring, pos)) !== -1) {
    count += 1;
    pos += substring.length;
  }
  return count;
}

function shouldTreatAsMatch(html, query) {
  if (!html || !query) return false;

  const normalizedHtml = html.toLowerCase();
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery || normalizedHtml.includes(normalizedQuery) === false) return false;

  const escapedQuery = escapeRegExp(normalizedQuery);
  const titleMatch = new RegExp(`<title[^>]*>[^<]*${escapedQuery}[^<]*<\\/title>`).test(normalizedHtml);
  const headingMatch = new RegExp(`<h[1-6][^>]*>[^<]*${escapedQuery}[^<]*<\\/h[1-6]>`).test(normalizedHtml);
  const linkMatch = new RegExp(`<a[^>]*>[^<]*${escapedQuery}[^<]*<\\/a>`).test(normalizedHtml);
  const exactWordMatch = new RegExp(`\\b${escapedQuery}\\b`).test(normalizedHtml);
  const repeatedQueryMatch = countOccurrences(normalizedHtml, normalizedQuery) >= 2;

  return titleMatch || headingMatch || linkMatch || exactWordMatch || repeatedQueryMatch;
}

module.exports = {
  shouldTreatAsMatch,
};
