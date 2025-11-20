import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/components/theme-provider";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/app/components/footer";
import { USER } from "@/data/user.data";

// Font settings
const outfit = Outfit({
  subsets: ["latin"],
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
            "antialiased min-h-screen relative scrollbar-thin bg-white dark:bg-[#121212]  dark:text-white text-black mx-auto max-w-3xl p-4 selection:bg-zinc-700 selection:text-white dark:selection:bg-zinc-700"
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
