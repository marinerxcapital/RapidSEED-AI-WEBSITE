"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Badge } from "@rapidseed/ui";
import { FOUNDATIONS } from "@rapidseed/lib";

export function EightFoundations() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-navy-800 py-24 lg:py-32" aria-labelledby="foundations-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>The Architecture</Badge>
          <h2
            id="foundations-heading"
            className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
          >
            The Eight Foundations of AI Discovery.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Eight interlocked systems work in concert to build entity presence that AI systems extract, trust, and recommend.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDATIONS.map((foundation, i) => (
            <motion.button
              key={foundation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => setActive(active === foundation.id ? null : foundation.id)}
              className={`group relative rounded-xl border p-6 text-left transition-all duration-200 ${
                active === foundation.id
                  ? "border-emerald-500/50 bg-emerald-500/5"
                  : "border-white/10 bg-navy-700 hover:border-white/20"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-2xl font-black text-emerald-400">{foundation.acronym}</span>
                <svg
                  className={`h-4 w-4 text-white/30 transition-transform ${active === foundation.id ? "rotate-45" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-white">{foundation.name}</h3>
              <p className="text-xs text-white/50">{foundation.tagline}</p>

              <AnimatePresence>
                {active === foundation.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-xs leading-relaxed text-white/60">{foundation.description}</p>
                    {foundation.pillars && (
                      <ul className="mt-3 space-y-1">
                        {foundation.pillars.map((pillar) => (
                          <li key={pillar} className="flex items-center gap-2 text-xs text-white/50">
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            {pillar}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/rapidseed-framework"
            className="text-sm text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Explore the full RapidSEED Framework →
          </Link>
        </div>
      </div>
    </section>
  );
}
