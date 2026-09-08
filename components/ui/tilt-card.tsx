"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 180, damping: 16 });
  const sy = useSpring(py, { stiffness: 180, damping: 16 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
