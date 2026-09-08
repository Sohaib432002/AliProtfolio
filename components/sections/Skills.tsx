"use client";

import { useState } from "react";
import {
  Braces,
  Cable,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Lightbulb,
  ListChecks,
  MessagesSquare,
  Palette,
  Smartphone,
  TabletSmartphone,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "C# (OOP)": Braces,
  "JavaScript (ES6+)": FileCode2,
  HTML5: Code2,
  CSS3: Palette,
  SQL: Database,
  "React Native": Smartphone,
  ".NET Framework": Layers,
  WordPress: Globe,
  "Responsive Design": TabletSmartphone,
  "SQL Server": Database,
  "Database Design": GitBranch,
  Git: GitBranch,
  "API Integration": Cable,
  "Project Management": ListChecks,
  "Team Leadership": Users,
  "Problem Solving": Lightbulb,
  Communication: MessagesSquare,
};

const filters = [{ id: "all", label: "All" }, ...skillGroups.map((g) => ({ id: g.id, label: g.label }))];

export function Skills() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? skillGroups : skillGroups.filter((g) => g.id === active);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="02"
          eyebrow="skills.json"
          title="Languages, systems, and the craft around them."
          description="The stack I actually work with — from C# and SQL through React Native and WordPress — plus the collaboration skills that keep a build moving."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={active === filter.id}
              onClick={() => setActive(filter.id)}
              className={cn(
                "border px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors",
                active === filter.id
                  ? "border-bronze bg-bronze/10 text-bronze"
                  : "border-line text-muted hover:border-bronze/40 hover:text-paper",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {visible.map((group) => (
            <div key={group.id}>
              {active === "all" ? (
                <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                  {group.label}
                </p>
              ) : null}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                {group.items.map((item, i) => {
                  const Icon = icons[item] ?? Code2;
                  return (
                    <Reveal key={item} delay={i * 0.04} y={16}>
                      <TiltCard className="h-full">
                        <div className="flex h-full flex-col gap-4 border border-line bg-ink-2/60 p-4 backdrop-blur-[2px] transition-colors hover:border-bronze/35">
                          <Icon size={18} className="text-bronze" />
                          <span className="text-sm leading-snug text-paper">{item}</span>
                        </div>
                      </TiltCard>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
