/* Lightbox: full-size photo viewer (#lb). Used by the profile photo and as the gallery fullscreen fallback. */

const lb = $('lb');
let items = [], idx = 0;

const isLightboxOpen = () => lb.open;

function openLightbox(list, k) {
  items = list; show(k);
  if (!lb.open) lb.showModal();
}

function show(k) {
  const n = items.length; idx = (k + n) % n;
  const m = items[idx], img = $('lb-img');
  img.src = m.src; img.alt = m.cap; img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
  $('lb-cap').textContent = m.cap; $('lb-count').textContent = (idx + 1) + ' / ' + n;
  $('lb-prev').hidden = $('lb-next').hidden = n < 2;
}

$('lb-prev').addEventListener('click', () => show(idx - 1));
$('lb-next').addEventListener('click', () => show(idx + 1));
$('lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-stage')) lb.close(); });
document.addEventListener('keydown', e => {
  if (!lb.open || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
  if (e.target.closest && e.target.closest('video,.pmg-stage')) return;
  show(idx + (e.key === 'ArrowLeft' ? -1 : 1)); e.preventDefault();
});
