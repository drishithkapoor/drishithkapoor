import { Orbit } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Vision() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="vision" className="relative overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-50 blur-3xl" />

      <div ref={ref} className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_auto] lg:px-10">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Looking Ahead</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            My Vision
          </h2>
          <p className="mt-6 max-w-xl text-xl leading-[1.6] text-ink-600">
            &ldquo;I want to explore how science, technology, and innovation can be combined to solve
            meaningful real-world problems&mdash;especially in healthcare&mdash;and create solutions that can
            make a lasting impact.&rdquo;
          </p>
        </div>

        <div className="reveal flex justify-center">
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-teal-200 bg-teal-50 sm:h-48 sm:w-48">
            <div className="absolute inset-3 animate-pulse-ring rounded-full border border-teal-300" />
            <Orbit size={56} className="text-teal-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
