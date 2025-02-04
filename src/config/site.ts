// src/config/site.ts
export const NAVIGATION = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/Jonlle",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/jhonatanllerena",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "mailto:jonlle19@gmail.com",
    label: "Email",
    icon: "mail",
  },
];

export const NAME = "Jhonatan Llerena";

export type NavigationLink = (typeof NAVIGATION)[number];
