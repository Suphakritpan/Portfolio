/* Project cards in the bento grid (#cards). Clicking a card title opens the detail dialog through onOpen(index). */

function cardHTML(p, i) {
  const m = p.media[0], n = photos(p).length;
  const cover = m.src ? '<img src="' + m.src + '" alt="' + esc(m.cap) + '" loading="lazy">' : ILL[m.svg];
  const badge = n ? ic('image') + ' ' + n + ' ภาพ' : ic('layers') + ' ภาพประกอบ';
  return '<article class="card reveal' + (p.feature ? ' feature' : '') + (p.size ? ' ' + p.size : '') + '"><div class="cover">' + cover + '<span class="mcount">' + badge + '</span></div>' +
    '<div class="card-body"><div class="meta"><span class="pno">' + p.no + '</span><span class="status ' + p.kind + '">' + p.status + '</span>' + (p.feature ? '<span class="status s-star">โปรเจกต์เด่น</span>' : '') + '</div>' +
    '<h3><button type="button" class="card-link" data-i="' + i + '">' + esc(p.title) + '</button></h3>' +
    '<p class="sub">' + esc(p.sub) + '</p><p class="sum">' + esc(p.summary) + '</p>' +
    '<div class="tags">' + tags(p.tech) + '</div>' +
    '<span class="more">ดูรายละเอียด ' + ic('arrow-right') + '</span></div></article>';
}

function renderCards(root, projects, onOpen) {
  root.innerHTML = projects.map(cardHTML).join('');
  root.querySelectorAll('.card').forEach((c, i) => coverCycler(c.querySelector('.cover'), projects[i]));
  root.querySelectorAll('.card-link').forEach(b => b.addEventListener('click', () => onOpen(+b.dataset.i)));
}
