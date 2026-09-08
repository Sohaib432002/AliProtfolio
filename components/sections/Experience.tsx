import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="experience.md"
          title="Training that became practice."
        />

        <div className="relative max-w-3xl pl-6 md:pl-8">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-0 w-px bg-line"
          />
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <article className="relative pb-2">
                <span
                  aria-hidden
                  className="absolute top-2 -left-[29px] size-2.5 rounded-full bg-bronze md:-left-[37px]"
                />
                <p className="font-mono text-[11px] tracking-[0.18em] text-bronze uppercase">
                  {item.place} · {item.period}
                </p>
                <h3 className="font-display mt-2 text-2xl text-paper">
                  {item.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
                  {item.details.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
