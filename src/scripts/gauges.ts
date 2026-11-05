// Medidores de PageSpeed: el círculo y el número suben de 0 al puntaje
// cuando la tarjeta entra en pantalla. Sin JavaScript o con "reducir movimiento"
// quedan directamente en su valor final, que ya viene en el HTML.

const DURATION = 1400;
const STAGGER = 140; // ms entre un medidor y el siguiente

const easeOut = (t: number) => 1 - (1 - t) ** 3;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  document.querySelectorAll<HTMLElement>('.scores').forEach((group) => {
    const gauges = [...group.querySelectorAll<HTMLElement>('.gauge')].map((el) => ({
      arc: el.querySelector<SVGCircleElement>('.gauge-arc')!,
      label: el.querySelector<HTMLElement>('strong')!,
      score: Number(el.dataset.score),
    }));

    const paint = (gauge: (typeof gauges)[number], value: number) => {
      gauge.arc.setAttribute('stroke-dasharray', `${value} 100`);
      gauge.label.textContent = String(Math.round(value));
    };

    gauges.forEach((gauge) => paint(gauge, 0));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const frame = (now: number) => {
          let running = false;
          gauges.forEach((gauge, i) => {
            const t = Math.min(Math.max(now - start - i * STAGGER, 0) / DURATION, 1);
            paint(gauge, gauge.score * easeOut(t));
            if (t < 1) running = true;
          });
          if (running) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      },
      { threshold: 0.6 },
    );
    observer.observe(group);
  });
}
