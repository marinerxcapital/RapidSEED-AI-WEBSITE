"use client";

import { motion } from "framer-motion";
import { Badge } from "@rapidseed/ui";

const steps = [
  {
    number: "01",
    title: "Entity Audit",
    description: "We map your current AI visibility footprint—what AI systems know about your business, where data is missing, and which trust signals are broken.",
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "We design your complete entity architecture: schema structure, NAP consistency plan, citation map, and AEO content blueprint.",
  },
  {
    number: "03",
    title: "Infrastructure Deployment",
    description: "We deploy JSON-LD schemas, structured data layers, FAQ blocks, and GEO-optimized image architecture across your digital presence.",
  },
  {
    number: "04",
    title: "Citation & Signal Engineering",
    description: "We build authoritative citations, structured directory presence, and AI extraction-ready mentions across verified data sources.",
  },
  {
    number: "05",
    title: "AEO Content Layer",
    description: "We restructure and create AI-extractable content: conversational Q&A blocks, semantic answer units, and entity-anchored service pages.",
  },
  {
    number: "06",
    title: "Monitor & Expand",
    description: "We track AI recommendation appearances, measure citation velocity, and continuously expand your entity presence as AI systems evolve.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy-900 py-24 lg:py-32" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>The Process</Badge>
          <h2
            id="how-heading"
            className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
          >
            From Invisible to Recommended.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            A systematic 6-phase infrastructure deployment that builds AI-grade entity presence over 60 days.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-navy-800 p-8 transition-colors hover:bg-navy-700"
            >
              <div className="mb-4 font-display text-5xl font-black text-white/10 group-hover:text-emerald-500/20 transition-colors">
                {step.number}
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{step.description}</p>

              {/* Connector dot */}
              <div className="absolute right-6 top-8 h-2 w-2 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500/60 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
