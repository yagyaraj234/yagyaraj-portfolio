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
    <div className="group reveal">
      <Link
        href={props.url}
        className="flex w-full cursor-pointer items-start justify-between gap-4 py-3 text-left"
      >
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-base font-medium text-(--color-text-primary) transition-colors group-hover:text-[#1D6FA4] dark:group-hover:text-[#5BA8D6]">
              {props.title}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {props.date && (
            <span className="text-[13px] text-(--color-text-tertiary) tabular-nums">
              {props.date}
            </span>
          )}
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 text-(--color-text-tertiary) transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
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
    return d.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    })
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
