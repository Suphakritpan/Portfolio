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

/* Guide hints (shown once per browser): 1) arrow to the theme button  2) phone tip to open desktop mode */
(() => {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const seen = k => { try { return localStorage.getItem(k) === '1'; } catch (e) { return false; } };
  const mark = k => { try { localStorage.setItem(k, '1'); } catch (e) {} };
  const mk = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
  const NS = 'http://www.w3.org/2000/svg';

  /* 1. Theme button hint */
  const btn = document.getElementById('theme-btn');
  if (btn && !seen('hint-theme')) {
    let layer = null, raf = 0, timer = 0;
    const place = () => {
      raf = 0; if (!layer) return;
      const r = btn.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) { layer.style.visibility = 'hidden'; return; }
      layer.style.visibility = '';
      const tx = r.left + r.width / 2, ty = r.top + r.height / 2, up = ty > 170, bw = 220;
      const bx = Math.max(12, Math.min(innerWidth - bw - 12, tx - bw + 24)), by = up ? ty - 156 : ty + 80;
      const bub = layer.querySelector('.hint-bubble'), bh = bub.offsetHeight;
      bub.style.left = bx + 'px'; bub.style.top = by + 'px';
      const sx = Math.min(bx + bw - 30, tx), sy = up ? by + bh + 4 : by - 4, ex = tx, ey = up ? ty - 30 : ty + 30;
      const my = (sy + ey) / 2;
      layer.querySelector('.hint-line').setAttribute('d', `M${sx} ${sy} C${sx} ${my} ${ex} ${my} ${ex} ${ey}`);
      const h = layer.querySelector('.hint-head'), a = up ? 0 : 180;
      h.setAttribute('transform', `translate(${ex} ${ey}) rotate(${a})`);
      const ring = layer.querySelector('.hint-ring'); ring.style.left = tx + 'px'; ring.style.top = ty + 'px';
    };
    const sched = () => { if (!raf) raf = requestAnimationFrame(place); };
    const close = () => {
      if (!layer) return; mark('hint-theme'); clearTimeout(timer);
      const l = layer; layer = null; l.classList.add('out'); setTimeout(() => l.remove(), still ? 0 : 400);
      removeEventListener('scroll', sched); removeEventListener('resize', sched);
    };
    const show = () => {
      if (layer || seen('hint-theme')) return;
      layer = mk('div', 'hint-layer');
      const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('aria-hidden', 'true');
      svg.innerHTML = '<path class="hint-line" pathLength="1"/><path class="hint-head" d="M0 0 L-9 -14 L9 -14 Z"/>';
      layer.appendChild(svg); layer.appendChild(mk('span', 'hint-ring'));
      const bub = mk('div', 'hint-bubble', '<b>ลองดู</b>สลับธีมสว่าง / มืดได้ที่ปุ่มนี้'); bub.setAttribute('role', 'status');
      const x = mk('button', 'hint-x', '<svg class="i" aria-hidden="true"><use href="#i-x"/></svg>'); x.type = 'button'; x.setAttribute('aria-label', 'ปิดคำแนะนำ');
      x.addEventListener('click', close); bub.appendChild(x); layer.appendChild(bub);
      document.body.appendChild(layer); place();
      addEventListener('scroll', sched, {passive: true}); addEventListener('resize', sched);
      timer = setTimeout(close, 12000);
    };
    btn.addEventListener('click', close);
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { o.disconnect(); setTimeout(show, 1200); } }, {threshold: 1}).observe(btn);
  }

  /* 2. Phone tip */
  if (matchMedia('(max-width: 820px) and (pointer: coarse)').matches && !seen('hint-desktop')) {
    setTimeout(() => {
      const m = mk('div', 'hint-m',
        '<svg class="arr" viewBox="0 0 34 54" aria-hidden="true"><path d="M17 52V6M5 18 17 5l12 13"/></svg>' +
        '<div class="card-m" role="status"><b>เคล็ดลับ</b>เว็บนี้ออกแบบมาให้ดูบนคอม ถ้าเปิดบนมือถือ แนะนำให้เปิดเมนูเบราว์เซอร์ (⋮ หรือ ⋯) แล้วเลือก “เว็บไซต์เดสก์ท็อป” จะเห็นเลย์เอาต์เต็ม<button type="button">เข้าใจแล้ว</button></div>');
      m.querySelector('button').addEventListener('click', () => { mark('hint-desktop'); m.classList.add('out'); setTimeout(() => m.remove(), still ? 0 : 400); });
      document.body.appendChild(m);
    }, 1800);
  }
})();
