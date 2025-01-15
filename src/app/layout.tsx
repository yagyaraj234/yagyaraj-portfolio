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
  title: "Yagyaraj's Portfolio",
  description: "Yagyaraj's Portfolio",
  icons: {
    icon: "/notion.png",
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
