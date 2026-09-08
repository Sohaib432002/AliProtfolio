import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow="about.js"
            title="Complete systems, not isolated features."
            className="mb-0 lg:sticky lg:top-28 lg:self-start"
          />

          <div>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={i * 0.08}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {about.focus.map((item, i) => (
                <Reveal key={item.title} delay={0.12 + i * 0.06}>
                  <article className="h-full border border-line bg-ink-2/55 p-5 backdrop-blur-[2px] transition-colors hover:border-bronze/40">
                    <h3 className="font-display text-xl tracking-tight text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
