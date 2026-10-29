// 1) Arabic / English toggle
var ar = false;
var langBtn = document.getElementById('lang');

langBtn.onclick = function () {
  ar = !ar;
  document.documentElement.lang = ar ? 'ar' : 'en';
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  langBtn.textContent = ar ? 'English' : 'العربية';

  document.querySelectorAll('[data-en]').forEach(function (e) {
    e.textContent = e.getAttribute(ar ? 'data-ar' : 'data-en');
  });
  document.querySelectorAll('[data-ph-en]').forEach(function (e) {
    e.placeholder = e.getAttribute(ar ? 'data-ph-ar' : 'data-ph-en');
  });
};

// 2) Fade-in sections on scroll
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (x) {
    if (x.isIntersecting) x.target.classList.add('in');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.rv').forEach(function (e) { io.observe(e); });

// 3) Contact form -> opens WhatsApp with the message
document.getElementById('f').onsubmit = function (e) {
  e.preventDefault();
  var text = 'Hi Ahmed, I’m ' + document.getElementById('n').value + '. ' + document.getElementById('m').value;
  window.open('https://wa.me/201099566651?text=' + encodeURIComponent(text), '_blank');
};
