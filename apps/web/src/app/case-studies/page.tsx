import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "Case Studies — AI Visibility Results",
  description:
    "Before-and-after AI visibility results across dental, medical, optometry, and other healthcare verticals. Real entity infrastructure deployments, real results.",
  alternates: { canonical: "/case-studies" },
};

const caseStudies = [
  {
    id: 1,
    industry: "Dental",
    type: "Multi-location group",
    location: "Phoenix Metro Area",
    locations: 4,
    challenge: "Despite strong Google rankings and a healthy review profile, the practice had zero presence in AI-generated responses. When potential patients asked ChatGPT or Google AI Overviews for dental recommendations in their area, the practice was invisible.",
    approach: "Full RapidSEED Framework deployment: entity audit across all 4 locations, NAP harmonization, JSON-LD schema deployment on all location pages, AEO restructuring of service descriptions, citation network buildout.",
    results: [
      { metric: "AI citation appearances", before: "0", after: "47+", timeframe: "60 days" },
      { metric: "Entity match score", before: "31%", after: "94%", timeframe: "60 days" },
      { metric: "ChatGPT recommendations", before: "0", after: "First mention", timeframe: "45 days" },
      { metric: "Google AI Overviews", before: "0", after: "22+", timeframe: "60 days" },
    ],
  },
  {
    id: 2,
    industry: "Medical Weight Loss",
    type: "Single-location clinic",
    location: "Dallas, TX",
    locations: 1,
    challenge: "A competitor clinic had higher AI visibility despite lower traditional search rankings. Patients who asked AI systems for weight loss clinic recommendations consistently received the competitor's name—not theirs.",
    approach: "Deep entity audit revealing critical NAP inconsistencies across 40+ citation sources. Complete schema rebuild, AEO content overhaul for 12 service pages, Perplexity-targeted structured data deployment.",
    results: [
      { metric: "Perplexity citations", before: "0", after: "12+", timeframe: "45 days" },
      { metric: "Google AI Overview appearances", before: "2", after: "38+", timeframe: "55 days" },
      { metric: "Structured data score", before: "18%", after: "97%", timeframe: "30 days" },
      { metric: "NAP consistency", before: "54%", after: "100%", timeframe: "21 days" },
    ],
  },
  {
    id: 3,
    industry: "Optometry",
    type: "Independent vision center",
    location: "Chicago, IL",
    locations: 1,
    challenge: "Corporate chains with larger marketing budgets were dominating AI recommendation for optometry in the Chicago market. The independent practice needed entity infrastructure to compete on equal footing.",
    approach: "Entity authority architecture: deep service entity definitions for optometry and contact lenses, geographic entity reinforcement for Chicago metro, interlocked image strategy across all platforms.",
    results: [
      { metric: "AI recommendation count", before: "1", after: "29+", timeframe: "55 days" },
      { metric: "NAP consistency", before: "67%", after: "100%", timeframe: "28 days" },
      { metric: "Google AI Overviews", before: "0", after: "14+", timeframe: "60 days" },
      { metric: "Entity authority score", before: "22", after: "88", timeframe: "60 days" },
    ],
  },
];

export default function CaseStudiesPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Case Studies", url: `${SITE_URL}/case-studies` },
    ]),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>Results</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              Entity Infrastructure. Measurable Results.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              Before-and-after AI visibility deployments across healthcare and wellness verticals. Real entity architecture. Real recommendation lift.
            </p>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {caseStudies.map((study, i) => (
                <article key={study.id} className="rounded-2xl border border-white/10 bg-navy-800 overflow-hidden">
                  {/* Header */}
                  <div className="border-b border-white/10 bg-navy-700 p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <Badge variant="emerald">{study.industry}</Badge>
                        <h2 className="mt-3 font-display text-2xl font-black text-white">{study.type}</h2>
                        <p className="mt-1 text-sm text-white/40">{study.location} · {study.locations} {study.locations === 1 ? "location" : "locations"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/30 uppercase tracking-widest">Case Study {String(i + 1).padStart(2, "0")}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid gap-8 p-8 lg:grid-cols-2">
                    <div>
                      <h3 className="mb-3 font-semibold text-white/50 text-sm uppercase tracking-widest">Challenge</h3>
                      <p className="text-white/70 leading-relaxed">{study.challenge}</p>
                      <h3 className="mb-3 mt-6 font-semibold text-white/50 text-sm uppercase tracking-widest">Approach</h3>
                      <p className="text-white/70 leading-relaxed">{study.approach}</p>
                    </div>

                    <div>
                      <h3 className="mb-4 font-semibold text-white/50 text-sm uppercase tracking-widest">Results</h3>
                      <div className="space-y-3">
                        {study.results.map((r) => (
                          <div key={r.metric} className="rounded-lg border border-white/5 bg-navy-900/50 p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-white/60">{r.metric}</span>
                              <span className="text-xs text-white/30">{r.timeframe}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-center">
                                <div className="text-lg font-bold text-white/30">{r.before}</div>
                                <div className="text-xs text-white/20">Before</div>
                              </div>
                              <div className="flex-1 flex items-center">
                                <div className="h-px flex-1 bg-white/10" />
                                <svg className="h-4 w-4 text-emerald-500 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <div className="h-px flex-1 bg-emerald-500/30" />
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-emerald-400">{r.after}</div>
                                <div className="text-xs text-emerald-400/60">After</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}
