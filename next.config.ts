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
      "motion", // Optimizes the new 'motion' (formerly framer-motion) package
      "@radix-ui/react-tooltip", // Optimizes Radix primitive barrel files
      "@stitches/react", // Helps with Stitches' internal module resolution
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

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
