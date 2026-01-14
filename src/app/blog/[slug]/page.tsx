import { blogData } from "./data";
import { USER } from "@/data/user.data";
import { getPostMetadata } from "@/lib/mdx-utils";
import { Metadata } from "next";
import {
  PostTitle,
  PostDescription,
  PostUpdatedText,
} from "@/app/components/Post";
import { Callout } from "@/app/components/mdx/callout";
import { Aside } from "@/app/components/mdx/aside";
import { Annotation } from "@/app/components/mdx/annotation";
import { Columns, ColumnRight } from "@/app/components/mdx/columns";
import { Note, InlineNote } from "@/app/components/mdx/note";

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

  const {
    title,
    summary,
    author = "Yagyaraj",
    tags = [],
    ogImage = "",
  } = postMetadata;
  const ogImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${USER.website}${ogImage}`
    : `${USER.website}/api/og/blog/${slug}`;

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
    <div className="font-sans mt-8 ">
      <PostTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 max-sm:text-4xl"
      >
        {postMetadata?.title}
      </PostTitle>

      {/* <PostDescription className="mb-4 text-lg ">
        {postMetadata?.summary}
      </PostDescription> */}

      <div className="flex flex-col text-sm font-normal text-zinc-400 mb-12">
        <PostUpdatedText>Published on {publishDate}</PostUpdatedText>
      </div>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <Post
          components={{
            Callout,
            Aside,
            Annotation,
            Columns,
            ColumnRight,
            Note,
            InlineNote,
          }}
        />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return blogData.map((slug) => ({ slug }));
}

export const dynamicParams = false;
