// ===== Bixus — script.js =====

(function () {
  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        if (o !== item) o.classList.remove('open');
      });
      item.classList.toggle('open', !isOpen);
    });
  });

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Lead form -> WhatsApp deep link
  var WA_NUMBER = '5527992588879';
  document.querySelectorAll('.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="nome"]');
      var pet = form.querySelector('[name="pet"]');
      var interesse = form.querySelector('[name="interesse"]');
      var phone = form.querySelector('[name="telefone"]');

      var parts = [];
      parts.push('Olá! Vim pelo site da Bixus e gostaria de mais informações.');
      if (name && name.value) parts.push('Nome: ' + name.value);
      if (phone && phone.value) parts.push('Telefone: ' + phone.value);
      if (pet && pet.value) parts.push('Pet: ' + pet.value);
      if (interesse && interesse.value) parts.push('Interesse: ' + interesse.value);

      var msg = encodeURIComponent(parts.join('\n'));
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank');
    });
  });

  // Track ad-friendly conversion event on WhatsApp clicks (hook for Google Ads / GA4 later)
  document.querySelectorAll('a[href*="wa.me"], a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'contact_click', { method: link.href.indexOf('wa.me') > -1 ? 'whatsapp' : 'phone' });
      }
    });
  });
})();
