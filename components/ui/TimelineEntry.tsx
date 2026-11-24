"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import type { TimelineItem } from "@/data/experience";

type TimelineEntryProps = {
  item: TimelineItem;
  last?: boolean; // the last entry has no line going down from it
};

// One stop on the timeline: a node on a vertical line, with the dates on
// the left of the line and the details on the right (stacked on phones).
// The line fills in as you scroll past, and each node lights up on arrival.
export default function TimelineEntry({ item, last = false }: TimelineEntryProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 65%"],
  });

  // An entry whose dates end in "Present" is the current one.
  const current = item.period.toLowerCase().includes("present");

  return (
    <li ref={ref} className="relative pb-16 pl-10 last:pb-0 md:pl-[268px]">
      {/* Line down to the next node: a faint track, plus a fill on top */}
      {!last && (
        <>
          <span
            aria-hidden="true"
            className="absolute top-3 -bottom-3 left-[11px] w-0.5 bg-(--line) md:left-[227px]"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            className="absolute top-3 -bottom-3 left-[11px] w-0.5 origin-top bg-(--accent) md:left-[227px]"
          />
        </>
      )}

      {/* Node */}
      <span
        aria-hidden="true"
        className={`absolute top-0 left-0 z-10 flex size-6 items-center justify-center rounded-full border-2 bg-navy md:left-[216px] ${
          current ? "border-(--accent)" : "border-cream/45"
        }`}
      >
        <motion.span
          style={{ opacity: reduceMotion ? 1 : scrollYProgress }}
          className={`size-2.5 rounded-full ${
            current ? "bg-cream" : "bg-(--accent)"
          }`}
        />
      </span>

      {/* Dates: left of the line on larger screens, above the text on phones */}
      <p className="mb-2 font-mono text-[13px] leading-snug tracking-[0.5px] opacity-75 md:absolute md:top-1 md:left-0 md:mb-0 md:w-[196px] md:text-right">
        {item.period}
      </p>

      <Reveal y={16}>
        <h4 className="text-[clamp(21px,2.2vw,26px)] leading-snug font-medium">
          {item.title}
        </h4>
        <p className="mt-1.5 text-base leading-normal text-(--accent)">
          {item.subtitle}
        </p>

        {item.location && (
          <p className="mt-3 text-sm opacity-70">{item.location}</p>
        )}
        {item.meta && <p className="mt-1 text-sm opacity-70">{item.meta}</p>}

        {item.details && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.7] opacity-80 marker:text-(--accent)">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </Reveal>
    </li>
  );
}
