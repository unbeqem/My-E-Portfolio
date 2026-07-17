import Image from "next/image";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image src="/images/tk-logo.png" alt="TK" width={32} height={32} className="rounded-full" />
          <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            © {new Date().getFullYear()} Tristan Keick
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-brand"
          >
            GitHub
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-brand"
          >
            Kontakt
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-brand"
          >
            Lebenslauf
          </a>
        </div>
      </div>
    </footer>
  );
}
