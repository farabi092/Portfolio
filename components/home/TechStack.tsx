import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import { techStack } from "@/data/techStack";

export default function TechStack() {
  return (
    <Section id="tech-stack" tone="navy">
      <Reveal>
        <SectionHeading
          align="center"
          label="TECH STACK"
          title={
            <>
              Technologies <span className="text-(--accent)">behind the build</span>
            </>
          }
        />
      </Reveal>

      <div>
        {techStack.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.05}>
            <div className="grid gap-8 border-t border-(--line) py-10 lg:grid-cols-[240px_1fr] lg:gap-12">
              <h3 className="text-[22px] leading-[1.25] font-medium">
                {category.title}
              </h3>

              <ul className="grid grid-cols-3 gap-x-4 gap-y-9 sm:grid-cols-4 lg:grid-cols-8">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex flex-col items-center gap-3.5 text-center"
                  >
                    {/* Fixed-height box keeps every name on the same line */}
                    <div className="flex h-14 items-center">
                      <TechIcon
                        name={item.icon}
                        size={item.size}
                        className="text-cream/90 transition-colors duration-200 group-hover:text-(--accent)"
                      />
                    </div>
                    <span className="text-[13px] opacity-75 transition-opacity duration-200 group-hover:opacity-100">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
