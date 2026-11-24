import type { SocialIconName } from "./socialIcons";

// RESUME
// Put your resume PDF in the project's  public/resume/  folder and name it
// exactly like this (or change the name below to match your file):
//
//     public/resume/Wasi_Farabi_Resume.pdf
//
// Files inside "public" are served from the website root, so the path
// below starts with "/" and does NOT include the word "public".
export const resumeHref = "/resume/Wasi_Farabi_Resume.pdf";

// SOCIAL AND CONTACT LINKS

export type ContactLink = {
  label: string;
  display: string; // text shown on the page
  href: string;
  icon: SocialIconName;
  external: boolean; // true = opens in a new tab; false = mailto link
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    display: "wasifarabi999@gmail.com",
    href: "mailto:wasifarabi999@gmail.com",
    icon: "email",
    external: false,
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/wasi-farabi",
    href: "https://www.linkedin.com/in/wasi-farabi/",
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitHub",
    display: "github.com/farabi092",
    href: "https://github.com/farabi092",
    icon: "github",
    external: true,
  },
  {
    label: "Behance",
    display: "behance.net/wasifarabi1",
    href: "https://www.behance.net/wasifarabi1",
    icon: "behance",
    external: true,
  },
];
