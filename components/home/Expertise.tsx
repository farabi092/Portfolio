
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  ChartNoAxesCombined,
  PenTool,
} from "lucide-react";

const expertise = [

{
    number: "01",
    title: "Artificial",
    subtitle: "Intelligence",
    description:
      "Exploring machine learning, federated learning and practical AI applications.",
    icon: BrainCircuit,
    skills: "MACHINE LEARNING · FEDERATED LEARNING · APPLIED AI",
  }, 
    
  {
    number: "02",
    title: "Software",
    subtitle: "Development",
    description:
      "Building functional, thoughtful and user-focused digital experiences.",
    icon: Code2,
    skills: "WEB DEVELOPMENT · FULL STACK · SOFTWARE",
  },
    { 
    number: "03",
    title: "Data",
    subtitle: "Analytics",
    description:
      "Finding patterns, extracting insights and turning data into decisions.",
    icon: ChartNoAxesCombined,
    skills: "DATA ANALYSIS · VISUALIZATION · STATISTICS",
  },
  {
    number: "04",
    title: "Graphics",
    subtitle: "Design",
    description:
      "Combining art, graphic design and creative exploration.",
    icon: PenTool,
    skills: "GRAPHIC DESIGN · VISUALS · CREATIVITY",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise-section section-padding">
      <div className="container">
        <motion.div
          className="expertise-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02 / WHAT I DO</span>

          <div className="expertise-title-row">
            <h2>
              Different disciplines.
              <br />
              <span>One perspective.</span>
            </h2>

            <p>
              A blend of technical thinking,
              analytical problem-solving and
              visual creativity.
            </p>
          </div>
        </motion.div>

        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                className="expertise-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="expertise-card-top">
                  <span className="expertise-number">
                    {item.number}
                  </span>
                  <Icon size={25} strokeWidth={1.4} />
                </div>

                <div className="expertise-card-content">
                  <h3>
                    {item.title}
                    <br />
                    <span>{item.subtitle}</span>
                  </h3>

                  <p>{item.description}</p>
                </div>

                <div className="expertise-card-footer">
                  {item.skills}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
