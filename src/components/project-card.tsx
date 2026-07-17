"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/data";

const accentMap = {
  brand: "text-brand",
  coral: "text-accent-coral",
  violet: "text-accent-violet",
};

const glowColorMap = {
  brand: "var(--brand)",
  coral: "var(--accent-coral)",
  violet: "var(--accent-violet)",
};

export default function ProjectCard({ project, i }: { project: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 200, damping: 20 });
  const springRy = useSpring(ry, { stiffness: 200, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 8);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]: number[]) =>
      `radial-gradient(420px circle at ${gx}% ${gy}%, color-mix(in oklab, ${glowColorMap[project.accent]} 25%, transparent), transparent 70%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i % 2 === 0 ? 0 : 0.08 }}
      className="relative"
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={reset}
        style={{ perspective: 1200 }}
        className="group relative"
      >
        <motion.div
          style={{ rotateX: springRx, rotateY: springRy, transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-3xl border border-line bg-bg-soft"
        >
          <motion.div
            style={{ background: glowBackground }}
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <span
              className={`absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.2em] ${accentMap[project.accent]}`}
            >
              {project.index}
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="Code"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform hover:scale-110"
              aria-label={`${project.title} auf GitHub ansehen`}
            >
              <GithubIcon size={17} />
            </a>
          </div>

          <div className="relative z-20 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                {project.title}
              </h3>
              <ArrowUpRight
                size={22}
                className="mt-1 shrink-0 text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand"
              />
            </div>
            <p className={`mt-2 font-mono text-xs uppercase tracking-wide ${accentMap[project.accent]}`}>
              {project.stack}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
