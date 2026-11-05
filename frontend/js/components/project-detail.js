/* Project detail dialog (#detail): title, gallery, video, stats, problem / what I did / tech, links.
   Prev/next buttons and arrow keys step through the project list. */

const dlg = $('detail'), body = $('d-body');
let projects = [], cur = 0, gallery = null;

const blk = (icon, title, inner) => '<div class="blk"><span class="blk-ic">' + ic(icon) + '</span><h3>' + title + '</h3>' + inner + '</div>';

/* Stats count up from 0 when a project opens. */
function countUp(root) {
  if (REDUCED) return;
  root.querySelectorAll('.stat b').forEach(b => {
    const raw = b.textContent, num = +raw.replace(/,/g, '');
    if (!/^[0-9,]+$/.test(raw) || !num) return;
    const t0 = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - t0) / 900), e = 1 - Math.pow(1 - k, 3);
      b.textContent = Math.round(num * e).toLocaleString('en-US');
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  });
}

function render(dir) {
  const p = projects[cur], ph = photos(p);
  $('d-prev').hidden = $('d-next').hidden = $('d-count').hidden = projects.length < 2;
  $('d-no').textContent = p.no + ' · ' + p.type;
  $('d-status').className = 'status ' + p.kind; $('d-status').textContent = p.status;
  $('d-count').textContent = (cur + 1) + ' / ' + projects.length;
  const stats = p.stats ? '<div class="stats">' + p.stats.map(s => '<div class="stat"><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>').join('') + '</div>' : '';
  const links = p.links ? blk('link', 'ลิงก์', '<ul class="links">' + p.links.map(l =>
    '<li><a class="dlink" href="' + l.href + '" target="_blank" rel="noopener">' + ic(l.icon) + esc(l.label) + '</a></li>').join('') + '</ul>') : '';
  body.innerHTML =
    '<div class="dtitle"><h2 id="d-title">' + esc(p.title) + '</h2><p class="sub">' + esc(p.sub) + '</p>' +
      (p.team ? '<span class="dteam">' + ic('users') + esc(p.team) + '</span>' : '') + '<p class="sum">' + esc(p.summary) + '</p></div>' +
    '<div class="dgrid"><div class="dmedia">' +
      '<div class="pmg" id="d-g"></div>' +
      (p.video ? '<div class="vid" id="vid"><span class="label">' + ic('play') + ' วิดีโอสาธิต</span><video controls preload="metadata" playsinline' + (p.poster ? ' poster="' + p.poster + '"' : '') + ' src="' + p.video + '"></video></div>' : '') +
    '</div><div class="dspec">' + stats +
      blk('alert', 'ปัญหา', '<p>' + esc(p.problem) + '</p>') +
      blk('wrench', 'สิ่งที่ทำ', list(p.did)) +
      blk('layers', 'เทคโนโลยี', '<div class="tags">' + tags(p.tech) + '</div>') +
      (p.limits ? blk('flag', 'ข้อจำกัดที่ยอมรับ', list(p.limits)) : '') +
      (p.next ? blk('route', 'แผนต่อไป', list(p.next)) : '') +
      (p.note ? blk('alert', 'หมายเหตุ', '<p>' + esc(p.note) + '</p>') : '') +
      links +
    '</div></div>' +
    '<div class="dfoot"><div><span class="label">Sheet</span><b>' + p.no + ' / ' + projects[projects.length - 1].no + '</b></div><div><span class="label">DWG NO.</span><b>PF-2569</b></div><div><span class="label">Drawn by</span><b>ศุภกฤต ก.</b></div><div><span class="label">Media</span><b>' + (ph.length ? ph.length + ' ภาพ' : 'ภาพประกอบ') + '</b></div></div>';

  if (gallery) gallery.destroy();
  gallery = Gallery($('d-g'), p.media, {label: 'ภาพผลงาน ' + p.title});
  countUp(body);
  const vid = $('vid');
  // ponytail: video block hides itself until the file exists; publish media/gigabike-demo.mp4 and it appears
  if (vid) vid.querySelector('video').addEventListener('error', () => { vid.hidden = true; });
  body.scrollTop = 0;
  body.dataset.dir = dir || ''; body.classList.remove('anim'); void body.offsetWidth; body.classList.add('anim');
}

function openProject(i, dir) {
  cur = (i + projects.length) % projects.length; render(dir);
  if (!dlg.open) dlg.showModal();
}

function initProjectDetail(list) {
  projects = list;
  $('d-prev').addEventListener('click', () => openProject(cur - 1, 'prev'));
  $('d-next').addEventListener('click', () => openProject(cur + 1, 'next'));
  $('d-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => {
    const v = dlg.querySelector('video'); if (v) v.pause();
    if (gallery) { gallery.destroy(); gallery = null; }
  });
  document.addEventListener('keydown', e => {
    if (!dlg.open || isLightboxOpen() || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    if (e.target.closest && e.target.closest('video,.pmg-stage')) return;
    const d = e.key === 'ArrowLeft' ? -1 : 1;
    openProject(cur + d, d < 0 ? 'prev' : 'next'); e.preventDefault();
  });
}
