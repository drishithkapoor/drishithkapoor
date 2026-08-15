import { useReveal } from '../hooks/useReveal';
import { journeyItems } from '../data/content';

export default function Journey() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="journey" className="bg-cream-200/60 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="reveal mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Timeline</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            My Journey
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink-200 sm:left-1/2" />

          <div className="space-y-10">
            {journeyItems.map((item, i) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`reveal relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 0 ? '' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="absolute left-[15px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-teal-500 bg-cream-50 sm:left-1/2" />

                <div className={`pl-10 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <div
                    className={`rounded-2xl border p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover ${
                      item.featured
                        ? 'border-teal-300 bg-gradient-to-br from-teal-50 via-cream-50 to-amber-50/60 shadow-glow'
                        : 'border-ink-100 bg-cream-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                          item.featured ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700'
                        }`}
                      >
                        {item.year}
                      </span>
                      {item.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-700">
                          Featured achievement
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">{item.title}</h3>
                    {item.org && <p className="mt-0.5 text-sm font-medium text-ink-400">{item.org}</p>}
                    <p className="mt-3 text-[15px] leading-[1.55] text-ink-600">{item.description}</p>
                    {item.featured && (
                      <div className="mt-5 border-t border-teal-200/70 pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                          Gold Medal
                        </p>
                        <p className="mt-1 text-sm font-semibold text-ink-800">
                          Young Entrepreneur of the Year (YEY) Challenge 2026
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
