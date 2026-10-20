// Efecto "bloque que se expande al hacer scroll" en la sección de alta conversión.
// Solo escritorio (desde 1025 px) y sin "reducir movimiento".
// Se hace con JavaScript para que funcione igual en cualquier navegador
// y no dependa de cómo el compilador procese el CSS al publicar.

const sections = document.querySelectorAll<HTMLElement>('.spotlight');
const desktop = window.matchMedia('(min-width: 1025px)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (sections.length > 0 && !reduceMotion.matches) {
  let frame = 0;

  const update = () => {
    frame = 0;

    sections.forEach((section) => {
      if (!desktop.matches) {
        section.style.clipPath = '';
        return;
      }

      // 0 = el bloque recién asoma por abajo; 1 = ya entró completo
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / rect.height));

      if (progress >= 1) {
        section.style.clipPath = '';
        return;
      }

      // Margen lateral inicial: ~3 % del ancho, sin pasar del espacio libre a los costados del contenido
      const maxInset = Math.max(0, Math.min(window.innerWidth * 0.03, (window.innerWidth - 1160) / 2 - 24));
      const remaining = 1 - progress;

      section.style.clipPath = `inset(0 ${maxInset * remaining}px round ${32 * remaining}px)`;
    });
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
}
