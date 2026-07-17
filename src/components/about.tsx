"use client";

import { motion, type Variants } from "framer-motion";
import { skills } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="font-mono text-sm uppercase tracking-[0.25em] text-brand">
            01 / Über mich
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Ich baue Software, die durchdacht ist &mdash;
            <span className="text-ink-soft"> von der Oberfläche bis zur Datenbank.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
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
            Im Backend bringe ich Erfahrung mit C# und .NET sowie relationalen
            Datenbanken wie MSSQL und PostgreSQL mit. Code soll dabei auch in
            einem Jahr noch verständlich sein &mdash; egal auf welcher Seite
            des Stacks. Aktuell vertiefe ich mich täglich in neue Tools und
            Patterns, um auf beiden Seiten weiterzukommen.
          </motion.p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className="group rounded-2xl border border-line bg-bg-soft p-4 transition-colors hover:border-brand"
              >
                <p className="font-display text-base font-semibold text-ink">
                  {skill.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  {skill.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
