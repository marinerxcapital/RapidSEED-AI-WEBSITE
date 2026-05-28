import type { Metadata } from "next";
import { Badge, Card } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "Medical AI Visibility — Healthcare AI Search Optimization",
  description:
    "Healthcare patients are asking AI systems for medical recommendations. RapidSEED AI engineers entity infrastructure for dental, medical, vision, dermatology, hearing, weight loss, and veterinary practices.",
  alternates: { canonical: "/medical-ai-visibility" },
};

const medicalFaqs = [
  {
    question: "How do patients use AI systems to find healthcare providers?",
    answer:
      "Patients increasingly ask AI assistants questions like 'Who is the best dentist near me accepting new patients?' or 'Find me a weight loss doctor in Dallas.' These conversational queries bypass traditional search entirely. AI systems respond with specific provider recommendations based on entity confidence, not rankings.",
  },
  {
    question: "What makes medical AI visibility different from general AI SEO?",
    answer:
      "Medical practices deal with HIPAA-adjacent trust requirements, local-intent queries, multi-location entities, and high-value appointment conversions. Our medical AI visibility system is calibrated for these specific conditions: verified NAP at every location, medical service entity definitions, specialty schema, and insurance acceptance signals.",
  },
  {
    question: "Which medical specialties benefit most from AI visibility optimization?",
    answer:
      "Dental, optometry, medical weight loss, dermatology, audiology, and veterinary practices see the highest AI visibility lift because patients ask highly specific questions in these verticals. 'Find a dentist taking new patients near [city]' or 'Best weight loss clinic in [area]' are exactly the query types AI visibility optimization targets.",
  },
  {
    question: "How does AI visibility drive appointment bookings?",
    answer:
      "When an AI system recommends your practice in response to a patient's question, the recommendation carries implicit trust. Unlike a paid ad or organic listing, an AI recommendation feels like a personal referral. Conversion rates from AI-sourced recommendations are significantly higher than from traditional search clicks.",
  },
];

const specialties = [
  { name: "Dental Practices", description: "New patient acquisition through AI recommendation in local dental queries" },
  { name: "Optometry & Vision", description: "Eye exam and contact lens recommendation visibility in local AI search" },
  { name: "Medical Weight Loss", description: "Position your clinic as the recommended answer for weight loss queries" },
  { name: "Dermatology", description: "Skincare and medical derm recommendation visibility across AI systems" },
  { name: "Audiology & Hearing", description: "Hearing aid and audiology recommendation in AI-assisted searches" },
  { name: "Veterinary Medicine", description: "Pet owner AI search visibility for local veterinary care" },
];

export default function MedicalAIVisibilityPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Medical AI Visibility", url: `${SITE_URL}/medical-ai-visibility` },
    ]),
    buildServiceSchema(
      "Medical AI Visibility",
      "AI discovery infrastructure for healthcare practices: dental, medical, vision, dermatology, hearing, weight loss, and veterinary.",
      `${SITE_URL}/medical-ai-visibility`
    ),
    buildFAQSchema(medicalFaqs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>Healthcare Vertical</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              Medical AI Visibility.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              Patients are asking AI systems who to trust with their health. Be the practice that's recommended—not the one that's invisible.
            </p>
          </div>
        </section>

        {/* Why medical */}
        <section className="border-y border-white/10 bg-navy-800 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { stat: "72%", label: "of patients research healthcare providers using AI before booking" },
                { stat: "3×", label: "higher trust in AI-recommended providers vs. search engine results" },
                { stat: "First", label: "AI recommendation wins the appointment in high-trust verticals" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-display text-4xl font-black text-emerald-400">{item.stat}</div>
                  <p className="mt-2 text-sm text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-black text-white lg:text-4xl">
                Healthcare Specialties We Serve
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {specialties.map((spec) => (
                <Card key={spec.name}>
                  <h3 className="mb-2 font-display text-lg font-bold text-white">{spec.name}</h3>
                  <p className="text-sm text-white/60">{spec.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-navy-800 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-display text-3xl font-black text-white lg:text-4xl">
              Medical AI Visibility Questions
            </h2>
            <div className="space-y-4">
              {medicalFaqs.map((faq) => (
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
