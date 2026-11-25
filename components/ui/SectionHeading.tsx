import type { ReactNode } from "react";

type SectionHeadingProps = {
  label: string; // small mono label, e.g. "02 / TECH STACK"
  title: ReactNode; // big heading; wrap the accent part in <span className="text-(--accent)">
  description?: string; // short line shown beside (left layout) or under (centered) the heading
  align?: "left" | "center";
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mb-14 text-center" : "mb-14"}>
      <span className="font-mono text-[15px] tracking-[1.5px] opacity-70">
        {label}
      </span>

      <div
        className={
          centered
            ? "mt-6 flex flex-col items-center gap-5"
            : "mt-6 flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start"
        }
      >
        <h2 className="text-[clamp(38px,5vw,64px)] leading-[1.12] font-medium tracking-[-2.5px]">
          {title}
        </h2>

        {description && (
          <p className="max-w-70 text-sm leading-[1.8] opacity-70">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
