import type { Metadata } from "next";
import { Badge, Card } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildServiceSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "What is RapidSEED AI",
  description:
    "RapidSEED AI is an AI discovery infrastructure company that engineers entity presence, structured data architecture, and AEO/GEO systems to make businesses the recommended answer inside AI search engines.",
  alternates: { canonical: "/what-is-rapidseed-ai" },
};

const pillars = [
  {
    title: "AI Discovery Infrastructure",
    description:
      "We build the technical and content infrastructure that AI systems require to identify, verify, and recommend a business—at a level of completeness that traditional SEO has never addressed.",
  },
  {
    title: "Entity Architecture",
    description:
      "Every business is an entity in AI knowledge graphs. We engineer that entity completely: NAP data, schema layers, service definitions, geographic anchors, and authority signals.",
  },
  {
    title: "Answer Engine Optimization",
    description:
      "We restructure your content into AI-extractable answer units that generative engines can pull directly into responses when users ask relevant questions.",
  },
  {
    title: "Generative Engine Optimization",
    description:
      "We optimize visual, geographic, and structured data signals so that AI generative systems have complete, trusted information to cite about your business.",
  },
  {
    title: "Vertical Specialization",
    description:
      "Our systems are calibrated for high-trust local verticals—healthcare, dental, legal, home services—where AI recommendation converts directly to booked appointments.",
  },
  {
    title: "Infrastructure, Not Campaigns",
    description:
      "RapidSEED AI builds infrastructure that compounds over time. Not ad spend. Not rented traffic. Owned entity presence that AI systems recognize permanently.",
  },
];

export default function WhatIsRapidSeedPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "What is RapidSEED AI", url: `${SITE_URL}/what-is-rapidseed-ai` },
    ]),
    buildServiceSchema(
      "AI Discovery Optimization",
      "RapidSEED AI engineers entity architecture and structured data infrastructure that makes businesses the recommended answer inside AI search systems.",
      `${SITE_URL}/what-is-rapidseed-ai`
    ),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>Platform Overview</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              What is RapidSEED AI?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              RapidSEED AI is an AI discovery infrastructure company. We engineer the entity architecture, structured data systems, and AI-extractable content that positions businesses as the recommended answer inside ChatGPT, Google AI Overviews, Gemini, and Perplexity.
            </p>
          </div>
        </section>

        {/* Positioning statement */}
        <section className="border-y border-white/10 bg-navy-800 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <blockquote className="font-display text-2xl font-bold leading-relaxed text-white lg:text-3xl">
              "The infrastructure layer powering AI discovery visibility."
            </blockquote>
            <p className="mt-4 text-white/50">
              We are not an SEO agency. We are not a content marketing firm. We are an AI entity engineering company.
            </p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-black text-white lg:text-4xl">
                Six Core Capabilities
              </h2>
              <p className="mt-4 text-white/60">
                Every engagement deploys these six infrastructure layers simultaneously.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <Card key={pillar.title}>
                  <h3 className="mb-3 font-display text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="bg-navy-800 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-black text-white lg:text-4xl">
              Why This Matters Right Now
            </h2>
            <div className="mt-8 space-y-6 text-left">
              {[
                {
                  q: "AI is eating search traffic.",
                  a: "Google AI Overviews now appear for the majority of commercial queries. Users receive answers without clicking. Traffic to websites is declining even when rankings hold.",
                },
                {
                  q: "AI systems recommend entities, not pages.",
                  a: "When someone asks ChatGPT for a dentist recommendation, it doesn't return a list of websites. It recommends an entity it trusts. Your website URL means nothing if your entity isn't verified.",
                },
                {
                  q: "The window for first-mover advantage is open.",
                  a: "Most businesses have no AI visibility strategy. The practices that build entity infrastructure now will own AI recommendation presence for years.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-xl border border-white/10 bg-navy-700 p-6">
                  <h3 className="mb-2 font-semibold text-emerald-400">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.a}</p>
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
