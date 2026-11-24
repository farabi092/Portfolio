import type { TechIconName } from "./techIcons";

export type TechItem = {
  name: string; // text shown under the icon
  icon: TechIconName; // key from data/techIcons.ts
  size?: number; // optional: draw wide, short logos larger (default 40)
};

export type TechCategory = {
  title: string;
  items: TechItem[];
};

export const techStack: TechCategory[] = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
    ],
  },
  {
    title: "Databases & Development Tools",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql", size: 56 },
      { name: "SQLite", icon: "sqlite" },
      { name: "GitHub", icon: "github" },
      { name: "Git", icon: "git" },
    ],
  },
  {
    title: "AI/ML & Research",
    items: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "scikit-learn", icon: "scikitlearn", size: 56 },
      { name: "Numpy", icon: "numpy" },
      { name: "Pandas", icon: "pandas" },
      { name: "Matplotlib", icon: "matplotlib" },
    ],
  },
  {
    title: "Graphic Design",
    items: [
      { name: "Photoshop", icon: "photoshop" },
      { name: "Illustrator", icon: "illustrator" },
    ],
  },
];
