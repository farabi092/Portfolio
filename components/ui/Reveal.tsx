"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  delay?: number; // seconds
  y?: number; // how far it slides up, in pixels
  className?: string;
};

// Fades and slides its content in once, when it scrolls into view.
// Visitors who prefer reduced motion see the content immediately.
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
