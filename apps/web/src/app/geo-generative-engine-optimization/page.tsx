import type { Metadata } from "next";
import { Badge, Card } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from "@rapidseed/schema";
import { SITE_URL } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "GEO — Generative Engine Optimization",
  description:
    "Generative Engine Optimization (GEO) engineers image metadata, GPS signals, alt text architecture, and location entity reinforcement for AI generative systems.",
  alternates: { canonical: "/geo-generative-engine-optimization" },
};

const geoFaqs = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization is the discipline of optimizing visual, geographic, and structured data signals for AI generative systems. GEO ensures your images, location data, and multimedia assets are machine-readable, properly attributed, and part of AI citation and extraction pipelines.",
  },
  {
    question: "Why do AI systems need image and location data optimization?",
    answer:
      "AI systems like Google's Gemini and Perplexity are multimodal—they process images, maps, and location data as part of their knowledge. If your images have missing metadata, incorrect GPS data, or unoptimized alt text, AI systems cannot attribute them to your entity.",
  },
  {
    question: "What is interlocked image strategy?",
    answer:
      "Interlocked image strategy is the practice of ensuring every image associated with your business—on your website, Google Business Profile, social platforms, and citation sites—shares consistent metadata: business name, location, service category, and GPS coordinates. This creates a coherent visual entity signal across all AI data sources.",
  },
  {
    question: "How does GEO support local AI recommendations?",
    answer:
      "Location-based AI recommendations depend heavily on geographic entity signals. GEO reinforces your location entity through GPS metadata consistency, structured geographic schema, and location-entity mentions across all content—making it unambiguous to AI systems exactly where you operate and what you provide.",
  },
];

const components = [
  {
    title: "Interlocked Image Strategy",
    description: "Every image across your digital presence shares consistent metadata—business name, location, service category, alt text—creating a coherent visual entity signal AI systems can parse and attribute.",
  },
  {
    title: "GPS Metadata Engineering",
    description: "EXIF location data, Google Maps integration, and geographic schema markers are aligned and verified. AI systems use GPS signals to confirm geographic relevance for local recommendations.",
  },
  {
    title: "Alt Text Architecture",
    description: "Alt text is redesigned as structured entity descriptions—not generic labels. Each image alt attribute contains entity name, service context, and geographic anchor in AI-parseable format.",
  },
  {
    title: "Location Entity Reinforcement",
    description: "Geographic schema (LocalBusiness, GeoCoordinates, ServiceArea) is deployed across all pages. Every location signal points to the same verified geographic entity.",
  },
  {
    title: "Visual Citation Optimization",
    description: "Images are formatted and attributed for AI multimodal systems that generate visual content. Proper attribution, file naming conventions, and structured image objects ensure visual citability.",
  },
  {
    title: "Multimedia Structured Data",
    description: "Video, image galleries, and rich media are wrapped in structured data (ImageObject, VideoObject) that AI systems can extract as verified media associated with your entity.",
  },
];

export default function GEOPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "GEO — Generative Engine Optimization", url: `${SITE_URL}/geo-generative-engine-optimization` },
    ]),
    buildServiceSchema(
      "Generative Engine Optimization (GEO)",
      "Engineer image metadata, GPS signals, alt text architecture, and location entity reinforcement for AI generative systems.",
      `${SITE_URL}/geo-generative-engine-optimization`
    ),
    buildFAQSchema(geoFaqs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>GEO</Badge>
            <h1 className="mt-6 font-display text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
              Generative Engine Optimization.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white/60">
              Engineer the visual and geographic intelligence that AI systems cite. GEO makes your images, location signals, and multimedia assets machine-readable components of AI knowledge.
            </p>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-black text-white lg:text-4xl">
                Six GEO Infrastructure Layers
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {components.map((c) => (
                <Card key={c.title}>
                  <h3 className="mb-3 font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{c.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-800 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-display text-3xl font-black text-white lg:text-4xl">
              GEO Questions & Answers
            </h2>
            <div className="space-y-4">
              {geoFaqs.map((faq) => (
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
