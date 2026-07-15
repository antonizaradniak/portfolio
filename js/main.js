/* =========================================================
   PORTFOLIO — skrypt strony
   1) Efekt "pisania" w hero
   2) Menu mobilne (hamburger)
   3) Animacja pojawiania się sekcji przy przewijaniu
   4) Automatyczny rok w stopce
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1) Efekt pisania ----------
     Zmień poniższe zdania na swoje. Pisze je i kasuje w kółko. */
  const phrases = [
    'Buduję strony dla lokalnych firm',
    'Piszę czysty, szybki kod',
    'Zamieniam pomysły w działające strony',
  ];

  const typedEl = document.getElementById('typed');

  if (typedEl) {
    if (reduceMotion) {
      // Bez animacji — po prostu pokaż pierwsze zdanie
      typedEl.textContent = phrases[0];
    } else {
      let p = 0, i = 0, deleting = false;

      const tick = () => {
        const current = phrases[p];
        typedEl.textContent = deleting
          ? current.slice(0, i--)
          : current.slice(0, i++);

        let delay = deleting ? 40 : 75;

        if (!deleting && i > current.length) {
          deleting = true;
          delay = 1600;                 // pauza na pełnym zdaniu
        } else if (deleting && i < 0) {
          deleting = false;
          i = 0;
          p = (p + 1) % phrases.length; // następne zdanie
          delay = 400;
        }
        setTimeout(tick, delay);
      };
      tick();
    }
  }

  /* ---------- 2) Menu mobilne ---------- */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    });

    // zamknij menu po kliknięciu w link
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 3) Pojawianie się przy przewijaniu ---------- */
  const revealTargets = document.querySelectorAll(
    '.section__head, .card, .project, .stack, .about__body, .contact__inner'
  );

  if (!reduceMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach((el) => io.observe(el));
  }

  /* ---------- 4) Rok w stopce ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
