"use client";

import { motion } from "framer-motion";
import { Badge } from "@rapidseed/ui";

const rows = [
  { dimension: "Output", traditional: "Search rankings", rapidseed: "AI recommendations" },
  { dimension: "Visibility type", traditional: "Rented traffic", rapidseed: "Owned entity presence" },
  { dimension: "Primary signal", traditional: "Keywords & backlinks", rapidseed: "Entity trust & structured data" },
  { dimension: "Target system", traditional: "Google crawl bot", rapidseed: "AI extraction engines" },
  { dimension: "Traffic model", traditional: "Click-dependent", rapidseed: "Citation & recommendation" },
  { dimension: "Content format", traditional: "Keyword-optimized pages", rapidseed: "AI-extractable answer units" },
  { dimension: "Identity layer", traditional: "Domain authority", rapidseed: "Entity verification & NAP" },
  { dimension: "Longevity", traditional: "Volatile (algorithm updates)", rapidseed: "Infrastructure-grade stability" },
  { dimension: "Medical/local fit", traditional: "Generic", rapidseed: "Vertical-specific entity architecture" },
];

export function ComparisonTable() {
  return (
    <section className="bg-navy-900 py-24 lg:py-32" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="white">The Strategic Difference</Badge>
          <h2
            id="comparison-heading"
            className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
          >
            Rankings vs. Recommendations.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Traditional SEO optimizes for a Google bot. RapidSEED AI engineers entity presence that AI systems understand, trust, and cite.
          </p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-navy-700">
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white/40"></div>
            <div className="border-x border-white/10 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Traditional SEO</p>
              <p className="mt-1 text-sm text-white/60">Legacy optimization</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">RapidSEED AI</p>
              <p className="mt-1 text-sm text-white/60">AI discovery infrastructure</p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/2"
            >
              <div className="px-6 py-4 text-sm font-medium text-white/50">{row.dimension}</div>
              <div className="border-x border-white/5 px-6 py-4">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-white/40">{row.traditional}</span>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-white/80">{row.rapidseed}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
