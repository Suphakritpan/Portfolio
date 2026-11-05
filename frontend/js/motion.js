/* Motion layer (plain script): marquee loop, stat count-up, hero parallax, card spotlight, sheet pop. */
(() => {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Marquee: duplicate the run once so translateX(-50%) loops seamlessly */
  const track = document.querySelector('.tape-track');
  if (track) {
    const run = track.firstElementChild;
    if (run) { const dup = run.cloneNode(true); dup.setAttribute('aria-hidden', 'true'); track.appendChild(dup); }
  }

  /* Count-up when the stats strip enters the viewport */
  const stats = document.querySelector('.stats');
  if (stats) {
    const nums = [...stats.querySelectorAll('b[data-to]')];
    const run = () => {
      stats.classList.add('in');
      nums.forEach(b => {
        const to = +b.dataset.to;
        if (still) { b.textContent = to; return; }
        const t0 = performance.now(), dur = 1400;
        const tick = now => {
          const p = Math.min((now - t0) / dur, 1);
          b.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    };
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { run(); o.disconnect(); } }, {threshold: .4}).observe(stats);
  }

  /* Sheet number pop on first view */
  const io = new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('seen'); o.unobserve(e.target); } }), {threshold: .15});
  document.querySelectorAll('.sheet').forEach(s => io.observe(s));

  if (still || !matchMedia('(pointer: fine)').matches) return;

  /* Hero graphic drifts opposite to the cursor */
  const tb = document.querySelector('.tb-main'), mg = document.querySelector('.mg');
  if (tb && mg) tb.addEventListener('pointermove', e => {
    const r = tb.getBoundingClientRect();
    mg.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5) * -24 + 'px');
    mg.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5) * -24 + 'px');
  });

  /* Card spotlight follows the cursor (delegated: cards are rendered by main.js) */
  const cards = document.getElementById('cards');
  if (cards) cards.addEventListener('pointermove', e => {
    const c = e.target.closest('.card'); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', e.clientX - r.left + 'px');
    c.style.setProperty('--my', e.clientY - r.top + 'px');
  });
})();

/* Award rank slam + count-up (runs regardless of pointer type) */
(() => {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bs = [...document.querySelectorAll('.rank b')];
  if (still) return;
  bs.forEach(b => b.classList.add('pre'));
  const io = new IntersectionObserver((es, o) => es.forEach(e => {
    if (!e.isIntersecting) return;
    const b = e.target, to = +b.textContent; o.unobserve(b);
    b.classList.remove('pre'); b.classList.add('hit');
    if (to > 1) { const t0 = performance.now(); const tick = n => { const p = Math.min((n - t0) / 900, 1); b.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
  }), {threshold: .6});
  bs.forEach(b => io.observe(b));

  if (!matchMedia('(pointer: fine)').matches) return;

  /* Grid glow */
  const g = document.createElement('div'); g.className = 'gridlit'; g.setAttribute('aria-hidden', 'true'); document.body.appendChild(g);
  addEventListener('pointermove', e => { g.style.setProperty('--cx', e.clientX + 'px'); g.style.setProperty('--cy', e.clientY + 'px'); g.classList.add('on'); }, {passive: true});
  document.addEventListener('pointerleave', () => g.classList.remove('on'));

  /* Magnetic buttons */
  document.addEventListener('pointermove', e => {
    document.querySelectorAll('.btn:hover').forEach(b => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * .12}px ${(e.clientY - r.top - r.height / 2) * .2}px`;
    });
  }, {passive: true});
  document.addEventListener('pointerout', e => { const b = e.target.closest && e.target.closest('.btn'); if (b) b.style.translate = ''; });
})();

/* Theme toggle: flips between light and dark, remembers the choice (first visit follows the OS) */
(() => {
  const btn = document.getElementById('theme-btn'); if (!btn) return;
  const root = document.documentElement, mq = matchMedia('(prefers-color-scheme: dark)');
  const cur = () => root.dataset.theme || (mq.matches ? 'dark' : 'light');
  const paint = () => {
    const dark = cur() === 'dark';
    btn.querySelector('use').setAttribute('href', dark ? '#i-sun' : '#i-moon');
    btn.setAttribute('aria-pressed', dark);
    btn.title = dark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด';
  };
  const apply = next => {
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  };
  btn.addEventListener('click', () => {
    const next = cur() === 'dark' ? 'light' : 'dark';
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return apply(next);
    /* Slow circular reveal growing from the button; browsers without View Transitions get a soft colour fade */
    if (document.startViewTransition) {
      const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
      const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      document.startViewTransition(() => apply(next)).ready.then(() =>
        root.animate({clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`]},
          {duration: 900, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)'}));
    } else {
      root.classList.add('theme-fade');
      apply(next);
      setTimeout(() => root.classList.remove('theme-fade'), 700);
    }
  });
  mq.addEventListener('change', paint);
  paint();
})();

/* QR code: click the small code (or its button) to show it full-size for the audience; backdrop click or Esc closes */
(() => {
  const dlg = document.getElementById('qr-dlg'); if (!dlg) return;
  const open = () => dlg.showModal();
  ['qr-open', 'qr-big'].forEach(id => document.getElementById(id)?.addEventListener('click', open));
  document.getElementById('qr-x')?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
})();
