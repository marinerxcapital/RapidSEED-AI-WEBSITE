// ─── Lead ────────────────────────────────────────────────────────────────────
export interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  message?: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at: string;
  status: "new" | "contacted" | "qualified" | "closed";
}

export interface LeadInsert {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  message?: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published: boolean;
  featured_image?: string;
  tags: string[];
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  reading_time?: number;
}

export interface BlogPostInsert {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published?: boolean;
  featured_image?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  sort_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface FAQInsert {
  question: string;
  answer: string;
  category?: string;
  sort_order?: number;
  published?: boolean;
}

// ─── Case Study ──────────────────────────────────────────────────────────────
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  client_type: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  before_metrics: Record<string, string | number>;
  after_metrics: Record<string, string | number>;
  testimonial?: string;
  testimonial_author?: string;
  published: boolean;
  featured_image?: string;
  created_at: string;
  updated_at: string;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  improvement: string;
}

// ─── Industry ────────────────────────────────────────────────────────────────
export type Industry =
  | "dental"
  | "vision"
  | "medical"
  | "weight-loss"
  | "hearing"
  | "dermatology"
  | "veterinary"
  | "legal"
  | "home-services"
  | "wellness";

export interface IndustryPage {
  id: string;
  slug: Industry;
  name: string;
  headline: string;
  subheadline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  published: boolean;
  meta_title?: string;
  meta_description?: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Foundation ──────────────────────────────────────────────────────────────
export interface Foundation {
  id: string;
  name: string;
  acronym: string;
  tagline: string;
  description: string;
  pillars?: string[];
}
