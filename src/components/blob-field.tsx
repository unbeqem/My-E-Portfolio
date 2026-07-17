"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Blob = {
  top: string;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
};

const blobs: Blob[] = [
  { top: "12%", left: "10%", size: 320, color: "var(--brand)", duration: 9, delay: 0 },
  { top: "58%", left: "4%", size: 220, color: "var(--accent-coral)", duration: 11, delay: 0.5 },
  { top: "8%", left: "72%", size: 260, color: "var(--accent-violet)", duration: 10, delay: 1 },
  { top: "62%", left: "78%", size: 300, color: "var(--brand)", duration: 12, delay: 0.3 },
  { top: "38%", left: "45%", size: 180, color: "var(--accent-coral)", duration: 8, delay: 0.8 },
];

function RepelBlob({ blob }: { blob: Blob }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 16, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 16, mass: 0.6 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = ref.current?.parentElement?.parentElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const blobCenterX = rect.left + (parseFloat(blob.left) / 100) * rect.width;
    const blobCenterY = rect.top + (parseFloat(blob.top) / 100) * rect.height;
    const dx = blobCenterX - e.clientX;
    const dy = blobCenterY - e.clientY;
    const dist = Math.hypot(dx, dy);
    const radius = 260;
    if (dist < radius) {
      const force = (1 - dist / radius) * 60;
      const angle = Math.atan2(dy, dx);
      x.set(Math.cos(angle) * force);
      y.set(Math.sin(angle) * force);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute"
      style={{ top: blob.top, left: blob.left, width: blob.size, height: blob.size }}
    >
      <motion.div
        className="h-full w-full"
        animate={{
          x: [0, 18, -12, 0],
          y: [0, -14, 10, 0],
        }}
        transition={{
          duration: blob.duration,
          delay: blob.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          ref={ref}
          style={{ x: springX, y: springY, background: blob.color }}
          className="h-full w-full rounded-full opacity-30 blur-[60px] dark:opacity-50"
        />
      </motion.div>
    </div>
  );
}

export default function BlobField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [&>*]:pointer-events-auto">
      {blobs.map((b, i) => (
        <RepelBlob key={i} blob={b} />
      ))}
    </div>
  );
}
