import { useReveal } from '../hooks/useReveal';
import { aboutHighlights } from '../data/content';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="scroll-mt-20 bg-cream-100 pt-24 pb-24 lg:pt-28 lg:pb-32">
      <div ref={ref} className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Who I Am</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            About Me
          </h2>
        </div>

        <div className="reveal mb-12 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-teal-200 via-transparent to-amber-200/70 blur-md" />
            <img
              src="/drishith.jpg"
              alt="Drishith Kapoor"
              className="relative h-44 w-44 rounded-full border border-teal-300/60 object-cover shadow-photo transition-all duration-500 hover:shadow-card-hover hover:border-teal-400/80 sm:h-52 sm:w-52"
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal space-y-5 text-center text-lg leading-[1.6] text-ink-600">
          <p>
            I am a student innovator with a growing interest in healthcare, technology, artificial intelligence,
            research, and entrepreneurship. My journey combines academic excellence, scientific exploration,
            leadership, and hands-on technology projects.
          </p>
          <p>
            I enjoy exploring how technology can solve meaningful real-world problems, particularly in
            healthcare. Through research, internships, leadership experiences, and projects like BioTwin, I am
            continuously learning, building, and turning ideas into practical solutions.
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {aboutHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-ink-100 bg-ink-50/50 px-4 py-7 text-center transition-all hover:border-teal-200 hover:bg-teal-50/50"
            >
              <div className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">{item.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-500 sm:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
