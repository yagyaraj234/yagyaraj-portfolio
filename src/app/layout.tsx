import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/theme-provider";
import { ReactLenis } from "lenis/react";
import { siteConfig } from "@/lib/site";

// Font settings
const outfit = Outfit({
  subsets: ["latin"],
});

// Page metadata
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/notion.png",
    shortcut: "/notion.png",
  },
  keywords: [
    "yagyaraj",
    "portfolio",
    "software engineer",
    "full-stack developer",
    "react",
    "next.js",
    "tailwindcss",
    "supabase",
    "ai engineer",
  ],
  authors: [
    {
      name: "Yagyaraj Lodhi",
      url: "https://yagyaraj.com",
    },
  ],
  creator: "Yagyaraj Lodhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    creator: "@yagyaraj234",
    site: "@yagyaraj234",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={cn(
            outfit.className,
            "antialiased min-h-screen scrollbar-none scrollbar bg-white dark:bg-[#121212] lowercase dark:text-white text-black mx-auto max-w-3xl px-4 py-2"
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
