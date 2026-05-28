import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@rapidseed/ui",
    "@rapidseed/lib",
    "@rapidseed/schema",
    "@rapidseed/seo",
    "@rapidseed/analytics",
    "@rapidseed/types",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "TODO_SUPABASE_STORAGE_HOST" },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
