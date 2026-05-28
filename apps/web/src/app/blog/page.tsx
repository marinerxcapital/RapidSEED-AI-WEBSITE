import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildWebsiteSchema } from "@rapidseed/schema";
import { SITE_URL, formatDate } from "@rapidseed/lib";

export const metadata: Metadata = {
  title: "AI Visibility Insights — RapidSEED AI Blog",
  description:
    "Expert analysis on AI search optimization, Answer Engine Optimization, Generative Engine Optimization, and the future of AI-driven business discovery.",
  alternates: { canonical: "/blog" },
};

// Placeholder blog posts — replace with Supabase fetch in production
const posts = [
  {
    slug: "what-is-ai-search-visibility",
    title: "What Is AI Search Visibility and Why Your Business Needs It",
    excerpt: "AI systems now answer business questions directly—recommending entities they trust instead of linking to websites. Here's what AI search visibility means and how to measure it.",
    author: "RapidSEED AI Team",
    published_at: "2024-11-15",
    tags: ["AI SEO", "AI Visibility", "Basics"],
    reading_time: 8,
  },
  {
    slug: "google-ai-overviews-business-impact",
    title: "Google AI Overviews: What Businesses Need to Know",
    excerpt: "Google AI Overviews now appear for the majority of commercial queries. Here's how they work, why they're reducing organic click-through rates, and what businesses can do about it.",
    author: "RapidSEED AI Team",
    published_at: "2024-11-08",
    tags: ["Google AI Overviews", "AI SEO", "Search"],
    reading_time: 6,
  },
  {
    slug: "answer-engine-optimization-guide",
    title: "The Complete Guide to Answer Engine Optimization (AEO)",
    excerpt: "AEO structures your content for AI extraction—not human reading. This guide covers every principle, technique, and implementation strategy for making your content AI-citation-ready.",
    author: "RapidSEED AI Team",
    published_at: "2024-11-01",
    tags: ["AEO", "Content Strategy", "AI Search"],
    reading_time: 12,
  },
  {
    slug: "chatgpt-business-recommendations",
    title: "How ChatGPT Decides Which Businesses to Recommend",
    excerpt: "ChatGPT doesn't rank websites. It recommends entities. Understanding how ChatGPT builds confidence in a business—and what signals it trusts—is the foundation of AI visibility strategy.",
    author: "RapidSEED AI Team",
    published_at: "2024-10-25",
    tags: ["ChatGPT", "AI Recommendations", "Entity Engineering"],
    reading_time: 9,
  },
  {
    slug: "nap-consistency-ai-era",
    title: "NAP Consistency in the AI Era: Why It Matters More Than Ever",
    excerpt: "Name, Address, Phone consistency has always mattered for local SEO. In the AI era, it's the foundational trust signal that determines whether AI systems can verify your entity.",
    author: "RapidSEED AI Team",
    published_at: "2024-10-18",
    tags: ["NAP", "Local SEO", "Entity Engineering"],
    reading_time: 7,
  },
  {
    slug: "generative-engine-optimization-guide",
    title: "GEO: Generative Engine Optimization Explained",
    excerpt: "Generative Engine Optimization isn't just about text. AI systems process images, geographic data, and multimedia. Here's how to optimize every signal type for AI generative systems.",
    author: "RapidSEED AI Team",
    published_at: "2024-10-11",
    tags: ["GEO", "AI Search", "Image SEO"],
    reading_time: 10,
  },
];

export default function BlogPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
    ]),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge>Insights</Badge>
            <h1 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
              AI Visibility Intelligence.
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Expert analysis on AI search optimization, entity engineering, and the future of AI-driven business discovery.
            </p>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group h-full rounded-xl border border-white/10 bg-navy-800 p-6 transition-all duration-200 hover:border-emerald-500/30 hover:bg-navy-700">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h2 className="mb-3 font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="mb-4 text-sm leading-relaxed text-white/50">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-white/30">
                        <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                        <span>{post.reading_time} min read</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
