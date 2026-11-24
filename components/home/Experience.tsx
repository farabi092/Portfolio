import { FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import TimelineEntry from "@/components/ui/TimelineEntry";
import { experienceGroups } from "@/data/experience";
import { resumeHref } from "@/data/links";

export default function Experience() {
  return (
    <Section id="experience" tone="navy">
      {/* The three subsection headings lead; "Experience" is kept as a small
          label for sighted visitors and as a real heading for screen readers. */}
      <h2 className="sr-only">Experience</h2>
      <p className="mb-10 text-center font-mono text-[11px] tracking-[1.5px] opacity-70">
        04 / EXPERIENCE
      </p>

      <div className="mx-auto max-w-[900px]">
        {experienceGroups.map((group, groupIndex) => {
          // The last word of each heading gets the accent colour.
          const words = group.title.split(" ");
          const lastWord = words.pop();

          return (
            <div key={group.id} className="mt-28 first:mt-0">
              <Reveal>
                <h3 className="mb-16 text-center text-[clamp(34px,4.6vw,56px)] leading-[1.1] font-medium tracking-[-1.5px]">
                  {words.join(" ")}{" "}
                  <span className="text-(--accent)">{lastWord}</span>
                </h3>
              </Reveal>

              <ol>
                {group.items.map((item, index) => (
                  <TimelineEntry
                    key={`${item.title}-${item.period}`}
                    item={item}
                    last={index === group.items.length - 1}
                  />
                ))}
              </ol>

              {/* Resume button: directly below Professional Experience.
                  The PDF path is set in data/links.ts */}
              {groupIndex === 0 && (
                <div className="centered-actions">
                  <a
                    href={resumeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume (PDF, opens in a new tab)"
                    className="outline-button"
                  >
                    <FileText size={16} aria-hidden="true" />
                    Download Resume
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
