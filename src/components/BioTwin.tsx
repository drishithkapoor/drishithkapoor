import { Activity, Award, Cpu, ExternalLink, HeartPulse } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { biotwinResponsibilities } from '../data/content';

export default function BioTwin() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="biotwin" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:44px_44px] opacity-[0.06)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[100px]" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">Featured Project</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">BioTwin</h2>
          <p className="mt-3 text-lg font-medium text-ink-300">My Journey from Idea to Innovation</p>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.6] text-ink-300">
            BioTwin is an AI-powered Digital Human Twin that combines health data to provide personalized
            insights, simulate lifestyle changes, and empower people to make more proactive health decisions.
          </p>
        </div>

        <div className="reveal grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                <Cpu size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-400">My Role</p>
                <p className="font-display text-lg font-semibold text-white">CIO — BioTwin</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {biotwinResponsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5] text-ink-200">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-teal-400"
              >
                Explore BioTwin
              </a>
              <a
                href="https://biotwin-digitalmodel.github.io/BioTwin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-teal-300 hover:text-teal-300"
              >
                Visit BioTwin
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-1 flex-col items-center justify-center rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-transparent p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">
                <Award size={26} />
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-white">Gold Medal</p>
              <p className="mt-1 text-sm font-medium text-ink-300">
                Young Entrepreneur of the Year (YEY) Challenge 2026
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                <HeartPulse size={20} className="mx-auto text-teal-400" />
                <p className="mt-2 text-xs font-medium text-ink-300">Healthcare-Focused</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                <Activity size={20} className="mx-auto text-teal-400" />
                <p className="mt-2 text-xs font-medium text-ink-300">AI-Driven Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
