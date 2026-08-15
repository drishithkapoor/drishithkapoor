import { Stethoscope } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { healthcareExperience } from '../data/content';

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="bg-cream-200/60 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Clinical Exposure</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Healthcare Experience
          </h2>
        </div>

        <div className="reveal grid gap-6 sm:grid-cols-2">
          {healthcareExperience.map((exp) => (
            <div
              key={exp.org}
              className="rounded-3xl border border-ink-100 bg-cream-50 p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <Stethoscope size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">{exp.org}</h3>
              <p className="mt-1 text-sm font-semibold text-teal-700">{exp.period}</p>
              <p className="mt-1 text-sm font-medium text-ink-400">{exp.role}</p>
              <p className="mt-4 text-[15px] leading-[1.6] text-ink-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
