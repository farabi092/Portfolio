
"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section id="about" className="intro-section section-padding">
      <div className="container intro-layout">
        <motion.div
          className="intro-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01 / INTRODUCTION</span>
          <span className="intro-line" />
        </motion.div>

        <motion.div
          className="intro-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            Hi, this is Wasi Farabi.
            <br />
          </h2>

          <div className="intro-bottom">
            <p>
              A Computer Science & Engineering graduate from
              BRAC University. I explore the intersection of
              software development, artificial intelligence,
              data and visual creativity.
            </p>

            <a href="#experience" className="text-link">
              MORE ABOUT ME <span>↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
