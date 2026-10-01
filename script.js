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
});
