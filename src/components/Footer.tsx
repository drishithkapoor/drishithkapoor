import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-950 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-ink-500 sm:flex-row lg:px-10">
        <p>&copy; {new Date().getFullYear()} Drishith Kapoor.</p>
        <div className="flex items-center gap-4">
          <p>Invictus International School, Amritsar</p>
          <span className="h-4 w-px bg-ink-700" />
          <a
            href="https://www.linkedin.com/in/drishith-kapoor-385715420"
            target="_blank"
            rel="noreferrer"
            aria-label="Drishith Kapoor on LinkedIn"
            className="text-ink-400 transition-colors hover:text-teal-400"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:kapoordrishith8@gmail.com"
            aria-label="Email Drishith Kapoor"
            className="text-ink-400 transition-colors hover:text-teal-400"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
