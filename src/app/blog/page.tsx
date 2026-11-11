import { Suspense } from "react"
import { Rss } from "lucide-react"
import PostList from "./_components/post-list"
import { readPosts } from "@/lib/blog.utils"
import { PageHero } from "@/app/components/ui/page-hero"

export const dynamic = "force-static"

export const metadata = {
  title: "Blog | Yagyaraj",
  description:
    "Thoughts on software engineering, web development, and building products.",
  openGraph: {
    title: "Blog | Yagyaraj",
    description:
      "Thoughts on software engineering, web development, and building products.",
    url: "https://yagyaraj.com/blog",
    siteName: "Yagyaraj",
    images: [
      {
        url: "https://yagyaraj.com/api/og", // Default site OG or specific blog OG
        width: 1200,
        height: 630,
        alt: "Blog | Yagyaraj",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default async function BlogIndexPage() {
  const posts = await readPosts()

  return (
    <main
      className="prose dark:prose-invert min-h-[calc(100vh-128px)] w-full max-w-none"
      role="main"
    >
      <div className="w-full">
        <PageHero
          title="Writings"
          subtitle="Notes on React, Next.js and the web, written to remember."
        >
          <a
            href="/rss.xml"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-[#1D6FA4] px-4 text-sm font-medium text-white no-underline hover:bg-[#185f8c]"
          >
            <Rss aria-hidden="true" className="size-4" />
            Subscribe via RSS
          </a>
        </PageHero>

        <Suspense
          fallback={<div className="text-gray-500">Loading posts...</div>}
        >
          <PostList posts={posts} />
        </Suspense>
      </div>
    </main>
  )
}
