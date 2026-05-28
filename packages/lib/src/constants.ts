export const SITE_URL = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://www.rapidseed.ai";
export const SITE_NAME = "RapidSEED AI";
export const SITE_DESCRIPTION =
  "The infrastructure layer powering AI discovery visibility. RapidSEED AI engineers AI entity architecture that makes businesses the recommended answer inside ChatGPT, Google AI Overviews, Gemini, and Perplexity.";

export const BOOKING_URL = process.env["NEXT_PUBLIC_BOOKING_URL"] ?? "https://TODO_BOOKING_URL";

export const COMPANY = {
  name: "RapidSEED AI",
  legalName: "RapidSEED AI LLC",
  email: "hello@rapidseed.ai",
  phone: "+1-TODO-PHONE-NUMBER",
  address: {
    streetAddress: "TODO_STREET_ADDRESS",
    addressLocality: "TODO_CITY",
    addressRegion: "TODO_STATE",
    postalCode: "TODO_ZIP",
    addressCountry: "US",
  },
  social: {
    linkedin: "https://linkedin.com/company/TODO_LINKEDIN",
    twitter: "https://twitter.com/TODO_TWITTER",
    instagram: "https://instagram.com/TODO_INSTAGRAM",
  },
  founded: "2024",
} as const;

export const FOUNDATIONS = [
  {
    id: "rims",
    acronym: "RIMS",
    name: "Reputation & Influence Management System",
    tagline: "Control your narrative across every AI data source.",
    description:
      "RIMS builds and protects the digital reputation signals that AI systems use to assess credibility. By engineering review velocity, citation patterns, and authority mentions, RIMS ensures your entity appears trustworthy inside AI recommendation layers.",
    pillars: ["Review architecture", "Citation engineering", "Mention velocity", "Sentiment signals"],
  },
  {
    id: "pearls",
    acronym: "PEARLS",
    name: "Precision Entity Authority & Relevance Layering System",
    tagline: "Engineer entity precision AI systems can act on.",
    description:
      "PEARLS constructs the layered entity architecture that ties your business to specific service categories, geographic territories, and specialty expertise—making you the precise answer AI systems surface for targeted queries.",
    pillars: ["Entity definition", "Category mapping", "Relevance layering", "Authority signals"],
  },
  {
    id: "seed",
    acronym: "SEED",
    name: "Search Engine Exact Discovery",
    tagline: "Own exact-match visibility in AI search systems.",
    description:
      "SEED optimizes for the exact discovery moment—when someone asks an AI system a direct question about your service category in your market. SEED architecture makes your entity the default recommended answer.",
    pillars: ["Query pattern analysis", "Exact match mapping", "Discovery architecture", "AI extraction design"],
  },
  {
    id: "nap",
    acronym: "NAP",
    name: "Name, Address & Phone Consistency",
    tagline: "The foundational trust signal every AI reads first.",
    description:
      "NAP is the bedrock of entity trust. Perfect consistency across every directory, citation, schema, and data source tells AI systems your entity is real, verified, and stable—a prerequisite for recommendation consideration.",
    pillars: ["Directory audit", "Citation cleanup", "Schema alignment", "Data consistency"],
  },
  {
    id: "napw",
    acronym: "NAP+W",
    name: "NAP + Website Entity Reinforcement",
    tagline: "Tie your web presence to your entity identity.",
    description:
      "NAP+W extends core NAP consistency to include your website as a structured data anchor. Your website becomes machine-readable entity infrastructure—not just a marketing page, but a schema-verified identity node.",
    pillars: ["Website schema", "Entity anchoring", "URL canonicalization", "Structured data layers"],
  },
  {
    id: "s3",
    acronym: "S³",
    name: "Structured Signal System",
    tagline: "Feed AI systems the structured data they trust.",
    description:
      "S³ designs and deploys the complete structured data ecosystem: JSON-LD schemas, metadata layers, image alt architecture, and semantic HTML that gives AI systems clean, machine-readable signals to extract and cite.",
    pillars: ["JSON-LD deployment", "Metadata architecture", "Image signal design", "Semantic structure"],
  },
  {
    id: "aeo",
    acronym: "AEO",
    name: "Answer Engine Optimization",
    tagline: "Become the answer, not the link.",
    description:
      "AEO restructures your content into AI-extractable answer units—FAQ blocks, conversational paragraphs, semantic Q&A architecture—designed to be pulled directly into AI-generated responses across every major AI engine.",
    pillars: ["FAQ architecture", "Answer unit design", "Conversational content", "AI extraction formatting"],
  },
  {
    id: "geo",
    acronym: "GEO",
    name: "Generative Engine Optimization",
    tagline: "Engineer the visual and geographic intelligence AI cites.",
    description:
      "GEO optimizes every image, video, and location signal for AI generative systems. Through interlocked image strategy, GPS metadata, alt text architecture, and location entity reinforcement, GEO makes your visual assets part of AI training and citation pipelines.",
    pillars: ["Image metadata", "GPS signals", "Alt text architecture", "Location entity engineering"],
  },
] as const;

export const INDUSTRIES = [
  { slug: "dental", name: "Dental", icon: "🦷", description: "Dental practices competing for AI recommendation in local search" },
  { slug: "vision", name: "Vision & Optometry", icon: "👁️", description: "Eye care practices and optical retailers" },
  { slug: "medical", name: "Medical Practices", icon: "🏥", description: "Primary care, specialists, and multi-location health systems" },
  { slug: "weight-loss", name: "Weight Loss", icon: "⚕️", description: "Medical weight loss clinics and wellness centers" },
  { slug: "hearing", name: "Hearing & Audiology", icon: "🔊", description: "Audiology clinics and hearing aid providers" },
  { slug: "dermatology", name: "Dermatology", icon: "✨", description: "Dermatology practices and medical spas" },
  { slug: "veterinary", name: "Veterinary", icon: "🐾", description: "Veterinary clinics and animal hospitals" },
  { slug: "legal", name: "Legal", icon: "⚖️", description: "Law firms and legal service providers" },
  { slug: "home-services", name: "Home Services", icon: "🏠", description: "HVAC, plumbing, roofing, and home service companies" },
  { slug: "wellness", name: "Wellness Brands", icon: "🌿", description: "Wellness centers, chiropractors, and integrative health" },
] as const;

export const NAV_ITEMS = [
  { label: "Platform", href: "/what-is-rapidseed-ai" },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "AEO", href: "/aeo-answer-engine-optimization" },
      { label: "GEO", href: "/geo-generative-engine-optimization" },
      { label: "AI SEO vs Traditional SEO", href: "/ai-seo-vs-traditional-seo" },
      { label: "Medical AI Visibility", href: "/medical-ai-visibility" },
      { label: "RapidSEED Framework", href: "/rapidseed-framework" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      { label: "Dental", href: "/industries/dental" },
      { label: "Vision", href: "/industries/vision" },
      { label: "Medical", href: "/industries/medical" },
      { label: "Weight Loss", href: "/industries/weight-loss" },
      { label: "Hearing", href: "/industries/hearing" },
      { label: "Dermatology", href: "/industries/dermatology" },
      { label: "Veterinary", href: "/industries/veterinary" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];
