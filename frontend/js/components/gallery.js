/* Gallery (Planet Minecraft pattern): black stage, counter, fullscreen, caption, thumbnails.
   Every gallery advances every DUR ms. ponytail: one timer per gallery, paused when off-screen, hovered, or the tab is hidden. */

const live = [];
document.addEventListener('visibilitychange', () => live.forEach(g => g.arm()));

/* One media item as HTML: photo or inline SVG illustration. */
function mediaHTML(m, thumb) {
  if (m.src) return '<img src="' + m.src + '" alt="' + (thumb ? '' : esc(m.cap)) + '" loading="lazy" decoding="async">';
  return thumb ? ILL[m.svg] : '<div class="plate">' + ILL[m.svg] + '</div>';
}

/* Render a gallery into root. Options: label (aria-label), thumbs (false hides the strip). Returns a handle with destroy(). */
function Gallery(root, items, o = {}) {
  const g = {i: 0, hover: false, vis: false, on: !REDUCED, timer: 0};
  const multi = items.length > 1;
  root.innerHTML =
    '<div class="pmg-stage" tabindex="0" aria-roledescription="carousel" aria-label="' + esc(o.label || 'แกลเลอรีภาพ') + '">' +
      '<div class="pmg-slide on"></div><div class="pmg-slide"></div>' +
      '<span class="pmg-count"></span>' +
      '<button class="pmg-btn pmg-fs" type="button" aria-label="ดูเต็มจอ">' + ic('max') + '</button>' +
      (multi ? '<button class="pmg-btn pmg-prev" type="button" aria-label="ภาพก่อนหน้า">' + ic('chev-l') + '</button><button class="pmg-btn pmg-next" type="button" aria-label="ภาพถัดไป">' + ic('chev-r') + '</button><button class="pmg-btn pmg-pp" type="button" aria-label="หยุดหรือเล่นภาพ"></button><div class="pmg-bar"><i></i></div>' : '') +
    '</div>' +
    '<div class="pmg-foot"><p class="pmg-cap" aria-live="polite"></p>' +
      (multi && o.thumbs !== false ? '<div class="pmg-thumbs">' + items.map((m, k) => '<button class="pmg-thumb" type="button" data-k="' + k + '" aria-label="ภาพที่ ' + (k + 1) + ': ' + esc(m.cap) + '">' + mediaHTML(m, true) + '</button>').join('') + '</div><button class="pmg-more" type="button" aria-expanded="false" hidden></button>' : '') +
    '</div>';
  const q = s => root.querySelector(s);
  const st = q('.pmg-stage'), slides = root.querySelectorAll('.pmg-slide'), bar = q('.pmg-bar i'), cap = q('.pmg-cap'),
        cnt = q('.pmg-count'), thumbs = root.querySelectorAll('.pmg-thumb'), tw = q('.pmg-thumbs'), pp = q('.pmg-pp'), more = q('.pmg-more');
  let front = 0;
  // portrait photos would be cropped to the landscape thumbnail box: mark them so CSS shows the whole picture instead
  thumbs.forEach(t => {
    const im = t.querySelector('img'); if (!im) return;
    const mark = () => { if (im.naturalHeight > im.naturalWidth * 1.05) im.classList.add('tall'); };
    if (im.complete) mark(); else im.addEventListener('load', mark, {once: true});
  });

  g.show = (k, first) => {
    const n = items.length, prev = g.i; g.i = (k + n) % n;
    const m = items[g.i], back = slides[1 - front];
    const dir = (k < prev && !(prev === n - 1 && g.i === 0)) ? 'l' : 'r';
    back.innerHTML = mediaHTML(m, false);
    back.classList.remove('in-l', 'in-r');
    if (first) { slides[front].innerHTML = back.innerHTML; back.innerHTML = ''; }
    else { back.classList.add('in-' + dir); void back.offsetWidth; back.classList.add('on'); slides[front].classList.remove('on'); front = 1 - front; }
    cnt.textContent = (g.i + 1) + ' / ' + n;
    cap.innerHTML = '<span>' + esc(m.cap) + '</span>' + (m.cls ? '<span class="pmg-cls">' + CLS[m.cls] + '</span>' : '');
    cap.classList.remove('swap'); void cap.offsetWidth; cap.classList.add('swap');
    thumbs.forEach((t, j) => t.classList.toggle('on', j === g.i));
    // collapsed strip shows 2 rows: bring the active thumbnail's row into view (the expanded grid is left where the visitor put it)
    if (tw && !root.classList.contains('all')) tw.scrollTop = Math.max(0, thumbs[g.i].offsetTop - 3);
    const nx = items[(g.i + 1) % n]; if (nx && nx.src) new Image().src = nx.src;
    g.arm();
  };
  const running = () => g.on && g.vis && !g.hover && !document.hidden && multi && !root.classList.contains('all');
  g.arm = () => {
    clearTimeout(g.timer);
    if (bar) { bar.classList.remove('run'); void bar.offsetWidth; }
    if (pp) pp.innerHTML = ic(g.on ? 'pause' : 'play');
    if (!running()) return;
    if (bar) bar.classList.add('run');
    g.timer = setTimeout(() => g.show(g.i + 1), DUR);
  };
  g.next = () => g.show(g.i + 1);
  g.prev = () => g.show(g.i - 1);
  /* Native fullscreen; falls back to the lightbox (photos only) where fullscreen is refused or missing. */
  g.full = () => {
    const ph = photos({media: items}), k = Math.max(ph.indexOf(items[g.i]), 0);
    const fallback = () => { if (ph.length) openLightbox(ph, k); };
    const r = root.requestFullscreen ? root.requestFullscreen() : null;
    if (r && r.catch) r.catch(fallback); else if (!r) fallback();
  };
  g.destroy = () => { clearTimeout(g.timer); const x = live.indexOf(g); if (x > -1) live.splice(x, 1); };

  /* "Show all": the strip is limited to 2 rows of thumbnails; when more exist, a button opens them all as a grid (autoplay pauses meanwhile) */
  if (more) {
    const label = () => { more.textContent = root.classList.contains('all') ? 'ย่อรูปทั้งหมด' : 'ดูทั้งหมด (' + items.length + ' รูป)'; };
    const fit = () => { if (!root.classList.contains('all')) more.hidden = tw.scrollHeight <= tw.clientHeight + 1; };
    label();
    if ('ResizeObserver' in window) new ResizeObserver(fit).observe(tw); else fit();
    more.addEventListener('click', () => {
      const on = root.classList.toggle('all');
      more.setAttribute('aria-expanded', on); label();
      if (on) { const t = thumbs[g.i]; tw.scrollTop = Math.max(0, t.offsetTop - 3); } else tw.scrollTop = Math.max(0, thumbs[g.i].offsetTop - 3);
      g.arm();
    });
  }
  root.addEventListener('click', e => {
    const b = e.target.closest('button'), has = c => b && b.classList.contains(c);
    if (has('pmg-next')) return g.next();
    if (has('pmg-prev')) return g.prev();
    if (has('pmg-pp')) { g.on = !g.on; return g.arm(); }
    if (has('pmg-fs')) return g.full();
    if (has('pmg-thumb')) { g.show(+b.dataset.k); if (root.classList.contains('all')) st.scrollIntoView({block: 'nearest', behavior: REDUCED ? 'auto' : 'smooth'}); return; }
    if (e.target.closest('.pmg-slide') && !st.dataset.swiped) g.full();
  });
  st.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { g.hover = true; g.arm(); } });
  st.addEventListener('pointerleave', () => { if (g.hover) { g.hover = false; g.arm(); } });
  let x0 = null;
  st.addEventListener('pointerdown', e => { x0 = e.clientX; });
  st.addEventListener('pointerup', e => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) { st.dataset.swiped = '1'; dx < 0 ? g.next() : g.prev(); setTimeout(() => { delete st.dataset.swiped; }, 60); }
  });
  st.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { g.next(); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { g.prev(); e.preventDefault(); }
  });
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { g.vis = es[0].isIntersecting; g.arm(); }, {threshold: .3}).observe(root);
  else g.vis = true;
  g.show(0, true);
  live.push(g);
  return g;
}

/* Card cover: crossfade through the first 5 photos every DUR ms, with ruler ticks showing which one is up
   (no controls; the whole card opens the project). Photos pan and zoom in CSS; .idle pauses that while off-screen. */
function coverCycler(cover, p) {
  const ph = photos(p).slice(0, 5); if (ph.length < 2 || REDUCED) return;
  const layers = ph.map((m, k) => {
    const d = document.createElement('div');
    d.className = 'cf' + (k === 0 ? ' on' : '');
    d.style.setProperty('--img', 'url("' + new URL(m.src, document.baseURI).href + '")'); // absolute: a relative url() in a custom property resolves against the stylesheet
    d.innerHTML = '<img src="' + m.src + '" alt="" loading="lazy" decoding="async">';
    cover.insertBefore(d, cover.querySelector('.mcount'));
    return d;
  });
  const first = cover.querySelector(':scope > img'); if (first) first.remove();
  const bar = document.createElement('div');
  bar.className = 'ticks'; bar.setAttribute('aria-hidden', 'true');
  bar.innerHTML = layers.map(() => '<i></i>').join('');
  cover.appendChild(bar);
  const ticks = bar.children;
  let i = 0, vis = false, t = 0;
  function arm() {
    clearTimeout(t);
    const run = vis && !document.hidden;
    cover.classList.toggle('idle', !run);
    for (let k = 0; k < ticks.length; k++) { ticks[k].classList.remove('run'); ticks[k].classList.toggle('on', k === i); }
    if (!run) return;
    void bar.offsetWidth; ticks[i].classList.add('run');
    t = setTimeout(() => { layers[i].classList.remove('on'); i = (i + 1) % layers.length; layers[i].classList.add('on'); arm(); }, DUR);
  }
  new IntersectionObserver(es => { vis = es[0].isIntersecting; arm(); }, {threshold: .3}).observe(cover);
  document.addEventListener('visibilitychange', arm);
}
