"use client";

import { motion, type Variants } from "framer-motion";
import { FileText, ArrowDown } from "lucide-react";
import BlobField from "@/components/blob-field";
import { GithubIcon } from "@/components/icons";
import { socials } from "@/lib/data";

const line1 = "Hey, I build".split(" ");
const line2 = "playful interfaces.".split(" ");

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.4 },
  },
};

const word: Variants = {
  hidden: { y: "110%", rotate: 4 },
  show: {
    y: "0%",
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <BlobField />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-ink-soft"
        >
          Tristan Keick · Full-Stack Developer
        </motion.p>

        <h1 className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[6.4vw]">
          <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-[0.28em] overflow-hidden"
          >
            {line1.map((w) => (
              <span key={w} className="overflow-hidden pb-[0.08em]">
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.span>
          <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-[0.28em] overflow-hidden text-brand"
          >
            {line2.map((w) => (
              <span key={w} className="overflow-hidden pb-[0.08em]">
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-lg text-lg text-ink-soft sm:text-xl"
        >
          Full-Stack-Entwickler mit einer Schwäche für kleine Details, sauberen
          Code und Systeme, die von der Oberfläche bis zur Datenbank durchdacht sind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            data-cursor="Say hi"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden rounded-full bg-ink px-7 py-3.5 font-mono text-sm uppercase tracking-wider text-bg"
          >
            <span className="relative z-10">Sag Hallo</span>
            <span className="absolute inset-0 -translate-y-full bg-brand transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="GitHub"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-sm uppercase tracking-wider text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            data-cursor="PDF"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-sm uppercase tracking-wider text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <FileText size={16} /> Lebenslauf
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
