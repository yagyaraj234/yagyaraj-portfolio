import { NextConfig } from "next"
import createMDX from "@next/mdx"
const runtimeCaching = require("next-pwa/cache")

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: true,
  cacheStartUrl: true,
  dynamicStartUrl: false,
  runtimeCaching,
  fallbacks: {
    document: "/offline",
  },
})

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  experimental: {
    cssChunking: true,
    optimizeCss: true,
    optimizePackageImports: [
      "@radix-ui/react-tooltip", // Optimizes Radix primitive barrel files
      "shiki",
    ],
  },
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "performance.shopify.com",
      },
      {
        protocol: "https",
        hostname: "developer.chrome.com",
      },
      {
        protocol: "https",
        hostname: "cf-assets.www.cloudflare.com",
      },
    ],
  },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

// Merge MDX config with Next.js config
export default withBundleAnalyzer(withPWA(withMDX(nextConfig)))
