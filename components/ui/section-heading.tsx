import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="mb-5 flex items-center gap-4 text-[11px] tracking-[0.22em] text-bronze uppercase">
        <span className="font-mono text-bronze/80">{index}</span>
        <span className="h-px w-10 bg-bronze/40" />
        <span className="text-muted">{eyebrow}</span>
      </div>
      <h2 className="font-display text-[clamp(2.1rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-paper">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
