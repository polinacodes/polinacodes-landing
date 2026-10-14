// Brillo que sigue al cursor sobre las tarjetas oscuras.
// El dibujo del brillo está en animations.css; este script solo le pasa la
// posición del mouse a cada tarjeta (variables --mx y --my).
// Para sumar otra tarjeta, agregá su selector a la lista.

const selector =
  '.service-card, .spot-card, .feature-section.is-icon .feature-card, .spot-uses li, .svc-badges li, .metrics span';

// Solo en dispositivos con mouse: en pantallas táctiles no hay "hover"
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>(selector).forEach((card) => {
    let frame = 0;

    card.addEventListener('pointermove', (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      });
    });
  });
}
