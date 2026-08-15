import { Linkedin, Mail } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:44px_44px] opacity-[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[100px]" />

      <div ref={ref} className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="reveal font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let&rsquo;s Build What&rsquo;s Next.
        </h2>

        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-[1.6] text-ink-300">
          Curious minds create questions.
          <br />
          Bold minds turn them into ideas.
          <br />
          Builders turn those ideas into impact.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact-details"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-teal-400"
          >
            Connect With Me
          </a>
          <a
            href="#biotwin"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Explore BioTwin
          </a>
        </div>

        <div id="contact-details" className="reveal mt-14 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/drishith-kapoor-385715420"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-teal-400/60 hover:bg-teal-500/10"
          >
            <Linkedin size={18} className="text-teal-400" />
            LinkedIn
          </a>
          <a
            href="mailto:kapoordrishith8@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-teal-400/60 hover:bg-teal-500/10"
          >
            <Mail size={18} className="text-teal-400" />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
