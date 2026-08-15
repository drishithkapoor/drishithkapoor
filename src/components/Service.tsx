import { HandHeart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Service() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-cream-100 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="reveal mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Service</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Creating Equal Opportunities
          </h2>
        </div>

        <div className="reveal rounded-3xl border border-ink-100 bg-ink-50/40 p-8 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <HandHeart size={22} />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">
            Designated Scribe — Class 10 Board Examinations
          </h3>
          <p className="mt-4 text-[16px] leading-[1.65] text-ink-600">
            Served as a designated scribe for a student with autism during the Class 10 board examinations.
            Assisted by accurately writing the student&rsquo;s dictated answers while maintaining
            confidentiality, fairness, and adherence to examination guidelines.
          </p>
          <p className="mt-4 text-[16px] leading-[1.65] text-ink-600">
            This experience strengthened my patience, empathy, communication skills, sense of responsibility,
            and commitment to equal educational opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
