import { blogData } from "./data";
import { USER } from "@/data/user.data";
import { getPostMetadata } from "@/lib/mdx-utils";
import { getAllPostSlugs } from "@/lib/blog.utils";
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

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

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

  const postMetadataFull = getPostMetadata(slug);
  const lastUpdated = postMetadataFull?.lastUpdated;

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
      ...(postMetadata.date && { publishedTime: postMetadata.date }),
      ...(lastUpdated && { modifiedTime: lastUpdated }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Yagyaraj`,
      description: summary || `${title} - Blog post by ${author}`,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${USER.website}/blog/${slug}`,
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

  const lastUpdatedDate = postMetadata?.lastUpdated
    ? new Date(postMetadata.lastUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <header className="flex flex-col gap-4">
        <PostTitle>{postMetadata?.title || ""}</PostTitle>
        <div className="flex flex-col gap-2">
          <PostDescription>{postMetadata?.summary || ""}</PostDescription>
          <div className="flex gap-4 items-center text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={postMetadata?.date}>{publishDate}</time>
            {lastUpdatedDate && (
              <>
                <span>•</span>
                <PostUpdatedText>Updated {lastUpdatedDate}</PostUpdatedText>
              </>
            )}
            {postMetadata?.author && (
              <>
                <span>•</span>
                <span>{postMetadata.author}</span>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
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
      </div>
    </article>
  );
}
