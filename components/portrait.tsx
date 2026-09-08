"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { person } from "@/data/portfolio";

export function Portrait() {
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.4 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-11, 11]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [9, -9]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !stage.current) return;
    const rect = stage.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={stage}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto w-full max-w-[420px]"
      style={{ perspective: 1400 }}
    >
      <motion.div
        style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          aria-hidden
          className="absolute inset-3 translate-x-4 translate-y-5 border border-bronze/50"
          style={{ transform: "translateZ(-36px)" }}
        />
        <div
          aria-hidden
          className="absolute -inset-px border border-bronze/25"
          style={{ transform: "translateZ(-18px) scale(1.03)" }}
        />

        <div className="relative overflow-hidden border border-line-strong bg-ink-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#c45c5c]/80" />
            <span className="h-2 w-2 rounded-full bg-bronze/70" />
            <span className="h-2 w-2 rounded-full bg-[#7d9b8a]/80" />
            <span className="ml-2 font-mono text-[10px] tracking-wider text-muted uppercase">
              profile.jpg
            </span>
          </div>
          <div className="relative aspect-square">
            <Image
              src={person.profileImage}
              alt={person.profileAlt}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-cover object-[center_12%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/35 via-transparent to-paper/5"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                background:
                  "linear-gradient(115deg, transparent 40%, rgba(236,232,223,0.18) 48%, transparent 56%)",
              }}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3 font-mono text-[11px] tracking-wide text-muted">
            <span>{person.name}</span>
            <span>{person.location.short}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
