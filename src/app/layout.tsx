import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/components/theme-provider";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/app/components/footer";
// Font settings
const outfit = Outfit({
  subsets: ["latin"],
});

// Page metadata
export const metadata: Metadata = {
  title: "Yagyaraj | Full-Stack Developer",
  description:
    "Passionate full-stack developer building elegant, performant solutions using React, Node.js, Firebase, and more.",
  metadataBase: new URL("https://yagyaraj.com"),
  openGraph: {
    title: "Yagyaraj | Full-Stack Developer",
    description:
      "Passionate full-stack developer building elegant, performant solutions using React, Node.js, Firebase, and more.",
    url: "https://yagyaraj.com",
    siteName: "Yagyaraj Portfolio",
    images: [
      {
        url: "https://yagyaraj.com/api/og",
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
      "Passionate full-stack developer building elegant, performant solutions using React, Node.js, Firebase, and more.",
    creator: "@yagyaraj234",
    images: ["https://yagyaraj.com/api/og"],
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
            "antialiased min-h-screen  scrollbar-thin bg-white dark:bg-[#121212]  dark:text-white text-black mx-auto max-w-3xl p-4 selection:bg-zinc-700 selection:text-white dark:selection:bg-zinc-700"
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />
        </body>
      </ReactLenis>
    </html>
  );
}
