import type { Metadata } from "next";
import { Badge, Card } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "AEO — Answer Engine Optimization",
  description:
    "Answer Engine Optimization (AEO) restructures your content into AI-extractable answer units that ChatGPT, Google AI Overviews, Gemini, and Perplexity pull directly into generated responses.",
  alternates: { canonical: "/aeo-answer-engine-optimization" },
};

const aeoFaqs = [
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "Answer Engine Optimization is the discipline of structuring content so AI systems can extract it as direct answers. AEO formats business information as structured Q&A blocks, semantic answer units, and conversational paragraphs designed for AI engine extraction.",
  },
  {
    question: "How is AEO different from traditional content SEO?",
    answer:
      "Traditional content SEO optimizes for keyword density and readability for human users. AEO optimizes for machine readability—structuring every piece of content as a self-contained answer that AI engines can pull without context from surrounding content.",
  },
  {
    question: "Which AI systems does AEO target?",
    answer:
      "AEO targets all major answer engines: ChatGPT, Google AI Overviews, Gemini, Perplexity, Copilot, and emerging AI search systems. Each system has different extraction patterns, and our AEO architecture is designed to satisfy all of them simultaneously.",
  },
  {
    question: "What types of content benefit most from AEO?",
    answer:
      "Service description pages, FAQ sections, 'how it works' content, medical information pages, location pages, and any content that answers high-intent questions about your business. Local business verticals see the highest AEO lift because users ask highly specific questions.",
  },
];

export default function AEOPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "AEO — Answer Engine Optimization", url: `${SITE_URL}/aeo-answer-engine-optimization` },
    ]),
    buildServiceSchema(
      "Answer Engine Optimization (AEO)",
      "Restructure your content into AI-extractable answer units for ChatGPT, Google AI Overviews, and all major generative search engines.",
      `${SITE_URL}/aeo-answer-engine-optimization`
    ),
    buildFAQSchema(aeoFaqs),
  ];

  const principles = [
    {
      title: "Answer Unit Architecture",
      description: "Every piece of content is redesigned as a self-contained answer unit—a paragraph or block that answers a single specific question completely, without needing surrounding context.",
    },
    {
      title: "Conversational Q&A Blocks",
      description: "FAQ sections are restructured with AI extraction in mind: questions phrased the way users ask them, answers written at extraction-optimal length, and semantic markers that signal answer completeness.",
    },
    {
      title: "Semantic Heading Hierarchy",
      description: "H1→H2→H3 hierarchies are engineered to match AI semantic parsing patterns—not keyword stuffing, but logical answer scaffolding that AI systems can traverse.",
    },
    {
      title: "Entity-Anchored Answers",
      description: "Every answer includes entity anchors—your business name, location, specialty, and service terms—so AI systems can attribute the answer to your verified entity rather than treating it as orphaned content.",
    },
    {
      title: "Factual Density Optimization",
      description: "AI systems prefer content with high factual density: specific numbers, named services, geographic specificity, and concrete outcomes. We optimize for factual richness, not wordcount.",
    },
    {
      title: "Multi-System Compatibility",
      description: "Different AI engines have different extraction architectures. Our AEO content is designed to satisfy Google's extraction model, OpenAI's retrieval patterns, and Perplexity's citation requirements simultaneously.",
    },
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>AEO</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              Answer Engine Optimization.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              Become the answer, not the link. AEO restructures your content into the exact format that ChatGPT, Google AI Overviews, Gemini, and Perplexity extract and cite as authoritative responses.
            </p>
          </div>
        </section>

        {/* Core principle */}
        <section className="border-y border-white/10 bg-navy-800 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-white/60">The core insight behind AEO:</p>
            <blockquote className="mt-4 font-display text-2xl font-bold text-white lg:text-3xl">
              "AI systems don't rank pages. They extract answers from entities they trust. If your content isn't structured as an answer, it won't be cited as one."
            </blockquote>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-black text-white lg:text-4xl">
                Six AEO Engineering Principles
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <Card key={p.title}>
                  <h3 className="mb-3 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{p.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-navy-800 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-display text-3xl font-black text-white lg:text-4xl">
              AEO Questions & Answers
            </h2>
            <div className="space-y-4">
              {aeoFaqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-white/10 bg-navy-700 p-6">
                  <h3 className="mb-2 font-semibold text-white">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}
