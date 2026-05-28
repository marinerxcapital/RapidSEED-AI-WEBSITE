"use client";

import { motion } from "framer-motion";
import { Badge } from "@rapidseed/ui";

const shifts = [
  {
    icon: "📊",
    title: "Google AI Overviews",
    stat: "~47%",
    description: "of queries now trigger AI-generated overviews, reducing organic click-through rates to near zero for informational searches.",
  },
  {
    icon: "🔍",
    title: "Zero-Click Search",
    stat: "~65%",
    description: "of searches end without a click to any website. Users receive answers directly from AI—without ever visiting your domain.",
  },
  {
    icon: "🤖",
    title: "Generative Answer Engines",
    stat: "200M+",
    description: "people now use ChatGPT, Gemini, and Perplexity for business recommendations—bypassing traditional search entirely.",
  },
  {
    icon: "📉",
    title: "Traditional SEO Decline",
    stat: "~30%",
    description: "average organic traffic loss reported by publishers since AI Overviews launched. Rankings no longer guarantee visibility.",
  },
];

export function AISearchShift() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-24 lg:py-32" aria-labelledby="shift-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge>The Visibility Crisis</Badge>
          <h2
            id="shift-heading"
            className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
          >
            Traditional SEO Is No Longer Enough.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Search has fundamentally changed. AI systems now answer questions directly—recommending businesses they already trust, not the ones with the highest PageRank.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shifts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-navy-700 p-6"
            >
              <div className="mb-4 text-2xl">{item.icon}</div>
              <div className="mb-1 font-display text-3xl font-black text-emerald-400">{item.stat}</div>
              <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center"
        >
          <p className="text-lg font-semibold text-white">
            The question is no longer <span className="text-white/50">can users find your website</span>—
          </p>
          <p className="mt-1 text-lg font-semibold text-emerald-400">
            it's whether AI systems recommend your business when someone asks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
