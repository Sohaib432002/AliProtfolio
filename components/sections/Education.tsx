import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="05"
          eyebrow="education.md"
          title="Academic path."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <article className="h-full border border-line bg-ink-2/40 p-7 md:p-9">
                <p className="font-mono text-[11px] tracking-[0.18em] text-bronze uppercase">
                  {item.period}
                </p>
                <h3 className="font-display mt-3 text-2xl leading-snug text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.institution}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
