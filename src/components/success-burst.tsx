"use client";

import { motion } from "framer-motion";

const particleColors = ["var(--brand)", "var(--accent-coral)", "var(--accent-violet)"];

const particles = Array.from({ length: 14 }).map((_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const distance = 60 + (i % 3) * 16;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    color: particleColors[i % particleColors.length],
    delay: 0.18 + (i % 5) * 0.035,
  };
});

export default function SuccessBurst() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{ backgroundColor: p.color }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{ x: p.x, y: p.y, opacity: [0, 1, 0], scale: [0, 1, 0.4] }}
          transition={{ duration: 1, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      <motion.div
        initial={{ scale: 0, rotate: -25 }}
        animate={{ scale: [0, 1.15, 1], rotate: 0 }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand shadow-[0_0_0_8px_rgba(92,225,230,0.12)]"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
          <motion.path
            d="M5 13l4 4L19 7"
            stroke="#0a3c3e"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
