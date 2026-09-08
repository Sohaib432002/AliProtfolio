"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Portrait } from "@/components/portrait";
import { person, social } from "@/data/portfolio";

export function Hero() {
  const reduced = useReducedMotion();
  const github = social.find((item) => item.id === "github");

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center pt-24 pb-16 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:gap-8">
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-mono text-[11px] tracking-[0.22em] text-bronze uppercase"
          >
            {person.eyebrow}
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.4rem,10vw,7.4rem)] leading-[0.88] tracking-[-0.03em] text-paper"
          >
            Ali
            <br />
            Haider
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-sm tracking-[0.04em] text-bronze-2 md:text-[0.95rem]"
          >
            {person.roles.join("  ·  ")}
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted"
          >
            {person.introduction}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-bronze px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-bronze-2"
            >
              View projects
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm text-paper transition-colors hover:border-bronze hover:text-bronze"
            >
              Get in touch
            </a>
            {github ? (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted transition-colors hover:text-paper"
              >
                {github.handle}
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:justify-self-end"
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}
