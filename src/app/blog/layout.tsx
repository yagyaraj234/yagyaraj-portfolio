// app/blog/layout.tsx
import React from "react";
// If using Tailwind + typography, ensure plugin installed and configured:
// className="prose dark:prose-invert prose-headings:mt-8"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-sm text-muted-foreground">
          Thoughts, notes, and guides.
        </p>
      </header>
      <main className="prose dark:prose-invert">{children}</main>
    </div>
  );
}
