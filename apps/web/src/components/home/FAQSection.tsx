"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@rapidseed/ui";
import { homeFaqs } from "@/data/faqs";

export { homeFaqs };

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-navy-900 py-24 lg:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="white">FAQ</Badge>
          <h2
            id="faq-heading"
            className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
          >
            Common Questions.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Answers structured for both you and the AI systems that will read this page.
          </p>
        </div>

        <div className="mt-12 space-y-2">
          {homeFaqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-colors ${
                open === i ? "border-emerald-500/30 bg-emerald-500/5" : "border-white/10 bg-navy-700"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-5 w-5 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
