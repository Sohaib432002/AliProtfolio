"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-[70] h-[2px] origin-left bg-bronze"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
