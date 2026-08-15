import { Crown, ShieldCheck, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { leadershipRoles } from '../data/content';

const icons = [Users, ShieldCheck, Crown];

export default function Leadership() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="leadership" className="bg-cream-200/60 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Impact</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Leadership &amp; Service
          </h2>
        </div>

        <div className="reveal grid gap-6 sm:grid-cols-3">
          {leadershipRoles.map((role, i) => {
            const Icon = icons[i];
            return (
              <div
                key={role.title}
                className="flex flex-col rounded-3xl border border-ink-100 bg-cream-50 p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-950">{role.title}</h3>
                <p className="mt-1 text-sm font-semibold text-ink-400">{role.org}</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink-600">{role.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
