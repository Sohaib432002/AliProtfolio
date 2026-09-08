import { person, social } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  const links = social.filter(
    (item) => item.id === "github" || item.id === "linkedin",
  );

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg text-paper">{person.name}</p>
          <p className="mt-1 text-sm text-muted">
            {person.title} · {person.location.full}
          </p>
        </div>
        <div className="flex gap-5 text-sm">
          {links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-bronze"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted">
          © {year} {person.name}
        </p>
      </div>
    </footer>
  );
}
