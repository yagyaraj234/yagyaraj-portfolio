import type { Metadata } from "next"
import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowDown, ExternalLink } from "lucide-react"
import { Heading } from "@/app/components/mdx/heading"
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
    <Heading
      level="h2"
      className="mt-12 mb-4 font-serif text-3xl leading-tight font-medium text-zinc-950 dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      level="h3"
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
      className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
      {...props}
    />
  ),
  pre: ({ children, ...props }) => {
    const code = getNodeText(children).trim()

    return (
      <div className="my-5 overflow-hidden rounded-xl bg-[#fafafa] dark:bg-[#171717]">
        <div className="flex items-center justify-between px-4 pt-2">
          <span className="text-[13px] text-(--color-text-tertiary)">
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
        <h1 className="font-serif text-[2rem] leading-[1.08] font-medium text-balance text-zinc-950 sm:text-[2.75rem] dark:text-white">
          {metadata.title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {metadata.description}
        </p>

        <p className="mt-3 text-[13px] text-(--color-text-tertiary)">
          {["Learning list", publishedDate, readTime]
            .filter(Boolean)
            .join(" · ")}
        </p>

        {metadata.tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
            {metadata.tags.map((tag: string) => (
              <li
                key={tag}
                className="rounded-md bg-(--color-bg-secondary) px-2 py-0.5 text-[13px] text-(--color-text-secondary)"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        {linkedinUrl || videoUrl ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {videoUrl ? (
              <a
                href="#walkthrough"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#1D6FA4] px-4 text-sm font-medium text-white transition-colors duration-150 ease-out hover:bg-[#185f8c]"
              >
                Watch the build
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            ) : null}
            {linkedinUrl ? (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-(--color-bg-secondary) px-4 text-sm font-medium text-(--color-text-primary) transition-colors duration-150 ease-out hover:bg-black/[0.08] dark:hover:bg-white/[0.1]"
              >
                LinkedIn source
                <ExternalLink className="size-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </header>

      {videoUrl ? (
        <video
          id="walkthrough"
          className="mt-4 aspect-video w-full scroll-mt-8 rounded-xl bg-black object-cover"
          controls
          muted
          playsInline
          preload="metadata"
          poster={metadata.ogImage}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
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
