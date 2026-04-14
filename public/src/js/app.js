/**
 * ENEM na Prática - Script Global Utilities
 */

// Countdown Timer para Ofertas
export function initCountdown(ids) {
  const endTime = new Date(Date.now() + (3 * 3600 + 59 * 60 + 59) * 1000);
  
  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const d = Math.max(0, endTime - Date.now());
    const h = Math.floor(d / 3600000);
    const m = Math.floor((d % 3600000) / 60000);
    const s = Math.floor((d % 60000) / 1000);

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id.includes('h')) el.textContent = pad(h);
        if (id.includes('m')) el.textContent = pad(m);
        if (id.includes('s')) el.textContent = pad(s);
      }
    });
  }

  tick();
  setInterval(tick, 1000);
}

// Interseção Observer para Animações
export function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.reveal').forEach((el) => {
    io.observe(el);
  });
}

// FAQ Accordion
export function initFaq() {
  window.faq = function(btn) {
    const a = btn.nextElementSibling;
    const open = a.classList.contains('open');
    
    document.querySelectorAll('.faq-answer').forEach(x => x.classList.remove('open'));
    document.querySelectorAll('.faq-btn').forEach(x => x.classList.remove('open'));
    
    if (!open) {
      a.classList.add('open');
      btn.classList.add('open');
    }
  };
}

// Inicialização se for chamado diretamente
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initFaq();
    initCountdown(['ub-h', 'ub-m', 'ub-s', 'ph', 'pm', 'ps']);
  });
}
