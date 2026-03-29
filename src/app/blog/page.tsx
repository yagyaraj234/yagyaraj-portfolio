import { Suspense } from "react"
import PostList from "./_components/post-list"
import { readPosts } from "@/lib/blog.utils"
import { USER } from "@/data/user.data"

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
      className="prose dark:prose-invert min-h-[calc(100vh-128px)] sm:min-w-3xl"
      role="main"
    >
      <div className="flex-1 sm:min-w-3xl">
        <h1 className="hero-name">
          Writings
          <br />
          <em className="font-dm-mono text-muted text-3xl">
            Written to Remember.
          </em>
        </h1>

        {/* <p className="max-w-lg text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          Writing about frontend engineering, performance, and the occasional
          rabbit hole I fell into building things.
        </p> */}

        <Suspense
          fallback={<div className="text-gray-500">Loading posts...</div>}
        >
          <PostList posts={posts} />
        </Suspense>
      </div>
    </main>
  )
}
