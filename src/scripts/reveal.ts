// Aparición de elementos al hacer scroll.
// El movimiento lo hace el CSS (animations.css); este script solo marca
// cada elemento con la clase "is-visible" cuando entra en pantalla.
//
// Para animar otro elemento: agregá su selector a la lista de abajo.
// Variantes: 'up' (sube), 'scale' (sube con zoom), 'left' y 'right' (entran de costado).

type Variant = 'up' | 'scale' | 'left' | 'right';

const groups: Array<[selector: string, variant: Variant]> = [
  ['.section-intro > *', 'up'], // eyebrow, título y bajada de cada sección
  ['.section-heading > *', 'up'], // cabecera del portfolio
  ['.service-card', 'scale'],
  ['.project-card', 'scale'],
  ['.timeline li', 'up'],
  ['.process-cta > *', 'up'],
  ['.faq', 'up'],
  ['.contact-copy > *', 'left'],
  ['.contact-form', 'right'],
  ['.answer-text', 'up'],
  ['.fit', 'up'],
  ['.feature-card', 'scale'],
  ['.feature-note', 'up'],
  ['.cmp-wrap', 'up'],
  ['.cmp-footnote', 'up'],
  ['.cta-strip', 'up'],
  ['.start-list li', 'up'],
  ['.start-media', 'right'],
  ['.spot-copy > *', 'up'],
  ['.spot-card', 'scale'],
];

const STEP = 90; // ms entre elementos que aparecen a la vez
const MAX_DELAY = 450;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const entering = entries
        .filter((e) => e.isIntersecting)
        .map((e) => e.target as HTMLElement)
        .sort((a, b) => {
          const ra = a.getBoundingClientRect();
          const rb = b.getBoundingClientRect();
          return ra.top - rb.top || ra.left - rb.left;
        });

      entering.forEach((el, i) => {
        el.style.setProperty('--d', `${Math.min(i * STEP, MAX_DELAY)}ms`);
        el.classList.add('is-visible');
        observer.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );

  groups.forEach(([selector, variant]) => {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      // Lo que ya está a la vista (o por encima) al cargar no se oculta
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add('reveal', `reveal-${variant}`);
      observer.observe(el);
    });
  });
}
