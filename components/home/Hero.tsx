"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="intro-hero">
      <div className="container intro-hero-layout">
        <motion.div
          className="intro-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">
            COMPUTER SCIENCE GRADUATE · BRAC UNIVERSITY
          </span>

          <h1>
            Hi, I'm <span>Wasi Farabi.</span>
          </h1>

          <p className="intro-hero-description">
            I explore the intersection of software development,
            artificial intelligence, data and visual creativity.
            I enjoy building useful things and turning ideas into
            thoughtful digital experiences.
          </p>

          <div className="intro-hero-details">
            <span>SOFTWARE DEVELOPMENT</span>
            <span>AI & MACHINE LEARNING</span>
            <span>DATA ANALYTICS</span>
            <span>VISUAL DESIGN</span>
          </div>

          <div className="intro-hero-actions">
            <a href="#work" className="hero-button">
              Explore My Work <span>↗</span>
            </a>

            <a href="#expertise" className="hero-secondary-link">
              What I Do
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-artwork intro-hero-artwork"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="art-grid" />
          <div className="art-circle art-circle-one" />
          <div className="art-circle art-circle-two" />
          <div className="art-square" />
          <div className="art-orbit" />

          <div className="art-center">
            <span>WF</span>
          </div>

          <span className="art-label art-label-left">
            SOFTWARE
          </span>
          <span className="art-label art-label-right">
            CREATIVITY
          </span>
          <span className="art-index">01 / 09</span>
        </motion.div>
      </div>
    </section>
  );
}