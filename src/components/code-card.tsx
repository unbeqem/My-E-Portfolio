"use client";

import { motion, type Variants } from "framer-motion";

const lineContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const kw = "text-accent-violet";
const str = "text-brand";
const prop = "text-[#f4f6f5]";
const punct = "text-white/40";

export default function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-full max-w-sm"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)]"
      >
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#101218] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-violet" />
          <span className="ml-3 font-mono text-[11px] text-white/40">
            tristan.ts
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={lineContainer}
          className="bg-[#0b0c10] px-5 py-5 font-mono text-[13px] leading-[1.9]"
        >
          <motion.div variants={line}>
            <span className={kw}>const</span> <span className={prop}>tristan</span>{" "}
            <span className={punct}>= {"{"}</span>
          </motion.div>
          <motion.div variants={line} className="pl-4">
            <span className={prop}>role</span>
            <span className={punct}>: </span>
            <span className={str}>&apos;Full-Stack Developer&apos;</span>
            <span className={punct}>,</span>
          </motion.div>
          <motion.div variants={line} className="pl-4">
            <span className={prop}>base</span>
            <span className={punct}>: </span>
            <span className={str}>&apos;Germany&apos;</span>
            <span className={punct}>,</span>
          </motion.div>
          <motion.div variants={line} className="pl-4">
            <span className={prop}>stack</span>
            <span className={punct}>: [</span>
            <span className={str}>&apos;Next.js&apos;</span>
            <span className={punct}>, </span>
            <span className={str}>&apos;.NET&apos;</span>
            <span className={punct}>, </span>
            <span className={str}>&apos;Kotlin&apos;</span>
            <span className={punct}>],</span>
          </motion.div>
          <motion.div variants={line} className="pl-4">
            <span className={prop}>focus</span>
            <span className={punct}>: </span>
            <span className={str}>&apos;interfaces that feel alive&apos;</span>
            <span className={punct}>,</span>
          </motion.div>
          <motion.div variants={line}>
            <span className={punct}>{"}"}</span>
            <span className="ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] animate-blink bg-brand align-middle" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
