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
      className="prose dark:prose-invert min-h-[calc(100vh-128px)] py-4 sm:min-w-3xl"
      role="main"
    >
      <div className="mt-4 flex-1 sm:min-w-3xl">
        <div className="mb-12 text-2xl font-semibold underline decoration-blue-500 decoration-wavy underline-offset-4">
          Writing. 👻
        </div>

        <Suspense
          fallback={<div className="text-gray-500">Loading posts...</div>}
        >
          <PostList posts={posts} />
        </Suspense>
      </div>
    </main>
  )
}
