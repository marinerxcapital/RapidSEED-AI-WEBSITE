import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildOrganizationSchema } from "@rapidseed/schema";
import { SITE_URL, COMPANY } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "About RapidSEED AI",
  description:
    "RapidSEED AI was founded to solve the AI visibility crisis facing local and healthcare businesses. We engineer the entity infrastructure that makes businesses the recommended answer in AI search.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "About", url: `${SITE_URL}/about` },
    ]),
    buildOrganizationSchema(),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>About</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              Built to Solve the AI Visibility Problem.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              RapidSEED AI exists because the shift to AI-generated search answers created a visibility crisis that no existing agency was equipped to solve.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-white/70 leading-relaxed">
              <p className="text-lg">
                When Google launched AI Overviews and ChatGPT reached 200 million active users, the search landscape changed permanently. Businesses that had invested years in traditional SEO found themselves invisible in the AI-generated answers users were increasingly relying on.
              </p>
              <p>
                The problem wasn't content quality or website performance. It was that AI systems operate on a fundamentally different trust model—one built on entity verification, structured data completeness, and citation networks. None of the existing SEO playbooks addressed it.
              </p>
              <p>
                RapidSEED AI was built to close that gap. We developed the RapidSEED Framework—eight interlocked infrastructure systems that engineer complete AI entity presence—and deployed it across healthcare and wellness verticals where AI recommendation converts directly to booked appointments.
              </p>
              <p>
                Our methodology combines structured data engineering, AEO content architecture, GEO signal optimization, and citation network buildout into a systematic 60-day deployment that transforms an invisible business into a recommended entity.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-navy-800 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-black text-white lg:text-4xl">
                How We Work
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Infrastructure first",
                  description: "We build systems, not campaigns. Everything we deploy compounds over time and continues working without ongoing ad spend.",
                },
                {
                  title: "Measurable outcomes",
                  description: "AI visibility is measurable. We track citation appearances, entity match scores, and recommendation frequency at 30, 60, and 90-day checkpoints.",
                },
                {
                  title: "Vertical expertise",
                  description: "We specialize in healthcare and wellness because these verticals have the highest AI recommendation conversion rates and the most to gain.",
                },
                {
                  title: "No black boxes",
                  description: "Every system we deploy is documented and explained. You own your entity infrastructure—it's not locked in a proprietary platform.",
                },
                {
                  title: "AI-native methodology",
                  description: "Our systems are designed for the AI era from the ground up—not adapted from legacy SEO practices that predate generative search.",
                },
                {
                  title: "Partnership, not service",
                  description: "We treat every engagement as a long-term entity infrastructure project. Our success metrics are your visibility metrics.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-navy-700 p-6">
                  <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
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
