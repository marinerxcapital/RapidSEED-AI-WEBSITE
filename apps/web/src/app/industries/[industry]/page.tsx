import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@rapidseed/schema";
import { SITE_URL, INDUSTRIES } from "@rapidseed/lib";

type IndustrySlug = (typeof INDUSTRIES)[number]["slug"];

interface IndustryContent {
  headline: string;
  subheadline: string;
  painPoints: string[];
  solutions: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const industryContent: Record<string, IndustryContent> = {
  dental: {
    headline: "AI Visibility for Dental Practices.",
    subheadline: "When someone asks an AI system for a dentist recommendation in your area, your practice should be the answer.",
    painPoints: [
      "Patients bypass Google and ask ChatGPT directly for dentist recommendations",
      "Corporate DSOs have more resources to dominate AI recommendation results",
      "Multi-location data inconsistencies confuse AI entity verification systems",
      "Traditional SEO rankings don't translate to AI search visibility",
    ],
    solutions: [
      "Entity architecture for every practice location",
      "Dental service schema: cleanings, implants, Invisalign, cosmetic procedures",
      "Insurance acceptance and new-patient availability signals",
      "NAP consistency across all dental directory listings",
    ],
    faqs: [
      {
        question: "How do patients use AI to find a dentist?",
        answer: "Patients increasingly ask AI assistants questions like 'Who is the best dentist near me accepting new patients?' or 'Find a dentist that does Invisalign in [city].' AI systems respond with specific practice recommendations based on entity confidence.",
      },
      {
        question: "How long until my dental practice appears in AI recommendations?",
        answer: "Most dental practices see measurable AI citation lift within 45-60 days of full entity infrastructure deployment. NAP consistency and schema deployment have the fastest impact, typically within 30 days.",
      },
    ],
  },
  vision: {
    headline: "AI Visibility for Optometry Practices.",
    subheadline: "Own the AI recommendation when patients search for eye care, contact lenses, and vision correction in your market.",
    painPoints: [
      "LensCrafters and 1-800 Contacts dominate traditional and AI search",
      "Contact lens and glasses queries have high purchase intent—and go to AI first",
      "Independent optometrists struggle to compete on brand recognition alone",
      "AI systems favor entities with complete optical service definitions",
    ],
    solutions: [
      "Optometry service entity architecture: exams, contacts, glasses, LASIK co-management",
      "Insurance provider signals for vision plans",
      "Geographic entity reinforcement for local market dominance",
      "GEO optimization for optical product imagery",
    ],
    faqs: [
      {
        question: "How does AI search affect optometry patient acquisition?",
        answer: "Patients ask AI systems for recommendations when choosing eye care providers. An independent optometrist with strong AI entity infrastructure can appear alongside—and above—corporate chains in AI-generated responses.",
      },
    ],
  },
  medical: {
    headline: "AI Visibility for Medical Practices.",
    subheadline: "Position your practice as the trusted AI recommendation for primary care, specialists, and health system queries.",
    painPoints: [
      "Large health systems have marketing departments—independent practices don't",
      "AI systems favor entities with complete medical service definitions and credentials",
      "Patient routing is increasingly AI-mediated, especially for specialist referrals",
      "HIPAA-adjacent trust requirements make entity verification critical",
    ],
    solutions: [
      "Medical specialty entity architecture: by condition, procedure, and insurance",
      "Physician credential and board certification schema signals",
      "Multi-location entity harmonization for practice groups",
      "Medical AEO content for common patient questions",
    ],
    faqs: [
      {
        question: "How do medical practices benefit from AI visibility?",
        answer: "When patients search for 'primary care doctor near me accepting new patients' or 'cardiologist in [city] takes [insurance],' AI systems recommend entities they have high confidence in. Medical practices with complete entity infrastructure receive these recommendations.",
      },
    ],
  },
  "weight-loss": {
    headline: "AI Visibility for Medical Weight Loss Clinics.",
    subheadline: "Become the recommended answer when patients ask AI systems about medically supervised weight loss in your market.",
    painPoints: [
      "GLP-1 medication searches are dominated by national chains",
      "High-value patients do extensive AI research before choosing a clinic",
      "Weight loss queries are among the highest-intent medical searches",
      "Treatment program differentiation is difficult without structured entity signals",
    ],
    solutions: [
      "Medical weight loss service entity architecture: GLP-1, bariatric, nutrition programs",
      "Treatment outcome signals and clinical approach schema",
      "Insurance coverage and self-pay option visibility",
      "AEO content for common weight loss questions AI answers",
    ],
    faqs: [
      {
        question: "Why is AI visibility especially important for weight loss clinics?",
        answer: "Weight loss is a high-consideration, high-value service. Patients often spend weeks researching options using AI systems before making a decision. Being the consistently recommended clinic during that research phase converts to booked consultations.",
      },
    ],
  },
  hearing: {
    headline: "AI Visibility for Audiology & Hearing Practices.",
    subheadline: "Own the AI recommendation when patients search for hearing aids, audiology exams, and tinnitus treatment.",
    painPoints: [
      "National hearing aid chains dominate AI recommendations in most markets",
      "Audiology queries are highly specific—AI rewards precise entity definitions",
      "Hearing aid brand and technology signals are missing from most practice entities",
      "Older patient demographics are increasingly using AI for healthcare research",
    ],
    solutions: [
      "Audiology service schema: hearing exams, aids, tinnitus, cochlear implants",
      "Hearing aid brand and technology entity signals",
      "Insurance and Medicare coverage signals",
      "AEO content for hearing health questions",
    ],
    faqs: [
      {
        question: "How do hearing aid patients use AI search?",
        answer: "Patients—often older adults—ask AI systems specific questions: 'Best hearing clinic near me for Phonak hearing aids' or 'Audiologist in [city] that takes Medicare.' Entity infrastructure ensures your practice answers these queries.",
      },
    ],
  },
  dermatology: {
    headline: "AI Visibility for Dermatology Practices.",
    subheadline: "Become the recommended dermatologist when patients ask AI about skin conditions, cosmetic procedures, and medical derm.",
    painPoints: [
      "Medical and cosmetic dermatology require separate entity signals",
      "Aesthetic treatment queries are dominated by medspa content",
      "Long booking waits at established practices mean patients use AI to find alternatives",
      "Before/after imagery requires GEO optimization to appear in AI visual results",
    ],
    solutions: [
      "Dual entity architecture: medical dermatology and cosmetic procedures",
      "Procedure-specific schema: Botox, fillers, laser, skin cancer screening",
      "Board certification and fellowship training signals",
      "GEO optimization for treatment imagery",
    ],
    faqs: [
      {
        question: "How does AI visibility affect dermatology patient acquisition?",
        answer: "Patients searching for dermatologists often have urgent needs—a suspicious mole, a chronic skin condition, or a cosmetic concern. AI systems that recommend your practice at that high-intent moment drive immediate booking intent.",
      },
    ],
  },
  veterinary: {
    headline: "AI Visibility for Veterinary Practices.",
    subheadline: "Be the recommended answer when pet owners ask AI systems for veterinary care in your area.",
    painPoints: [
      "Emergency vet queries go to AI first—especially outside business hours",
      "Corporate veterinary groups have invested in AI visibility; independent practices haven't",
      "Specialty veterinary services require specific entity definitions AI can't infer",
      "Pet owner demographics are highly AI-native",
    ],
    solutions: [
      "Veterinary service entity architecture: wellness, emergency, surgery, dental",
      "Species specialization signals: dogs, cats, exotics",
      "Emergency availability and after-hours visibility",
      "Veterinarian credential and specialty certification schema",
    ],
    faqs: [
      {
        question: "Why do pet owners use AI for veterinary searches?",
        answer: "Pet owners increasingly ask AI 'emergency vet near me open now' or 'best veterinarian for cats in [city].' These are high-urgency, high-intent queries. Being the recommended answer in those moments drives direct calls and bookings.",
      },
    ],
  },
  legal: {
    headline: "AI Visibility for Law Firms.",
    subheadline: "Own the AI recommendation when potential clients search for legal representation in your practice areas.",
    painPoints: [
      "Legal queries are among the highest-value AI searches",
      "Large law firms with national presence dominate AI recommendations",
      "Practice area specificity is critical—generalist entity signals don't convert",
      "Attorney credential and bar admission signals are rarely structured",
    ],
    solutions: [
      "Practice area entity architecture: personal injury, family law, criminal defense, estate planning",
      "Attorney credential, bar admission, and recognition schema",
      "Geographic entity reinforcement for local market authority",
      "AEO content for common legal questions",
    ],
    faqs: [
      {
        question: "How does AI visibility apply to law firm marketing?",
        answer: "When a potential client asks an AI system 'personal injury lawyer in [city] with free consultation,' the AI recommends firms it has high entity confidence in. Law firms with complete entity infrastructure receive those recommendations.",
      },
    ],
  },
  "home-services": {
    headline: "AI Visibility for Home Services Companies.",
    subheadline: "Be the recommended plumber, HVAC company, or roofer when homeowners ask AI for local service providers.",
    painPoints: [
      "Home service queries are highly local and urgency-driven—perfect for AI recommendation",
      "National franchise operations are building AI entity presence faster than independents",
      "Service area definitions are missing from most home service entity profiles",
      "Emergency service availability signals are rarely structured",
    ],
    solutions: [
      "Service entity architecture by trade and service type",
      "Service area coverage and geographic entity reinforcement",
      "Emergency availability and same-day service signals",
      "Licensing, bonding, and certification schema",
    ],
    faqs: [
      {
        question: "How do homeowners use AI to find home service providers?",
        answer: "Homeowners increasingly ask AI 'licensed HVAC company near me that can come today' or 'emergency plumber in [city] open Sunday.' These are high-conversion moments where AI recommendation translates directly to booked service calls.",
      },
    ],
  },
};

function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const content = industryContent[slug];
  return {
    title: `AI Visibility for ${industry.name}`,
    description: content?.subheadline ?? `AI discovery infrastructure for ${industry.name} businesses.`,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  const content = industryContent[slug];

  if (!industry || !content) notFound();

  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Industries", url: `${SITE_URL}/industries` },
      { name: industry.name, url: `${SITE_URL}/industries/${slug}` },
    ]),
    buildServiceSchema(
      `AI Visibility for ${industry.name}`,
      content.subheadline,
      `${SITE_URL}/industries/${slug}`
    ),
    buildFAQSchema(content.faqs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>{industry.name}</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              {content.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">{content.subheadline}</p>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Pain points */}
              <div>
                <h2 className="mb-6 font-display text-2xl font-black text-white">The AI Visibility Challenge</h2>
                <div className="space-y-3">
                  {content.painPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-lg border border-red-500/10 bg-red-500/5 p-4">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 110 18A9 9 0 0112 3z" />
                      </svg>
                      <p className="text-sm text-white/70">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="mb-6 font-display text-2xl font-black text-white">The RapidSEED Solution</h2>
                <div className="space-y-3">
                  {content.solutions.map((solution) => (
                    <div key={solution} className="flex items-start gap-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 p-4">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm text-white/70">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-navy-800 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-display text-2xl font-black text-white">Questions & Answers</h2>
            <div className="space-y-4">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-white/10 bg-navy-700 p-6">
                  <h3 className="mb-2 font-semibold text-white">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with form */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-navy-800 p-8">
              <LeadForm
                source={`industry-${slug}`}
                title={`Get Your ${industry.name} AI Visibility Audit`}
                subtitle="We'll analyze your current AI visibility footprint and show you what's needed to own your market's recommendations."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
