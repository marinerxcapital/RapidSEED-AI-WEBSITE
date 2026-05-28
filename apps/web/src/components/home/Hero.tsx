"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@rapidseed/ui";
import { BOOKING_URL } from "@rapidseed/lib";

const aiEngines = ["ChatGPT", "Google AI Overviews", "Gemini", "Perplexity", "Copilot"];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-900 pt-16" aria-label="Hero">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid-pattern opacity-100"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial-glow"
        aria-hidden="true"
      />

      {/* Animated network nodes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-emerald-500/40"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        {/* Connection lines */}
        <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.06 }}>
          <line x1="15%" y1="20%" x2="29%" y2="45%" stroke="#10b981" strokeWidth="1" />
          <line x1="29%" y1="45%" x2="43%" y2="20%" stroke="#10b981" strokeWidth="1" />
          <line x1="43%" y1="20%" x2="57%" y2="45%" stroke="#10b981" strokeWidth="1" />
          <line x1="57%" y1="45%" x2="71%" y2="20%" stroke="#10b981" strokeWidth="1" />
          <line x1="71%" y1="20%" x2="85%" y2="45%" stroke="#10b981" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">
              AI Discovery Infrastructure
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Own Visibility Inside{" "}
            <span className="text-gradient-emerald">AI Search.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            RapidSEED AI engineers AI discovery infrastructure that helps businesses become the recommended answer inside{" "}
            <span className="text-white/80">ChatGPT, Google AI Overviews, Gemini, Perplexity,</span> and every future generative search system.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Book Strategy Session
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/ai-visibility-audit">
              <Button variant="secondary" size="lg">
                Request AI Visibility Audit
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-white/30">
              Engineered for visibility inside
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {aiEngines.map((engine) => (
                <div
                  key={engine}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/50"
                >
                  {engine}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {[
            { value: "8", label: "Proprietary Systems", suffix: "" },
            { value: "3×", label: "Avg. AI Citation Lift", suffix: "" },
            { value: "92%", label: "Entity Match Rate", suffix: "" },
            { value: "60", label: "Day Visibility Timeline", suffix: "+" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-navy-800 px-6 py-8 text-center">
              <p className="font-display text-3xl font-black text-white sm:text-4xl">
                {stat.value}
                <span className="text-emerald-500">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
