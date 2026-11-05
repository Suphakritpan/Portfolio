/* Entry point (loaded last, plain scripts so file:// works): wires content data to components. Static markup lives in index.html; dynamic parts render here. */

initProjectDetail(P);
renderCards($('cards'), P, openProject);
$('open-latest').addEventListener('click', () => openProject(0));

/* Section galleries: <div class="pmg" data-gal="setName" [data-thumbs="0"]> */
document.querySelectorAll('[data-gal]').forEach(el =>
  Gallery(el, SETS[el.dataset.gal], {thumbs: el.dataset.thumbs !== '0', label: 'ภาพประกอบ'}));

/* Zoomable images: <button data-set="setName" data-k="index"> opens that set in the lightbox */
document.querySelectorAll('[data-set]').forEach(z =>
  z.addEventListener('click', () => openLightbox(SETS[z.dataset.set], +z.dataset.k || 0)));

initContact();
initPageChrome();

/* Deep link: #p01 … #p07 opens that project */
const hm = location.hash.match(/^#p0?([1-9])$/);
if (hm && +hm[1] <= P.length) openProject(+hm[1] - 1);
