import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/theme-provider";
import { ReactLenis } from "lenis/react";

// Font settings
const outfit = Outfit({
  subsets: ["latin"],
});

// Page metadata
export const metadata: Metadata = {
  title: "Yagyaraj | Full-Stack Developer",
  description:
    "Portfolio of Yagyaraj — Full-stack software engineer from India. Explore my journey, projects, skills, and contact details.",
  metadataBase: new URL("https://yagyaraj.com"),
  openGraph: {
    title: "Yagyaraj | Full-Stack Developer",
    description:
      "Passionate full-stack developer building elegant, performant solutions using React, Node.js, Firebase, and more.",
    url: "https://yagyaraj.com",
    siteName: "Yagyaraj Portfolio",
    images: [
      {
        url: "/api/og", // Make sure this image exists in /public
        width: 1200,
        height: 630,
        alt: "Yagyaraj | Full-Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yagyaraj | Full-Stack Developer",
    description:
      "Explore Yagyaraj's work as a full-stack developer from India. Projects, experience, and tech skills.",
    creator: "@yagyaraj234",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "https://yagyaraj.com",
  },
  keywords: [
    "Yagyaraj",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Software Engineer India",
    "Firebase Developer",
    "GCP Projects",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />

      </head>
      <ReactLenis root>
        <body
          className={cn(
            outfit.className,
            "antialiased min-h-screen  scrollbar-thin bg-white dark:bg-[#121212] lowercase dark:text-white text-black mx-auto max-w-3xl p-4"
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
