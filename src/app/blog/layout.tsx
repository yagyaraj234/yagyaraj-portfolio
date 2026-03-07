// app/blog/layout.tsx
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "../components/navbar"
import { Metadata } from "next"
import { userBlog } from "./constant"

export const metadata: Metadata = {
  title: "Blog",
  description: "Yagyaraj Lodhi's Blog",
  openGraph: {
    title: userBlog.siteTitle,
    description: userBlog.siteDescription,
    url: userBlog.website,
    siteName: `${userBlog.displayName} Portfolio`,
    images: [
      {
        url: userBlog.ogImage,
        width: 1200,
        height: 630,
        alt: userBlog.siteTitle,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: userBlog.siteTitle,
    description: userBlog.siteDescription,
    creator: `@${userBlog.username}`,
    images: [userBlog.ogImage],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex items-end justify-between pb-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="max-sm:hidden">
            <Image
              src="/notion.webp"
              height={40}
              width={40}
              sizes="(max-width: 768px) 80px, 96px"
              alt="user"
              className="scale-110 cursor-pointer rounded-full bg-slate-500 duration-300 ease-in-out hover:scale-125 hover:transition-transform"
            />
          </Link>
          <Link href={"/blog"} className="text-md">
            Yagyaraj.
          </Link>
        </div>
        <Navbar />
      </div>
      <main
        className="prose dark:prose-invert min-h-[calc(100vh-128px)] py-6"
        role="main"
      >
        {children}
      </main>
    </>
  )
}
