import type { Metadata } from "next";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildBreadcrumbSchema } from "@rapidseed/schema";
import { SITE_URL, COMPANY } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "Contact RapidSEED AI",
  description:
    "Get in touch with RapidSEED AI. Questions about AI visibility, strategy sessions, or enterprise engagements—we're here.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Contact", url: `${SITE_URL}/contact` },
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
                <Badge>Contact</Badge>
                <h1 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
                  Get in Touch.
                </h1>
                <p className="mt-4 text-lg text-white/60">
                  Questions about AI visibility strategy, the RapidSEED Framework, or how we work—we're here.
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-emerald-400 transition-colors">
                      {COMPANY.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">Phone</p>
                    <a href={`tel:${COMPANY.phone}`} className="text-white hover:text-emerald-400 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">Location</p>
                    <address className="not-italic text-white/70">
                      {COMPANY.address.streetAddress}<br />
                      {COMPANY.address.addressLocality}, {COMPANY.address.addressRegion} {COMPANY.address.postalCode}
                    </address>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">Response time</p>
                    <p className="text-white/70">Within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-navy-800 p-8">
                <LeadForm
                  source="contact"
                  title="Send Us a Message"
                  subtitle="We'll respond within 1 business day."
                  successMessage="Message received. We'll be in touch within 1 business day."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
