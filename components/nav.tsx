"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation, person } from "@/data/portfolio";
import { useScrolled } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const scrolled = useScrolled(16);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-ink/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#hero"
          className="group flex items-center gap-3"
          aria-label={`${person.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-bronze/40 font-display text-[0.95rem] text-bronze transition-colors group-hover:border-bronze group-hover:bg-bronze/10">
            {person.shortName}
          </span>
          <span className="hidden font-display text-lg tracking-tight sm:block">
            {person.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative px-3 py-1.5 text-[0.78rem] tracking-[0.14em] uppercase transition-colors",
                active === item.id ? "text-paper" : "text-muted hover:text-paper",
              )}
            >
              {item.label}
              {active === item.id ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute right-3 bottom-0 left-3 h-px bg-bronze"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-line px-3 py-1 text-[0.68rem] tracking-[0.12em] text-bronze uppercase md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
            Open to work
          </span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-line bg-ink/95 px-5 pt-4 pb-8 backdrop-blur-xl lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline justify-between border-b border-line py-4 font-display text-3xl tracking-tight",
                      active === item.id ? "text-bronze" : "text-paper",
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
