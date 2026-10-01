// Rejimni sahifa chizilishidan oldin o'rnatamiz (oq "miltillash" bo'lmasligi uchun).
// Avval saqlangan tanlov, bo'lmasa qurilma sozlamasi.
var root = document.documentElement;
var savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
root.dataset.theme = savedTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.addEventListener('DOMContentLoaded', function () {
  // Footer'dagi yilni avtomatik yangilash
  document.getElementById('y').textContent = new Date().getFullYear();

  // Light / dark almashtirish tugmasi
  var toggle = document.getElementById('theme-toggle');
  function updateLabel() {
    toggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? "Light rejimga o'tish" : "Dark rejimga o'tish");
  }
  updateLabel();
  toggle.addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    updateLabel();
  });

  // Telefon menyusi: ☰ tugmasi ochadi/yopadi, havola bosilganda yoki Esc'da yopiladi
  var nav = document.getElementById('nav');
  var menuBtn = document.getElementById('menu-toggle');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
  }
  menuBtn.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
  });

  // Sahifa aylantirilganda header ostiga soya
  var header = document.getElementById('site-header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menyuda hozir ko'rinib turgan bo'limni ajratib ko'rsatish
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  byId['kochmas-mulk'] = byId['kochar-mulk'] = byId['biznes-reja'] = byId.xizmatlar;
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); });
        var link = byId[entry.target.id];
        if (link) link.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });
  }
});
