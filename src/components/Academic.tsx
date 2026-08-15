import { useReveal } from '../hooks/useReveal';

export default function Academic() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]" />
      <div ref={ref} className="reveal relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">Academic Achievement</span>
        <p className="mt-4 font-display text-6xl font-bold text-white sm:text-7xl">95%</p>
        <p className="mt-3 text-lg font-medium text-ink-300">CBSE Class 10 Board Examinations</p>
      </div>
    </section>
  );
}
