import { Suspense } from "react";
import PostList from "./_components/post-list";
import { readPosts } from "@/lib/blog.utils";
import { USER } from "@/data/user.data";

export const dynamic = "force-static";

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
};

export default async function BlogIndexPage() {
  const posts = await readPosts();

  return (
    <div className="mt-4 flex-1">
      <div className="text-2xl font-semibold mb-12 underline decoration-wavy decoration-blue-500 underline-offset-4">
        Writing. 👻
      </div>

      <Suspense fallback={<div className="text-gray-500">Loading posts...</div>}>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
}
