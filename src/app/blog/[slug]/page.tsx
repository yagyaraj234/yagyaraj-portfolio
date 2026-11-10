import { blogData } from "./data"
import { USER } from "@/data/user.data"
import { getPostMetadata } from "@/lib/mdx-utils"
import { Metadata } from "next"
import { PostTitle, PostUpdatedText } from "@/app/components/Post"
import { Callout } from "@/app/components/mdx/callout"
import { FAQ } from "@/app/components/mdx/faq"
import { Aside } from "@/app/components/mdx/aside"
import { Annotation } from "@/app/components/mdx/annotation"
import { Columns, ColumnRight } from "@/app/components/mdx/columns"
import { Note, InlineNote } from "@/app/components/mdx/note"
import { social_links } from "@/app/components/static-content"
import Link from "next/link"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const postMetadata = getPostMetadata(slug)

  if (!postMetadata) {
    return {
      title: "Post not found",
    }
  }

  const {
    title,
    summary,
    author = "Yagyaraj",
    tags = [],
    ogImage = "",
  } = postMetadata
  const ogImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${USER.website}${ogImage}`
    : `${USER.website}/api/og/blog/${slug}`

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
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  const postMetadata = getPostMetadata(slug)
  const publishDate = postMetadata?.date
    ? new Date(postMetadata.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date().toLocaleDateString()

  return (
    <div className="mt-8 font-sans">
      <PostTitle
        initial={{ opacity: 0, transform: "translateY(8px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="mb-4 text-balance max-sm:text-[1.75rem]!"
      >
        {postMetadata?.title}
      </PostTitle>

      {/* <PostDescription className="mb-4 text-lg ">
        {postMetadata?.summary}
      </PostDescription> */}

      <div className="mb-12 flex flex-col">
        <PostUpdatedText>Published on {publishDate}</PostUpdatedText>
      </div>

      <article className="prose prose-zinc dark:prose-invert max-w-none [&>blockquote]:max-w-[68ch] [&>ol]:max-w-[68ch] [&>p]:max-w-[68ch] [&>ul]:max-w-[68ch]">
        <Post
          components={{
            Callout,
            FAQ,
            Aside,
            Annotation,
            Columns,
            ColumnRight,
            Note,
            InlineNote,
          }}
        />
      </article>

      <div className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-2">
        {social_links?.slice(0, 4).map((link, idx) => (
          <Link
            key={idx}
            className="text-[#1D6FA4] decoration-wavy underline-offset-4 hover:underline dark:text-[#5BA8D6]"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return blogData.map((slug) => ({ slug }))
}

export const dynamicParams = false
