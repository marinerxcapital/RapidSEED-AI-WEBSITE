"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@rapidseed/ui";
import { BOOKING_URL } from "@rapidseed/lib";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-24 lg:py-32">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Ready to Own AI Visibility?
          </p>
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl xl:text-6xl">
            Your Competitors Are Being Recommended.
            <br />
            <span className="text-gradient-emerald">You Should Be Too.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            In 60 minutes, we'll audit your current AI visibility footprint, identify the gaps, and show you exactly what it takes to become the recommended answer in your market.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Book Your Strategy Session
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/ai-visibility-audit">
              <Button variant="secondary" size="lg">
                Request Free AI Audit
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/30">
            No contracts. No commitments. Just clarity on where you stand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
