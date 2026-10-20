// Barra rosa de progreso de lectura (arriba de todo).
// Se hace con JavaScript para que funcione igual en cualquier navegador
// y no dependa de cómo el compilador procese el CSS al publicar.

const bar = document.querySelector<HTMLElement>('.scroll-progress');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (bar && !reduceMotion.matches) {
  let frame = 0;

  const update = () => {
    frame = 0;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = `scaleX(${progress})`;
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
}
