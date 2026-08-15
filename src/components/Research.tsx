import { ExternalLink, FlaskConical } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { researchPapers } from '../data/content';

export default function Research() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="research" className="bg-cream-100 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal mb-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Exploration</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Research &amp; Scientific Exploration
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.6] text-ink-500">
            Research has allowed me to explore emerging technologies and scientific challenges across
            healthcare, artificial intelligence, and connected systems.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-6 lg:grid-cols-3">
          {researchPapers.map((paper) => (
            <div
              key={paper.index}
              className="group flex flex-col rounded-3xl border border-ink-100 bg-cream-50 p-7 shadow-card transition-all hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-ink-100 transition-colors group-hover:text-teal-100">
                  {paper.index}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <FlaskConical size={18} />
                </div>
              </div>

              <span className="mt-5 inline-block w-fit rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-500">
                {paper.tag}
              </span>

              <h3 className="mt-4 font-display text-[17px] font-semibold leading-snug text-ink-950">
                {paper.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.6] text-ink-500">{paper.description}</p>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-ink-950 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-ink-800"
              >
                Read Paper
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
