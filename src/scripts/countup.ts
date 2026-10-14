// Numbers count up from zero when they scroll into view.
// Usage: <span data-countup="1000" data-suffix="+" data-decimals="0">1,000+</span>
// The element keeps its final text for no-JS and reduced motion.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = document.querySelectorAll<HTMLElement>('[data-countup]');

if (els.length && !reduced) {
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);
  const run = (el: HTMLElement) => {
    const end = parseFloat(el.dataset.countup!);
    const decimals = parseInt(el.dataset.decimals ?? '0', 10);
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';
    const fmt = new Intl.NumberFormat('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const ms = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      el.textContent = prefix + fmt.format(end * ease(t)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
}
