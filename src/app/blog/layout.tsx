// app/blog/layout.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
// If using Tailwind + typography, ensure plugin installed and configured:
// className="prose dark:prose-invert prose-headings:mt-8"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link href="/">
            <Image
              src="/notion.png"
              height={24}
              width={24}
              sizes="(max-width: 768px) 64px, 96px"
              alt="user"
              className="rounded-full hover:transition-transform scale-110 hover:scale-125 duration-300 ease-in-out cursor-pointer bg-slate-500"
            />
          </Link>
          <Link href={"/blog"}>Yagyaraj.</Link>
        </div>
        <Navbar />
      </div>
      <main className="prose dark:prose-invert min-h-[calc(100vh-128px)] py-6">
        {children}
      </main>
    </>
  );
}
