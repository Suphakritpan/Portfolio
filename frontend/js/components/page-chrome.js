/* Page-level behaviour: sheet nav highlights the section in view, back-to-top button, CAD-style cursor readout in mm. */

function initSectionNav() {
  const links = document.querySelectorAll('.snav a');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id));
  }), {rootMargin: '-35% 0px -60% 0px'});
  document.querySelectorAll('.sheet[id]').forEach(s => io.observe(s));
}

function initCursorReadout() {
  if (!matchMedia('(pointer:fine)').matches) return;
  const co = $('coords');
  let raf = 0, px = 0, py = 0;
  addEventListener('pointermove', e => {
    px = e.pageX; py = e.pageY;
    if (!raf) raf = requestAnimationFrame(() => {
      raf = 0; co.hidden = false;
      co.textContent = 'X ' + (px * .2646).toFixed(1).padStart(6, '0') + '  Y ' + (py * .2646).toFixed(1).padStart(6, '0') + ' mm';
    });
  }, {passive: true});
}

function initPageChrome() {
  initSectionNav();
  $('totop').addEventListener('click', scrollTop);
  initCursorReadout();
}
