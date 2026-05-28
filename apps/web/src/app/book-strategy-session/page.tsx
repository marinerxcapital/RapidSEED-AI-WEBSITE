import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildBreadcrumbSchema } from "@rapidseed/schema";
import { SITE_URL, BOOKING_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "Book a Strategy Session — RapidSEED AI",
  description:
    "Book a 60-minute AI visibility strategy session. We'll audit your entity presence, identify gaps, and build a roadmap to AI recommendation dominance in your market.",
  alternates: { canonical: "/book-strategy-session" },
};

export default function BookStrategySessionPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Book Strategy Session", url: `${SITE_URL}/book-strategy-session` },
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
              <div>
                <Badge>Strategy Session</Badge>
                <h1 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
                  60 Minutes to AI Visibility Clarity.
                </h1>
                <p className="mt-4 text-lg text-white/60">
                  In a single strategy session, you'll understand exactly where you stand in AI search, what your competitors are doing, and what infrastructure you need to own your market's AI recommendations.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { label: "Duration", value: "60 minutes" },
                    { label: "Format", value: "Video call or phone" },
                    { label: "Deliverable", value: "AI visibility roadmap" },
                    { label: "Cost", value: "Complimentary" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-white/40">{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="mb-4 text-sm font-semibold text-white">We'll cover:</p>
                  <ul className="space-y-2">
                    {[
                      "Your current AI entity presence score",
                      "Competitor AI visibility analysis",
                      "Priority infrastructure gaps",
                      "60-day visibility roadmap",
                      "ROI framework for your vertical",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct booking CTA if URL is configured */}
                {!BOOKING_URL.includes("TODO") && (
                  <div className="mt-8">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Book directly on our calendar →
                    </a>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-white/10 bg-navy-800 p-8">
                <LeadForm
                  source="book-strategy-session"
                  title="Request Your Strategy Session"
                  subtitle="Fill out the form and we'll reach out to confirm your time."
                  successMessage="Your session request has been received. We'll confirm your time slot within 1 business day."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
