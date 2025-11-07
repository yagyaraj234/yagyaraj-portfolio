// app/blog/layout.tsx
import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
// If using Tailwind + typography, ensure plugin installed and configured:
// className="prose dark:prose-invert prose-headings:mt-8"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl ">
      <Header />
      <main className="prose dark:prose-invert min-h-[calc(100vh-128px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
