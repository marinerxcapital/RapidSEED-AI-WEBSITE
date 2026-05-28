import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildBreadcrumbSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "Free AI Visibility Audit — Discover Your AI Discovery Footprint",
  description:
    "Request a free AI visibility audit. We'll analyze how your business appears inside ChatGPT, Google AI Overviews, Gemini, and Perplexity, then show you exactly what's missing.",
  alternates: { canonical: "/ai-visibility-audit" },
};

const auditPoints = [
  "Your current entity presence across AI knowledge systems",
  "NAP consistency score across 40+ citation sources",
  "JSON-LD schema completeness and accuracy",
  "AI-extractable content score for your key pages",
  "Competitive gap analysis in your local AI visibility",
  "Priority recommendations for the highest-impact improvements",
];

export default function AIVisibilityAuditPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "AI Visibility Audit", url: `${SITE_URL}/ai-visibility-audit` },
    ]),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              {/* Left: Value proposition */}
              <div>
                <Badge>Free Audit</Badge>
                <h1 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
                  Discover Your AI Visibility Footprint.
                </h1>
                <p className="mt-4 text-lg text-white/60">
                  Most businesses have no idea how they appear inside AI systems. Before you can fix your AI visibility, you need to know where you stand. Our audit gives you that clarity.
                </p>

                <div className="mt-10 space-y-4">
                  <h2 className="font-semibold text-white">Your audit will cover:</h2>
                  {auditPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                        <svg className="h-3 w-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-xl border border-white/10 bg-navy-800 p-6">
                  <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mb-3">What happens next</p>
                  <ol className="space-y-2">
                    {[
                      "We review your submission within 1 business day",
                      "Our team runs a full entity visibility analysis",
                      "You receive a detailed audit report",
                      "We schedule a 30-minute results call",
                    ].map((step, i) => (
                      <li key={step} className="flex items-center gap-3 text-sm text-white/60">
                        <span className="font-display text-xs font-black text-emerald-500">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Right: Form */}
              <div className="rounded-2xl border border-white/10 bg-navy-800 p-8">
                <LeadForm source="ai-visibility-audit" title="" subtitle="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
