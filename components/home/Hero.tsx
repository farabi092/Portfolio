"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="site-width hero-layout">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Hi, I&rsquo;m <span>Wasi Farabi.</span>
          </h1>

          <p className="hero-description">
           A Computer Science & Engineering graduate from BRAC University driven by a 
           curiosity for how logic meets aesthetics. Working across AI, full-stack development, 
           data analytics, and graphic design, I build intelligent systems and craft clean, 
           human-centered interfaces from the ground up.
          </p>

          <div className="hero-tags">
            <span>AI &amp; MACHINE LEARNING</span>
            <span>SOFTWARE DEVELOPMENT</span>
            <span>DATA ANALYTICS</span>
            <span>GRAPHICS DESIGN</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-button">
              Explore My Work
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>


          </div>
        </motion.div>

        <motion.div
          className="hero-artwork"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
        <Image
          src="/image/wasifarabi.png"
          alt="Wasi Farabi"
          width={1000}
          height={1000}
          priority
          className="hero-profile-image"
        />
        </motion.div>
      </div>
    </section>
  );
}
