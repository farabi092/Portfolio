import type { ReactNode } from "react";

type SectionProps = {
  id: string; // matches the nav link, e.g. "expertise" for #expertise
  tone: "navy" | "cream";
  className?: string;
  children: ReactNode;
};

// Each tone sets the background and text colour, plus two helper colours
// that anything inside the section can use:
//   text-(--accent)   -> the accent colour that is readable on this background
//   border-(--line)   -> a thin line colour that suits this background
const tones = {
  navy: "bg-navy text-cream [--accent:var(--color-brick-light)] [--line:var(--color-cream-line)]",
  cream:
    "bg-cream text-navy [--accent:var(--color-brick)] [--line:var(--color-navy-line)]",
};

export default function Section({
  id,
  tone,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} py-28 max-md:py-18 ${className}`}>
      <div className="site-width">{children}</div>
    </section>
  );
}
