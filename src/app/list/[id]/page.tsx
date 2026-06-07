import type { Metadata } from "next"
import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ExternalLink, FileText, Timer } from "lucide-react"
import { CopyButton } from "@/app/components/mdx/copy-button"
import { USER } from "@/data/user.data"
import {
  formatListDate,
  getAllListIds,
  getListItemMetadata,
  getListItemReadTime,
} from "@/lib/list.utils"
import { cn } from "@/lib/utils"
import type { ListMarkdownModule } from "@/types/list.types"

interface ListPageProps {
  params: Promise<{
    id: string
  }>
}

async function loadListItem(id: string): Promise<ListMarkdownModule | null> {
  try {
    return (await import(`@/list-content/${id}.md`)) as ListMarkdownModule
  } catch {
    return null
  }
}

const markdownComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 mb-4 font-serif text-3xl leading-tight font-medium text-zinc-950 dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-zinc-950 dark:text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="my-4 text-base leading-7 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="my-5 ml-5 list-disc space-y-2 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 ml-5 list-decimal space-y-2 text-zinc-700 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1 leading-7" {...props} />,
  a: ({ className, ...props }) => (
    <a
      className={cn(
        "text-blue-600 underline decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-700 dark:text-blue-300 dark:hover:text-blue-200",
        className
      )}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noreferrer" : undefined}
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
      {...props}
    />
  ),
  pre: ({ children, ...props }) => {
    const code = getNodeText(children).trim()

    return (
      <div className="my-5 overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex items-center justify-between border-b border-zinc-200 px-3 py-2 dark:border-zinc-800">
          <span className="text-xs font-medium tracking-[0.12em] text-zinc-500 uppercase dark:text-zinc-400">
            Prompt
          </span>
          <CopyButton content={code} label="Copy prompt" />
        </div>
        <pre
          className="overflow-x-auto p-4 text-sm leading-6 text-zinc-900 dark:text-zinc-100"
          {...props}
        >
          {children}
        </pre>
      </div>
    )
  },
}

function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join("")
  }

  if (node && typeof node === "object" && "props" in node) {
    const props = node.props as { children?: ReactNode }
    return getNodeText(props.children)
  }

  return ""
}

export async function generateMetadata({
  params,
}: ListPageProps): Promise<Metadata> {
  const { id } = await params
  const metadata = getListItemMetadata(id)

  if (!metadata) {
    return {
      title: "List item not found",
    }
  }

  const ogImageUrl = metadata.ogImage
    ? new URL(metadata.ogImage, USER.website).toString()
    : `${USER.website}/api/og/list/${id}`

  return {
    title: `${metadata.title} | Yagyaraj`,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${USER.website}/list/${id}`,
      siteName: "Yagyaraj",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Animated landing page example with a Vantage hero and wearable focus device",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [ogImageUrl],
    },
  }
}

export default async function ListItemPage({ params }: ListPageProps) {
  const { id } = await params
  const listItem = await loadListItem(id)
  const metadata = getListItemMetadata(id)

  if (!listItem || !metadata) {
    notFound()
  }

  const { default: Content } = listItem
  const publishedDate = formatListDate(metadata.date)
  const readTime = getListItemReadTime(id)
  const linkedinUrl = metadata.linkedinUrl
  const videoUrl = metadata.videoUrl

  return (
    <main className="min-h-[calc(100vh-128px)] pb-12 font-sans">
      <header className="py-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
          <span>Learning List</span>
          {publishedDate ? <span>{publishedDate}</span> : null}
          {readTime ? <span>{readTime}</span> : null}
        </div>

        <h1 className="font-serif text-5xl leading-[1.02] font-medium text-zinc-950 sm:text-6xl dark:text-white">
          {metadata.title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {metadata.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {linkedinUrl ? (
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              LinkedIn source
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
          <div className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Markdown guide
          </div>
          {readTime ? (
            <div className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
              <Timer className="h-4 w-4" aria-hidden="true" />
              {readTime}
            </div>
          ) : null}
        </div>
      </header>

      {videoUrl ? (
        <video
          className="mt-8 aspect-video w-full rounded-md border border-zinc-200 bg-black object-cover dark:border-zinc-800"
          controls
          muted
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : null}

      {metadata.tags?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {metadata.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      ) : null}

      <article className="mt-10">
        <Content components={markdownComponents} />
      </article>
    </main>
  )
}

export function generateStaticParams(): Array<{ id: string }> {
  return getAllListIds().map((id: string) => ({ id }))
}

export const dynamicParams = false
