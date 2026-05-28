import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@rapidseed/ui";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildArticleSchema } from "@rapidseed/schema";
import { SITE_URL, formatDate } from "@rapidseed/lib";
import type { BlogPost } from "@rapidseed/types";

// Placeholder data — replace with Supabase fetch in production
const posts: BlogPost[] = [
  {
    id: "1",
    slug: "what-is-ai-search-visibility",
    title: "What Is AI Search Visibility and Why Your Business Needs It",
    excerpt: "AI systems now answer business questions directly—recommending entities they trust instead of linking to websites. Here's what AI search visibility means and how to measure it.",
    content: `
## The Shift From Rankings to Recommendations

For two decades, being visible online meant ranking on the first page of Google. Businesses invested in keywords, backlinks, and page optimization—all designed to earn a position in a list of links.

That model is breaking down.

AI systems—ChatGPT, Google AI Overviews, Gemini, Perplexity—don't return link lists. They generate answers. And when someone asks an AI system for a business recommendation, the AI doesn't show them ten options to click through. It recommends a specific entity it has confidence in.

## What AI Search Visibility Actually Means

AI search visibility is the degree to which AI systems recognize, trust, and recommend your business when users ask relevant questions.

It's distinct from traditional search rankings in three critical ways:

**1. The output is different.** Traditional SEO earns page positions. AI search visibility earns recommendations—a qualitatively different outcome with different conversion dynamics.

**2. The signals are different.** Google's PageRank algorithm rewards backlinks and keyword density. AI systems reward entity confidence—completeness, consistency, and citability of structured data across all sources.

**3. The mechanism is different.** Search engines crawl and index pages. AI systems build knowledge about entities—businesses, people, places—from structured data, citations, and verified sources. Your website URL is less important than your entity profile.

## How AI Systems Evaluate Business Entities

When an AI system encounters a question like "Who is the best dentist in Phoenix accepting new patients?", it doesn't search for websites. It queries its knowledge about dental practice entities in Phoenix.

The factors that influence that evaluation:

- **Structured data completeness**: Does the entity have full JSON-LD schema data? Is it correctly structured?
- **NAP consistency**: Is the same name, address, and phone number across all data sources?
- **Citation authority**: Does the entity appear in credible directories and data sources?
- **Content extractability**: Is the entity's content structured as AI-extractable answers?
- **Geographic verification**: Are location signals consistent and precise?

## How to Measure Your AI Visibility

Unlike traditional SEO rankings, AI visibility isn't tracked in a dashboard—yet. Current measurement approaches include:

1. **Manual query testing**: Ask ChatGPT, Gemini, and Perplexity direct questions about your business category in your market and track whether your entity appears.

2. **Entity match scoring**: Audit your structured data, citation consistency, and schema completeness against a defined entity confidence model.

3. **Citation velocity tracking**: Monitor the rate at which new authoritative sources cite your entity.

4. **AI Overview monitoring**: Use Google Search Console to identify queries triggering AI Overviews and track your inclusion rate.

## What to Do Next

If your business isn't appearing in AI recommendations today, the gap is almost certainly infrastructure—not content quality or website traffic.

The foundational steps:
- Audit your NAP consistency across all citation sources
- Implement complete JSON-LD schema on your website
- Restructure key content pages as AI-extractable answer units
- Build authoritative citations in your vertical's key directories

This is what RapidSEED AI does systematically—across all eight infrastructure layers—in a structured 60-day deployment.
    `.trim(),
    author: "RapidSEED AI Team",
    published: true,
    tags: ["AI SEO", "AI Visibility", "Basics"],
    reading_time: 8,
    published_at: "2024-11-15T00:00:00Z",
    created_at: "2024-11-15T00:00:00Z",
    updated_at: "2024-11-15T00:00:00Z",
    meta_title: "What Is AI Search Visibility and Why Your Business Needs It",
    meta_description: "AI systems now answer business questions directly—recommending entities they trust instead of linking to websites. Here's what AI search visibility means and how to measure it.",
  },
];

function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.meta_title ?? post.title,
    description: post.meta_description ?? post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.meta_title ?? post.title,
      description: post.meta_description ?? post.excerpt,
      publishedTime: post.published_at,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: post.title, url: `${SITE_URL}/blog/${slug}` },
    ]),
    buildArticleSchema(post),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="bg-navy-900 pt-16">
        <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-white/40 hover:text-white transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Insights
            </Link>

            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="white">{tag}</Badge>
              ))}
            </div>

            <h1 className="font-display text-4xl font-black leading-tight text-white lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>{post.author}</span>
              <span>·</span>
              {post.published_at && (
                <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
              )}
              {post.reading_time && (
                <>
                  <span>·</span>
                  <span>{post.reading_time} min read</span>
                </>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-emerald max-w-none">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-12 mb-4 font-display text-2xl font-black text-white">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return <p key={i} className="font-semibold text-white/80">{block.replace(/\*\*/g, "")}</p>;
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="my-4 space-y-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/70">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Parse inline bold
              const parts = block.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="my-4 leading-relaxed text-white/70">
                  {parts.map((part, j) =>
                    part.startsWith("**") ? (
                      <strong key={j} className="font-semibold text-white/90">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
            <h2 className="mb-2 font-display text-2xl font-black text-white">
              Ready to Own Your AI Visibility?
            </h2>
            <p className="mb-6 text-white/60">
              Get a free audit of your current AI discovery footprint.
            </p>
            <Link
              href="/ai-visibility-audit"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400 transition-colors"
            >
              Request Free Audit →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
