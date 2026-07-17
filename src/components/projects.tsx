"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-brand">
              02 / Projekte
            </span>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Acht Projekte, ein roter Faden: Details, die man spürt.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-ink-soft">
            Von E-Commerce bis Client-Websites &mdash; jedes Projekt auf GitHub
            frei einsehbar.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
