"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@rapidseed/ui";
import { INDUSTRIES } from "@rapidseed/lib";

const featured = ["dental", "vision", "weight-loss", "veterinary", "dermatology", "hearing"];

export function IndustrySolutions() {
  const industries = INDUSTRIES.filter((i) => featured.includes(i.slug));

  return (
    <section className="bg-navy-800 py-24 lg:py-32" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Industry Verticals</Badge>
          <h2
            id="industries-heading"
            className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
          >
            Built for High-Trust Local Verticals.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            AI search users ask high-intent questions when choosing healthcare and wellness providers. Being the recommended answer at that moment is the most valuable visibility a practice can own.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link href={`/industries/${industry.slug}`}>
                <div className="group rounded-xl border border-white/10 bg-navy-700 p-6 transition-all duration-200 hover:border-emerald-500/30 hover:bg-navy-600">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-3xl">{industry.icon}</span>
                    <svg
                      className="h-4 w-4 text-white/20 transition-colors group-hover:text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-white">{industry.name}</h3>
                  <p className="text-sm text-white/50">{industry.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/medical-ai-visibility" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            Explore Medical AI Visibility →
          </Link>
        </div>
      </div>
    </section>
  );
}
