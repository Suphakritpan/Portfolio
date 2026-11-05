/* Contact actions: copy buttons in the title block, and the FAB speed dial (copy email/phone, back to top) with its toast. */

function initCopyButtons() {
  document.querySelectorAll('.copy').forEach(b => {
    const use = b.querySelector('use'), txt = b.querySelector('span');
    let timer;
    b.addEventListener('click', () => {
      const el = $(b.dataset.target), t = el.href || el.textContent.trim();
      copyText(t).then(ok => {
        if (!ok) {
          // No clipboard: select the text so the user can copy it by hand
          const r = document.createRange(); r.selectNodeContents(el);
          const s = getSelection(); s.removeAllRanges(); s.addRange(r);
          txt.textContent = 'เลือกข้อความแล้ว';
          return;
        }
        b.classList.add('ok'); use.setAttribute('href', '#i-check'); txt.textContent = 'คัดลอกแล้ว';
        $('copy-status').textContent = 'คัดลอก ' + t + ' แล้ว';
        clearTimeout(timer);
        timer = setTimeout(() => { b.classList.remove('ok'); use.setAttribute('href', '#i-copy'); txt.textContent = 'คัดลอก'; }, 1800);
      });
    });
  });
}

let toastTimer;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg; t.hidden = false;
  t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
}

function initFab() {
  const btn = $('fab-btn'), menu = $('fab-menu');
  const setOpen = open => {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'ปิดเมนูทางลัด' : 'ติดต่อและทางลัด');
  };
  btn.addEventListener('click', () => setOpen(menu.hidden));
  document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('#fab')) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); } });
  menu.addEventListener('click', e => {
    const it = e.target.closest('[data-fab]'); if (!it) return;
    const k = it.dataset.fab;
    if (k === 'mail' || k === 'tel') {
      const t = $(k).textContent.trim(), name = k === 'mail' ? 'อีเมล' : 'เบอร์โทร';
      copyText(t).then(ok => toast(ok ? 'คัดลอก' + name + 'แล้ว: ' + t : name + ': ' + t));
    } else if (k === 'top') scrollTop();
    setOpen(false);
  });
}

function initContact() {
  initCopyButtons();
  initFab();
}
