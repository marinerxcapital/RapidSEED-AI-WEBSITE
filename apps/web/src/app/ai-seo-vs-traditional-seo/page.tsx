import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildFAQSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "AI SEO vs Traditional SEO",
  description:
    "Traditional SEO optimizes for Google rankings. AI SEO engineers entity infrastructure for AI recommendations. Understand the fundamental strategic difference and why it matters for your business.",
  alternates: { canonical: "/ai-seo-vs-traditional-seo" },
};

const faqData = [
  {
    question: "Why is traditional SEO no longer sufficient?",
    answer:
      "Traditional SEO was designed for a world where users searched for links. AI-generated answers don't require users to click anything—they receive the answer directly. Businesses that don't appear in AI-generated responses lose visibility regardless of their search rankings.",
  },
  {
    question: "Can I do traditional SEO and AI SEO simultaneously?",
    answer:
      "Yes. AI entity infrastructure is additive. You don't abandon traditional SEO—you layer AI discovery optimization on top of it. In many cases, the structured data and entity signals we deploy also improve traditional search performance.",
  },
  {
    question: "Is AI SEO only for new businesses?",
    answer:
      "No. Established businesses often need AI SEO more urgently than new ones, because they have large digital footprints with inconsistent NAP data, orphaned citation profiles, and content that wasn't written for AI extraction. We audit and remediate legacy digital presence as part of every engagement.",
  },
];

export default function AIvsTraditionalSEOPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "AI SEO vs Traditional SEO", url: `${SITE_URL}/ai-seo-vs-traditional-seo` },
    ]),
    buildFAQSchema(faqData),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>Strategic Comparison</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              AI SEO vs. Traditional SEO.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              Traditional SEO earns rankings. AI SEO engineers recommendations. These are fundamentally different disciplines targeting different systems with different success metrics.
            </p>
          </div>
        </section>

        {/* Reuse comparison table */}
        <div className="py-0">
          <ComparisonTable />
        </div>

        {/* Deep analysis */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 font-display text-3xl font-black text-white lg:text-4xl">
              The Fundamental Difference
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: "What traditional SEO optimizes for",
                  body: "Traditional SEO optimizes for Google's PageRank algorithm: acquiring backlinks, matching keyword queries, building domain authority, and improving page load speed. The output is a position on a search results page. Success is measured in rankings and click-through rates.",
                },
                {
                  heading: "What AI SEO optimizes for",
                  body: "AI SEO optimizes for entity trust inside AI knowledge systems. AI engines don't rank websites—they build confidence in entities. The signals they trust include structured data completeness, NAP consistency across all data sources, citation authority, and the quality of AI-extractable content. The output is appearing as a recommended answer.",
                },
                {
                  heading: "Why the shift is permanent",
                  body: "The shift from link-based search to AI-generated answers is structural, not cyclical. It's driven by user behavior change (people prefer answers to link lists) and AI capability improvement (systems are now reliable enough to replace search). No algorithm update will reverse this trajectory.",
                },
                {
                  heading: "What to do with your existing SEO investment",
                  body: "Don't abandon it. Maintain your traditional SEO as a floor. Add AI entity infrastructure as the ceiling. The businesses that will win the next decade are those that own both ranking visibility and AI recommendation visibility simultaneously.",
                },
              ].map((item) => (
                <div key={item.heading}>
                  <h3 className="mb-3 font-display text-xl font-bold text-emerald-400">{item.heading}</h3>
                  <p className="text-white/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="mb-8 font-display text-2xl font-black text-white">Common Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-white/10 bg-navy-700 p-6">
                    <h3 className="mb-2 font-semibold text-white">{faq.question}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}
