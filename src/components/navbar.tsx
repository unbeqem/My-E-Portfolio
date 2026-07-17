"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { socials } from "@/lib/data";

const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -24, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-500 ${
          scrolled
            ? "max-w-4xl border border-line bg-bg-soft/80 py-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border border-transparent bg-transparent py-2"
        }`}
      >
        <button
          type="button"
          data-cursor="Top"
          onClick={() => goTo("top")}
          className="flex items-center gap-2"
          aria-label="Zum Seitenanfang"
        >
          <Image src="/images/tk-logo.png" alt="TK" width={34} height={34} className="rounded-full" />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              data-cursor="Go"
              onClick={() => goTo(link.id)}
              className="group relative font-mono text-[13px] uppercase tracking-wider text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            data-cursor="Open"
            className="rounded-full bg-ink px-4 py-2 font-mono text-[13px] uppercase tracking-wider text-bg transition-transform hover:scale-105"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 flex flex-col gap-1 rounded-3xl border border-line bg-bg-soft/95 p-4 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className="rounded-xl px-4 py-3 text-left font-display text-lg text-ink hover:bg-bg-elevated"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 flex items-center justify-between px-4">
              <ThemeToggle />
              <a
                href={socials.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-4 py-2 font-mono text-[13px] uppercase tracking-wider text-bg"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
