"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@rapidseed/ui";

const studies = [
  {
    industry: "Dental",
    client: "Multi-location dental group",
    location: "Phoenix Metro Area",
    challenge: "Zero AI recommendation visibility despite strong Google rankings",
    results: [
      { metric: "AI citations", before: "0", after: "47+" },
      { metric: "ChatGPT recommendations", before: "0", after: "First mention" },
      { metric: "Entity match score", before: "31%", after: "94%" },
    ],
    timeline: "60 days",
  },
  {
    industry: "Medical Weight Loss",
    client: "Weight loss clinic",
    location: "Dallas, TX",
    challenge: "Patients asking AI systems for recommendations found competitors instead",
    results: [
      { metric: "Perplexity citations", before: "0", after: "12+" },
      { metric: "AI Overview appearances", before: "2", after: "38+" },
      { metric: "Structured data score", before: "18%", after: "97%" },
    ],
    timeline: "45 days",
  },
  {
    industry: "Optometry",
    client: "Independent vision center",
    location: "Chicago, IL",
    challenge: "Corporate chains dominating AI search recommendations in local market",
    results: [
      { metric: "AI recommendation count", before: "1", after: "29+" },
      { metric: "NAP consistency", before: "67%", after: "100%" },
      { metric: "Google AI Overviews", before: "0", after: "14+" },
    ],
    timeline: "55 days",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-navy-800 py-24 lg:py-32" aria-labelledby="casestudies-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Results</Badge>
          <h2
            id="casestudies-heading"
            className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
          >
            Entity Architecture. Measurable Results.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From invisible to recommended. Before-and-after entity visibility across real client deployments.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {studies.map((study, i) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-navy-700 p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="emerald">{study.industry}</Badge>
                <span className="text-xs text-white/30">{study.timeline}</span>
              </div>
              <p className="mb-1 text-sm font-semibold text-white">{study.client}</p>
              <p className="mb-4 text-xs text-white/40">{study.location}</p>
              <p className="mb-6 text-sm text-white/60 italic">"{study.challenge}"</p>

              {/* Metrics */}
              <div className="space-y-3 rounded-lg border border-white/5 bg-navy-800/50 p-4">
                <div className="grid grid-cols-3 text-center text-xs font-medium">
                  <span className="text-white/30">Metric</span>
                  <span className="text-white/30">Before</span>
                  <span className="text-emerald-400">After</span>
                </div>
                {study.results.map((r) => (
                  <div key={r.metric} className="grid grid-cols-3 text-center text-xs">
                    <span className="text-white/60">{r.metric}</span>
                    <span className="text-white/30">{r.before}</span>
                    <span className="font-semibold text-emerald-400">{r.after}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/case-studies" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
