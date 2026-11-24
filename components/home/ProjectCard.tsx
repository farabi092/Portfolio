import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TechIcon from "@/components/ui/TechIcon";
import type { Project } from "@/data/projects";

// "note" is an optional small label (for example "Group project").
// Declared here so the card compiles whether or not data/projects.ts has it.
type CardProject = Project & { note?: string };

export default function ProjectCard({ project }: { project: CardProject }) {
  const { number, title, description, technologies, github, demo, image, note } =
    project;

  return (
    // The card is navy on the cream page, so it resets the two helper
    // colours (accent and line) to the navy-background versions.
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-navy bg-navy text-cream transition duration-300 [--accent:var(--color-brick-light)] [--line:var(--color-cream-line)] hover:-translate-y-1 hover:border-brick">
      {/* Thumbnail, separated from the text by a thin line */}
      <div className="relative aspect-video overflow-hidden border-b border-(--line) bg-navy">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            className={
              image.fit === "contain"
                ? "bg-white object-contain"
                : "object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            }
          />
        ) : (
          // No image supplied: a plain typographic panel, not a picture.
          <div className="flex h-full items-end p-6 font-mono text-5xl text-cream/25">
            {number}
          </div>
        )}
      </div>

      {/* Text area */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4 font-mono text-[11px] tracking-[1.5px]">
          <span className="opacity-70">{number}</span>
          {note && <span className="text-(--accent)">{note}</span>}
        </div>

        <h3 className="mt-3 text-[22px] leading-[1.25] font-medium">{title}</h3>

        <p className="mt-3 text-sm leading-[1.7] opacity-80">{description}</p>

        {technologies.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded border border-(--line) px-2 py-1 font-mono text-[11px] opacity-85"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center gap-6 pt-6 text-[13px] font-medium">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} on GitHub (opens in a new tab)`}
            className="inline-flex items-center gap-2 transition-colors hover:text-(--accent)"
          >
            <TechIcon name="github" size={16} />
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo (opens in a new tab)`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-(--accent)"
            >
              Live Demo
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
