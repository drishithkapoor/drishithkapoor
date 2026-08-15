import { Binary, Braces, ChartNoAxesCombined, Globe, Server, Sparkles, TestTubeDiagonal } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { skills } from '../data/content';

const icons = [Binary, Braces, ChartNoAxesCombined, Globe, Server, TestTubeDiagonal, Sparkles];

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="bg-cream-100 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Capabilities</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Technology &amp; Skills
          </h2>
        </div>

        <div className="reveal grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-ink-100 bg-ink-50/40 p-6 transition-all hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50/40 hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-teal-600 shadow-card transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-ink-900">{skill.name}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-ink-400">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-10 text-center text-sm text-ink-500">
          Python, Java &amp; Data Analytics —{' '}
          <span className="font-semibold text-ink-700">Balaji Tech Veda Institute</span>
        </p>
      </div>
    </section>
  );
}
