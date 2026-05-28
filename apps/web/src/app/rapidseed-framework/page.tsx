import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildServiceSchema } from "@rapidseed/schema";
import { SITE_URL, FOUNDATIONS } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "The RapidSEED Framework — Eight Foundations of AI Discovery",
  description:
    "The RapidSEED Framework comprises eight interlocked systems: RIMS, PEARLS, SEED, NAP, NAP+W, S³, AEO, and GEO. Together they build complete AI discovery infrastructure.",
  alternates: { canonical: "/rapidseed-framework" },
};

export default function FrameworkPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "RapidSEED Framework", url: `${SITE_URL}/rapidseed-framework` },
    ]),
    buildServiceSchema(
      "RapidSEED AI Framework",
      "Eight interlocked AI discovery infrastructure systems: RIMS, PEARLS, SEED, NAP, NAP+W, S³, AEO, and GEO.",
      `${SITE_URL}/rapidseed-framework`
    ),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>The Architecture</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              The RapidSEED Framework.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              Eight proprietary systems deployed simultaneously to build the complete AI discovery infrastructure that positions your business as the trusted, recommended entity in your market.
            </p>
          </div>
        </section>

        {/* Framework detail */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {FOUNDATIONS.map((foundation, i) => (
                <div
                  key={foundation.id}
                  className="grid gap-6 rounded-2xl border border-white/10 bg-navy-800 p-8 lg:grid-cols-3"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-5xl font-black text-white/10">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="font-display text-3xl font-black text-emerald-400">{foundation.acronym}</div>
                      <div className="mt-1 text-sm text-white/40">{foundation.name}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="mb-3 text-lg font-semibold text-white">{foundation.tagline}</p>
                    <p className="text-sm leading-relaxed text-white/60">{foundation.description}</p>
                    {foundation.pillars && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {foundation.pillars.map((pillar) => (
                          <span
                            key={pillar}
                            className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-400"
                          >
                            {pillar}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration callout */}
        <section className="border-y border-white/10 bg-navy-800 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-black text-white lg:text-3xl">
              Eight Systems. One Infrastructure.
            </h2>
            <p className="mt-4 text-white/60">
              Each foundation reinforces the others. NAP consistency enables SEED precision. S³ data feeds AEO extraction. PEARLS authority amplifies RIMS reputation. The framework works because every system is designed to interlock.
            </p>
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}
