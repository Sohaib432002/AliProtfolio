"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { ProjectVisual } from "@/components/project-visual";
import { projects, social, type Project } from "@/data/portfolio";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const github = social.find((item) => item.id === "github");

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="03"
          eyebrow="projects/"
          title="From schema on paper to an app people can use."
          description="Two complete products — a multi-role internship platform and a GPS friend-locator — built with React Native, SQL, and real-time APIs."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <TiltCard>
                <article className="grid overflow-hidden border border-line bg-ink-2/50 backdrop-blur-[2px] transition-colors hover:border-bronze/35 md:grid-cols-[0.9fr_1.1fr]">
                  <ProjectVisual project={project} index={i} />
                  <div className="flex flex-col p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                      <span>{project.file}</span>
                      <span>
                        {project.kind} · {project.period}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-3xl tracking-tight text-paper md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-bronze">{project.tagline}</p>
                    <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="border border-line px-2.5 py-1 font-mono text-[11px] text-bronze-2"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      className="mt-7 inline-flex w-fit items-center gap-2 text-sm text-paper transition-colors hover:text-bronze"
                    >
                      Read the brief
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {github ? (
          <p className="mt-8 font-mono text-sm text-muted">
            More on GitHub →{" "}
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze hover:text-bronze-2"
            >
              {github.handle}
            </a>
          </p>
        ) : null}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/80 p-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-line-strong bg-ink-2 p-6 shadow-2xl md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-bronze uppercase">
                    {active.kind} · {active.period}
                  </p>
                  <h3
                    id="project-dialog-title"
                    className="mt-2 font-display text-3xl tracking-tight"
                  >
                    {active.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="flex h-10 w-10 items-center justify-center border border-line text-muted hover:text-paper"
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="mt-3 text-sm text-bronze">{active.tagline}</p>
              <ul className="mt-6 space-y-3 text-[0.98rem] leading-relaxed text-muted">
                {active.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {active.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-line px-2.5 py-1 font-mono text-[11px] text-bronze-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
