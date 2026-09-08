"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/hooks";

export function CustomCursor() {
  const fine = useMediaQuery("(pointer: fine)");
  const reduced = usePrefersReducedMotion();
  const visible = fine && !reduced;
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const hover = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });
  const hoverSpring = useSpring(hover, { stiffness: 260, damping: 22 });
  const size = useTransform(hoverSpring, [0, 1], [12, 44]);
  const bg = useTransform(hoverSpring, [0, 1], ["var(--color-paper)", "transparent"]);

  useEffect(() => {
    if (!visible) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      hover.set(
        target.closest("a, button, [role='button'], input, textarea, select")
          ? 1
          : 0,
      );
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [visible, x, y, hover]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80] mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.span
        className="block rounded-full border border-paper"
        style={{ width: size, height: size, backgroundColor: bg }}
      />
    </motion.div>
  );
}
