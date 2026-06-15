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
      className="prose dark:prose-invert min-h-[calc(100vh-128px)] w-full max-w-none"
      role="main"
    >
      <div className="w-full">
        <h1 className="hero-name">
          Writings
          <br />
          <em className="font-instrumentSerif text-muted text-3xl sm:text-4xl">
            Written to <span style={{ color: "#1D6FA4" }}>Remember.</span>
          </em>
        </h1>

        <Suspense
          fallback={<div className="text-gray-500">Loading posts...</div>}
        >
          <PostList posts={posts} />
        </Suspense>
      </div>
    </main>
  )
}
