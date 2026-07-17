"use client";

import { motion, type Variants } from "framer-motion";
import { skillGroups, skills } from "@/lib/data";
import CodeCard from "@/components/code-card";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const groupContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const chipPop: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 22 },
  },
};

const dotBg: Record<string, string> = {
  brand: "bg-brand",
  coral: "bg-accent-coral",
  violet: "bg-accent-violet",
};

const chipHover: Record<string, string> = {
  brand:
    "hover:border-brand hover:text-brand hover:shadow-[0_0_0_1px_var(--brand),0_10px_28px_-10px_var(--brand)]",
  coral:
    "hover:border-accent-coral hover:text-accent-coral hover:shadow-[0_0_0_1px_var(--accent-coral),0_10px_28px_-10px_var(--accent-coral)]",
  violet:
    "hover:border-accent-violet hover:text-accent-violet hover:shadow-[0_0_0_1px_var(--accent-violet),0_10px_28px_-10px_var(--accent-violet)]",
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex h-full flex-col"
        >
          <div>
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-brand">
              01 / Über mich
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Ich baue Software, die durchdacht ist &mdash;
              <span className="text-ink-soft"> von der Oberfläche bis zur Datenbank.</span>
            </h2>
          </div>

          <div className="flex flex-1 items-center justify-start py-10">
            <CodeCard />
          </div>
        </motion.div>

        <div className="flex flex-col gap-12">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Ich bin Full-Stack-Entwickler aus Deutschland mit einem Auge fürs
            Detail: von der ersten Skizze bis zur letzten Datenbankabfrage. Im
            Frontend arbeite ich am liebsten an Interfaces, die sich lebendig
            anfühlen &mdash; mit durchdachten Übergängen und klarer Struktur.
            Im Backend bringe ich Erfahrung mit C# und .NET, relationalen
            Datenbanken wie MSSQL und PostgreSQL sowie Auth- und
            Payment-Infrastruktur wie Clerk und Stripe mit. Auch mobil bin ich
            unterwegs &mdash; mit nativer Android-Entwicklung in Kotlin. Code
            soll dabei auch in einem Jahr noch verständlich sein, egal auf
            welcher Seite des Stacks.
          </motion.p>

          <div className="flex flex-col gap-8">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={groupContainer}
                transition={{ delayChildren: gi * 0.05 }}
              >
                <motion.div
                  variants={fadeUp}
                  className="mb-3 flex items-center gap-2"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${dotBg[group.accent]}`} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                    {group.label}
                  </span>
                </motion.div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={chipPop}
                      whileHover={{ y: -3, rotate: -1, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-default rounded-full border border-line bg-bg-soft px-4 py-2 font-display text-sm font-medium text-ink transition-colors duration-200 ${chipHover[group.accent]}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative mt-24 border-y border-line bg-bg-soft py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-10">
          {[...skills, ...skills].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.15em] text-ink-faint"
            >
              {item}
              <span className="text-brand">•</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
