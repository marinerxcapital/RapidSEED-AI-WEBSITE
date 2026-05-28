import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FAQSection } from "@/components/home/FAQSection";
import { homeFaqs } from "@/data/faqs";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildFAQSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "FAQ — AI Discovery & Visibility Questions Answered",
  description:
    "Answers to the most common questions about AI search visibility, Answer Engine Optimization, Generative Engine Optimization, and the RapidSEED AI methodology.",
  alternates: { canonical: "/faq" },
};

const additionalFaqs = [
  {
    question: "What is Search Engine Exact Discovery (SEED)?",
    answer:
      "SEED is the RapidSEED AI methodology for owning exact-match visibility in AI search systems. It optimizes for the precise discovery moment—when a user asks an AI system a direct question about a service in your market—making your entity the default recommended answer for those specific query patterns.",
  },
  {
    question: "What is entity engineering?",
    answer:
      "Entity engineering is the practice of constructing a complete, consistent, and authoritative digital identity for a business across all data sources that AI systems read. It includes structured schema data, NAP consistency, citation architecture, service entity definitions, and geographic anchoring.",
  },
  {
    question: "How do AI systems decide which businesses to recommend?",
    answer:
      "AI systems aggregate signals from multiple data sources: structured schema data on your website, directory listings, review platforms, news mentions, geographic data, and the consistency of information across all these sources. Businesses with high entity confidence scores—where all signals align and are complete—are more likely to be recommended.",
  },
  {
    question: "What is NAP+W and why does it matter?",
    answer:
      "NAP+W extends the traditional NAP (Name, Address, Phone) consistency requirement to include your website as a structured entity anchor. Your website URL must consistently appear alongside your NAP data across all citation sources, and your website itself must contain properly structured schema that mirrors your citation data exactly.",
  },
  {
    question: "Do you work with single-location businesses or only multi-location groups?",
    answer:
      "Both. Single-location businesses benefit enormously from AI visibility optimization because they're competing against multi-location chains that may have more resources. Entity infrastructure levels the playing field. Multi-location groups require more complex entity architecture but achieve proportionally larger visibility gains.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "We begin with a comprehensive entity audit (Week 1), present findings and agree on a prioritized deployment plan (Week 2), then execute infrastructure deployment over 6-8 weeks. We provide progress reports at 30 and 60 days, and track AI citation appearances and entity match scores throughout.",
  },
];

const allFaqs = [...homeFaqs, ...additionalFaqs];

export default function FAQPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "FAQ", url: `${SITE_URL}/faq` },
    ]),
    buildFAQSchema(allFaqs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Badge variant="white">FAQ</Badge>
            <h1 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
              Questions About AI Visibility, Answered.
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Structured for both human readers and the AI systems that extract answers from this page.
            </p>
          </div>
        </section>

        {/* Additional FAQs */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-2">
              {additionalFaqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-white/10 bg-navy-700 p-6">
                  <h2 className="mb-2 font-semibold text-white">{faq.question}</h2>
                  <p className="text-sm leading-relaxed text-white/60">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />
        <FinalCTA />
      </div>
    </>
  );
}
