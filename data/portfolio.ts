export const person = {
  name: "Ali Haider",
  shortName: "AH",
  title: "Web & Mobile Developer",
  roles: [
    "Web Developer",
    "React Native Mobile Developer",
    "Database Management",
  ],
  eyebrow: "Recent BSCS graduate building web & mobile products",
  introduction:
    "I build role-based platforms and mobile apps end-to-end — from database schema to a polished, mobile-first UI. Based in Rawalpindi, Pakistan, and open to full-time and freelance work.",
  location: {
    city: "Rawalpindi",
    region: "Punjab",
    country: "Pakistan",
    short: "Rawalpindi, PK",
    full: "Rawalpindi, Punjab, Pakistan",
  },
  availability: "Open to full-time & freelance work",
  profileImage: "/profile.jpg",
  profileAlt: "Portrait of Ali Haider",
} as const;

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from the Barani Institute of Information Technology, Rawalpindi, with hands-on experience across web development, React Native mobile apps, and database design.",
    "My focus is on building complete, working systems — role-based authentication, real-time tracking, and mobile-first interfaces — rather than just isolated features. I like taking a project from a database schema on paper to an app people can actually use.",
    "Comfortable working solo or leading a small team: I led development on my final year project from concept through to a working GPS-based mobile app.",
  ],
  focus: [
    {
      title: "Role-based systems",
      detail: "Authentication and workflows that connect students, administrators, and company managers.",
    },
    {
      title: "Mobile-first products",
      detail: "React Native apps with real-time status, GPS tracking, and interfaces people can actually use.",
    },
    {
      title: "Database design",
      detail: "Schemas planned on paper, then built into SQL systems that carry the product end-to-end.",
    },
    {
      title: "Team leadership",
      detail: "Led a final-year project from concept through to a working GPS-based mobile app.",
    },
  ],
} as const;

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["C# (OOP)", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: ["React Native", ".NET Framework", "WordPress", "Responsive Design"],
  },
  {
    id: "database",
    label: "Database & Tools",
    items: ["SQL Server", "Database Design", "Git", "API Integration"],
  },
  {
    id: "soft",
    label: "Soft Skills",
    items: [
      "Project Management",
      "Team Leadership",
      "Problem Solving",
      "Communication",
    ],
  },
] as const;

export const projects = [
  {
    id: "internship-portal",
    slug: "internship-management-portal",
    name: "Internship Management Portal",
    file: "internship-portal.jsx",
    kind: "Full-Stack",
    period: "2024–2025",
    tagline: "React Native · SQL Database · Authentication APIs",
    summary:
      "A multi-role system connecting students, administrators, and company managers to streamline internship assignment and tracking.",
    highlights: [
      "Multi-role system connecting students, administrators, and company managers to streamline internship assignment and tracking.",
      "Role-based authentication for students, admins, and company managers.",
      "Company enrollment and internship opportunity management.",
      "Student assignment workflow with interest matching and automated assignment.",
      "Progress tracking and certification generation with a mobile-first UI and real-time status updates.",
      "Search and filtering for efficient data management.",
    ],
    technologies: ["React Native", "SQL", "Auth APIs", "Real-time UI"],
    visual: "roles" as const,
  },
  {
    id: "friend-locator",
    slug: "friend-locator-with-history",
    name: "Friend Locator with History",
    file: "friend-locator.jsx",
    kind: "Academic · Team Lead",
    period: "2021",
    tagline: "React Native · SQL Database · GPS APIs · Final Year Project",
    summary:
      "Mobile app for real-time friend location tracking with historical data storage. Led from concept to a working GPS-based product.",
    highlights: [
      "Mobile app for real-time friend location tracking with historical data storage.",
      "GPS-based location tracking with a user-friendly interface for friend management and location sharing.",
      "Database schema for location history, with real-time notifications and mapping features.",
      "Data privacy and security protocols enforced throughout the app.",
    ],
    technologies: ["React Native", "GPS APIs", "SQL", "Notifications"],
    visual: "locator" as const,
  },
] as const;

export const experience = [
  {
    id: "wordpress-workshop",
    title: "WordPress Development Workshop",
    place: "Rawalpindi",
    period: "2020",
    details: [
      "Intensive training covering theme customization, plugin development, and CMS administration.",
      "Practical experience building responsive websites and managing client requirements.",
    ],
  },
] as const;

export const education = [
  {
    id: "bscs",
    title: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Barani Institute of Information Technology, Rawalpindi",
    period: "2021 – 2025",
  },
  {
    id: "intermediate",
    title: "Intermediate Education",
    institution: "Cambridge College, Pakpattan",
    period: "2019 – 2021",
  },
] as const;

export const contact = {
  email: "mithu33.ansari@gmail.com",
  phone: "+92 346 6741133",
  phoneHref: "tel:+923466741133",
  location: "Rawalpindi, Punjab, Pakistan",
  availability: "Open to full-time & freelance work",
} as const;

export const social = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/mithu3377",
    handle: "github.com/mithu3377",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-haider-4b26262ab",
    handle: "linkedin.com/in/ali-haider-4b26262ab",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:mithu33.ansari@gmail.com",
    handle: "mithu33.ansari@gmail.com",
  },
  {
    id: "phone",
    label: "Call",
    href: "tel:+923466741133",
    handle: "+92 346 6741133",
  },
] as const;

export const navigation = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export const seo = {
  title: "Ali Haider — Web & Mobile Developer",
  description:
    "Ali Haider is a Computer Science graduate in Rawalpindi, Pakistan, building role-based web platforms and React Native mobile apps from database schema to a polished, mobile-first UI.",
  keywords: [
    "Ali Haider",
    "Web Developer",
    "React Native",
    "Mobile Developer",
    "Database Management",
    "Rawalpindi",
    "BSCS",
  ],
};

export type Project = (typeof projects)[number];
export type SkillGroup = (typeof skillGroups)[number];
