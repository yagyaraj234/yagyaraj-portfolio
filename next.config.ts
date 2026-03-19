import { NextConfig } from "next"
import createMDX from "@next/mdx"

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
export default withBundleAnalyzer(withMDX(nextConfig))
