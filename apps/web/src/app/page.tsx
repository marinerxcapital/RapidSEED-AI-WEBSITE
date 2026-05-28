import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/home/Hero";
import { AISearchShift } from "@/components/home/AISearchShift";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { EightFoundations } from "@/components/home/EightFoundations";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IndustrySolutions } from "@/components/home/IndustrySolutions";
import { SignalArchitecture } from "@/components/home/SignalArchitecture";
import { CaseStudies } from "@/components/home/CaseStudies";
import { FAQSection } from "@/components/home/FAQSection";
import { homeFaqs } from "@/data/faqs";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildHomePageSchemas, buildFAQSchema } from "@rapidseed/schema";
import { SITE_NAME, SITE_DESCRIPTION } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Own Visibility Inside AI Search`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const schemas = [...buildHomePageSchemas(), buildFAQSchema(homeFaqs)];

  return (
    <>
      <JsonLd schema={schemas} />
      <Hero />
      <AISearchShift />
      <ComparisonTable />
      <EightFoundations />
      <HowItWorks />
      <IndustrySolutions />
      <SignalArchitecture />
      <CaseStudies />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
