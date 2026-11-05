/* Small DOM and string helpers shared by every component. */
const $ = id => document.getElementById(id);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
/* Every gallery and card cover advances on this interval. */
const DUR = 5000;

const ic = n => '<svg class="i" aria-hidden="true"><use href="#i-' + n + '"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
const tags = a => a.map(t => '<span class="tag">' + esc(t) + '</span>').join('');
const list = a => '<ul>' + a.map(d => '<li>' + esc(d) + '</li>').join('') + '</ul>';
const photos = p => p.media.filter(m => m.src);

const scrollTop = () => window.scrollTo({top: 0, behavior: REDUCED ? 'auto' : 'smooth'});

/* Copy text; resolves true on success, false when the clipboard is unavailable. */
function copyText(t) {
  try { return navigator.clipboard.writeText(t).then(() => true, () => false); }
  catch (e) { return Promise.resolve(false); }
}
