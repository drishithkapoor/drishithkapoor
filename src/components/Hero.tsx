import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 pb-12 lg:pt-32 lg:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:44px_44px] opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-24 top-64 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl animate-float-slower" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-10">
        <div className="reveal">
         <img
        src="/drishith.jpg"
         alt="Drishith Kapoor"
       className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
         />
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
            <Sparkles size={14} />
            Healthcare × Technology × Innovation
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-6xl lg:text-[64px]">
            Drishith
            <br />
            Kapoor
          </h1>

          <p className="mt-5 text-lg font-medium text-ink-600 sm:text-xl">
            Student <span className="text-ink-300">•</span> Innovator <span className="text-ink-300">•</span>{' '}
            Researcher <span className="text-ink-300">•</span> Entrepreneur
          </p>

          <p className="mt-6 max-w-lg text-lg leading-[1.5] text-ink-500">
            &ldquo;Exploring the intersection of healthcare, technology, and innovation.&rdquo;
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-ink-800 hover:shadow-card-hover"
            >
              Explore My Journey
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#biotwin"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-800 transition-all hover:border-teal-300 hover:text-teal-700"
            >
              Discover BioTwin
            </a>
          </div>
        </div>

        <div className="reveal flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-teal-200/50 via-transparent to-amber-200/40 blur-2xl" />
            <div className="absolute -inset-3 animate-pulse-ring rounded-[2.5rem] border border-teal-300/50" />

            <div className="relative h-[360px] w-[300px] overflow-hidden rounded-[2.25rem] border border-white/60 bg-ink-100 shadow-card-hover sm:h-[420px] sm:w-[340px]">
              <img
                src="/drishith.jpg"
                alt="Drishith Kapoor"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-8 hidden items-center gap-2 rounded-2xl border border-ink-100 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:flex">
              <div className="h-2 w-2 rounded-full bg-teal-500" />
              <span className="text-xs font-semibold text-ink-700">AI-Powered Digital Health</span>
            </div>

            <div className="absolute -right-6 top-10 hidden rounded-2xl border border-ink-100 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:block">
              <span className="text-xs font-semibold text-ink-700">BioTwin — CIO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
