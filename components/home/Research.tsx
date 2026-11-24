import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { researchEntries } from "@/data/research";

export default function Research() {
  return (
    <Section id="research" tone="cream">
      <Reveal>
        <SectionHeading label="05 / RESEARCH" title="Research" />
      </Reveal>

      <div className="space-y-6">
        {researchEntries.map((entry) => {
          // Split the title at the first colon: main title, then subtitle.
          const [head, ...rest] = entry.title.split(": ");
          const tail = rest.join(": ");

          return (
            <Reveal key={entry.title}>
              {/* Navy card on the cream page, like the project cards */}
              <article className="rounded-md border border-navy bg-navy p-6 text-cream [--accent:var(--color-brick-light)] [--line:var(--color-cream-line)] sm:p-10 lg:p-14">
                <p className="font-mono text-[11px] tracking-[1.5px] uppercase opacity-70">
                  {entry.category}
                </p>

                <h3 className="mt-5 max-w-4xl text-[clamp(24px,3vw,38px)] leading-[1.2] font-medium tracking-[-0.8px]">
                  {head}
                  {tail && (
                    <>
                      : <span className="text-(--accent)">{tail}</span>
                    </>
                  )}
                </h3>

                <ul className="mt-8 max-w-3xl list-disc space-y-3 pl-5 text-base leading-[1.7] opacity-90 marker:text-(--accent)">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* Dataset note */}
                <div className="mt-8 max-w-3xl rounded border border-(--line) px-4 py-3">
                  <p className="font-mono text-[11px] tracking-[1.5px] opacity-70">
                    DATASET
                  </p>
                  <p className="mt-1.5 text-sm leading-[1.7] opacity-85">
                    <span className="font-medium">{entry.dataset.name}</span>
                    {" \u2014 "}
                    {entry.dataset.description}
                  </p>
                </div>

                {/* Research status: small and secondary */}
                <div className="mt-8 flex max-w-3xl flex-wrap items-baseline gap-x-3 gap-y-2">
                  <span className="rounded border border-(--accent) px-2 py-1 font-mono text-[11px] tracking-[0.5px] text-(--accent)">
                    {entry.statusLabel}
                  </span>
                  <p className="text-[13px] leading-[1.6] opacity-70">
                    {entry.status}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
