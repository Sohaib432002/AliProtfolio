import type { Project } from "@/data/portfolio";

type ProjectVisualProps = {
  project: Project;
  index: number;
};

export function ProjectVisual({ project, index }: ProjectVisualProps) {
  return (
    <div className="relative min-h-[240px] overflow-hidden border-b border-line bg-ink md:min-h-full md:border-r md:border-b-0">
      <span className="absolute top-5 left-5 font-display text-6xl text-paper/8">
        0{index + 1}
      </span>
      {project.visual === "roles" ? <RolesMark /> : <LocatorMark />}
    </div>
  );
}

function RolesMark() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <circle cx="110" cy="130" r="52" fill="none" stroke="#c6a36a" strokeOpacity="0.45" />
      <circle cx="200" cy="118" r="52" fill="none" stroke="#c6a36a" strokeOpacity="0.7" />
      <circle cx="156" cy="188" r="52" fill="none" stroke="#ece8df" strokeOpacity="0.18" />
      <circle cx="110" cy="130" r="4" fill="#c6a36a" />
      <circle cx="200" cy="118" r="4" fill="#c6a36a" />
      <circle cx="156" cy="188" r="4" fill="#ece8df" />
      <text x="86" y="92" fill="#8f8a80" fontSize="10" fontFamily="monospace">
        student
      </text>
      <text x="196" y="80" fill="#8f8a80" fontSize="10" fontFamily="monospace">
        admin
      </text>
      <text x="168" y="250" fill="#8f8a80" fontSize="10" fontFamily="monospace">
        manager
      </text>
    </svg>
  );
}

function LocatorMark() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      <circle cx="160" cy="140" r="88" fill="none" stroke="#c6a36a" strokeOpacity="0.2" />
      <circle cx="160" cy="140" r="58" fill="none" stroke="#c6a36a" strokeOpacity="0.4" />
      <circle cx="160" cy="140" r="28" fill="none" stroke="#c6a36a" strokeOpacity="0.75" />
      <circle cx="160" cy="140" r="5" fill="#c6a36a" />
      <path
        d="M160 52 L160 88 M160 192 L160 228 M72 140 L108 140 M212 140 L248 140"
        stroke="#ece8df"
        strokeOpacity="0.2"
      />
      <circle cx="214" cy="96" r="4" fill="#ece8df" fillOpacity="0.7" />
      <circle cx="118" cy="176" r="3" fill="#c6a36a" />
    </svg>
  );
}
