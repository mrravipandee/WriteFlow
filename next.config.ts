// next.config.js or next.config.ts (for TypeScript projects)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
};

export default nextConfig;
