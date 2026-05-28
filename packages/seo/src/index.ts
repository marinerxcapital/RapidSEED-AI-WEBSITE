import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@rapidseed/lib";

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata(meta: PageMeta) {
  const fullTitle = meta.title === SITE_NAME ? meta.title : `${meta.title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${meta.path}`;
  const ogImage = meta.image ?? `${SITE_URL}/og-image.png`;

  return {
    title: fullTitle,
    description: meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: canonicalUrl },
    robots: meta.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: fullTitle,
      description: meta.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: meta.description,
      images: [ogImage],
      creator: "@TODO_TWITTER_HANDLE",
      site: "@TODO_TWITTER_HANDLE",
    },
  };
}

export function buildArticleMetadata(meta: PageMeta & { publishedAt: string; authorName: string }) {
  const base = buildMetadata(meta);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article" as const,
      publishedTime: meta.publishedAt,
      authors: [meta.authorName],
    },
  };
}
