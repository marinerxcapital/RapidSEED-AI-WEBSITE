import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@rapidseed/ui", "@rapidseed/lib", "@rapidseed/types"],
};

export default nextConfig;
