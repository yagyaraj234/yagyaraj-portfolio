import { blogData } from "./data";
import { getPostMetadata } from "@/lib/mdx-utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postMetadata = getPostMetadata(slug);

  if (!postMetadata) {
    return {
      title: "Post not found",
    };
  }

  const { title, summary, author = "Yagyaraj", tags = [] } = postMetadata;
  const ogImageUrl = `/api/og/blog/${slug}`;

  return {
    title: `${title} | Yagyaraj`,
    description: summary || `${title} - Blog post by ${author}`,
    authors: [{ name: author }],
    keywords: tags,
    openGraph: {
      title: `${title} | Yagyaraj`,
      description: summary || `${title} - Blog post by ${author}`,
      url: `/blog/${slug}`,
      siteName: "Yagyaraj",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Yagyaraj`,
      description: summary || `${title} - Blog post by ${author}`,
      images: [ogImageUrl],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  const postMetadata = getPostMetadata(slug);
  const publishDate = postMetadata?.date
    ? new Date(postMetadata.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date().toLocaleDateString();

  return (
    <>
      <Post />

      <div className="flex flex-col text-sm font-normal text-zinc-400 mt-4">
        <p>Written by {postMetadata?.author || "Yagyaraj"}</p>
        <p>Published on {publishDate}</p>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return blogData.map((slug) => ({ slug }));
}

export const dynamicParams = false;
