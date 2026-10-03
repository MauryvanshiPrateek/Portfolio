export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = {
  github: "https://github.com/MauryvanshiPrateek",
  email: "mailto:mauryvanshiprateek@gmail.com",
  linkedin: "#TODO-linkedin",
  resume: "/resume.pdf",
};
