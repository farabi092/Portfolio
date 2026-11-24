import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" tone="cream">
      <Reveal>
        <SectionHeading
          label="03 / PROJECTS"
          title={
            <>
              Projects <span className="text-(--accent)"></span>
            </>
          }
          description=""
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.number}
            delay={(index % 3) * 0.08}
            className="h-full"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/farabi092"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-navy/50 px-5 py-3 text-[13px] font-medium transition-colors hover:bg-navy hover:text-cream"
        >
          Other Projects
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
