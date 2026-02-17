import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Shantell_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/components/theme-provider";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/app/components/footer";
import { USER } from "@/data/user.data";
import localFont from "next/font/local";

// Font settings
const outfit = Outfit({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Defines a CSS variable named --font-inter
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const handwriting = Shantell_Sans({
  weight: ["500"],
  variable: "--font-handwriting",
  subsets: ["latin"],
});

const sans = localFont({
  src: [
    {
      path: "./fonts/sans/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sans/regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/sans/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sans/bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/sans/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sans/medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/sans/semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sans/semibold-italic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-sans",
});

const serif = localFont({
  src: [
    {
      path: "./fonts/pp-editorial-new/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/pp-editorial-new/bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
});

// Page metadata
const siteTitle = `${USER.displayName} | ${USER.jobTitle}`;
const siteDescription = USER.bio;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(USER.website),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: USER.website,
    siteName: `${USER.displayName} Portfolio`,
    images: [
      {
        url: USER.ogImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: `@${USER.username}`,
    images: [USER.ogImage],
  },
  alternates: {
    canonical: USER.website,
  },
  keywords: USER.keywords,
  other: {
    "article:modified_time": USER.lastUpdated,
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <ReactLenis root>
        <body
          className={cn(
            handwriting.variable,
            serif.variable,
            sans.variable,
            outfit.className,
            inter.variable,
            jetbrainsMono.variable,
            "antialiased min-h-screen relative scrollbar-thin bg-white dark:bg-[#121212] dark:text-white text-black selection:bg-zinc-700 selection:text-white dark:selection:bg-zinc-700 overflow-x-hidden",
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: `${USER.displayName} Portfolio`,
                  url: USER.website,
                  description: USER.bio,
                  author: {
                    "@type": "Person",
                    name: `${USER.firstName} ${USER.lastName}`,
                    url: USER.website,
                    jobTitle: USER.jobTitle,
                    image: `${USER.website}${USER.avatar}`,
                    sameAs: [
                      `https://github.com/${USER.username}`,
                      `https://linkedin.com/in/${USER.username}`,
                      `https://x.com/${USER.username}`,
                    ],
                  },
                  dateCreated: USER.dateCreated,
                  dateModified: USER.lastUpdated,
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${USER.website}/blog?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                }),
              }}
            />
            <div className="mx-auto max-w-3xl min-h-screen flex flex-col px-4 sm:px-6 lg:px-0">
              {children}
              <Footer />
            </div>
          </ThemeProvider>
          <Analytics />
        </body>
      </ReactLenis>
    </html>
  );
}
