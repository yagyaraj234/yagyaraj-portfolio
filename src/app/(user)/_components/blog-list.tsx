import Link from "next/link"
import { readPosts } from "@/lib/blog.utils"
import { ArrowUpRight } from "lucide-react"

type BlogItemProps = {
  title: string
  url: string
  date?: string
  summary?: string
}

function BlogItem(props: BlogItemProps) {
  return (
    <div className="group border-t border-(--color-border) transition-colors first:border-t-0 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20">
      <Link
        href={props.url}
        className="flex w-full cursor-pointer items-start justify-between gap-4 py-3.5 text-left"
      >
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-sm font-medium text-zinc-900 transition-colors group-hover:opacity-80 dark:text-zinc-100">
              {props.title}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {props.date && (
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400 upper capitalize ">
              {props.date}
            </span>
          )}
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-400" />
        </div>
      </Link>
    </div>
  )
}

export default async function BlogList() {
  const posts = await readPosts()

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return undefined
    const d = new Date(dateStr)
    return d
      .toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
      .toLowerCase()
  }

  return (
    <div className="flex w-full flex-col">
      {posts?.slice(0, 3)?.map((pt) => (
        <BlogItem
          key={pt.slug}
          title={pt.metadata.title}
          url={`/blog/${pt.slug}`}
          date={formatDate(pt.metadata.date)}
          summary={pt.metadata.summary}
        />
      ))}
    </div>
  )
}
