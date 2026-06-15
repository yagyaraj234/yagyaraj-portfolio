"use client"

import Link from "next/link"
import { useQueryState, parseAsString } from "nuqs"
import { PostIndexItem } from "@/types/blog.types"
import Search from "./search"
import { cn } from "@/lib/utils"
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react"
import { POPULAR_TAGS } from "@/lib/blog.constants"

export default function PostList({ posts }: { posts: PostIndexItem[] }) {
  const [search] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({ shallow: true })
  )
  const [selectedTag, setSelectedTag] = useQueryState(
    "tag",
    parseAsString.withDefault("").withOptions({ shallow: true })
  )
  const [sortOrder, setSortOrder] = useQueryState(
    "sort",
    parseAsString.withDefault("desc").withOptions({ shallow: true })
  )

  const filteredPosts = posts.filter((post) => {
    const term = search.toLowerCase()
    const matchesSearch =
      post.metadata.title.toLowerCase().includes(term) ||
      post.metadata.summary?.toLowerCase().includes(term)

    const matchesTag = selectedTag
      ? post.metadata.tags?.includes(selectedTag)
      : true

    return matchesSearch && matchesTag
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date).getTime() : 0
    const dateB = b.metadata.date ? new Date(b.metadata.date).getTime() : 0

    if (sortOrder === "asc") {
      return dateA - dateB
    }
    return dateB - dateA
  })

  const toggleTag = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null)
    } else {
      setSelectedTag(tag)
    }
  }

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  return (
    <>
      <Search />

      {/* Popular Tags Filter & Sort */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              aria-pressed={selectedTag === tag}
              className={cn(
                "font-dm-mono rounded-full border px-3 py-1 text-xs transition-colors",
                selectedTag === tag
                  ? "border-(--color-text-primary) bg-(--color-text-primary) text-(--background)"
                  : "border-(--color-border) text-(--color-text-secondary) hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
              )}
            >
              #{tag}
            </button>
          ))}
        </div>

        <button
          onClick={toggleSort}
          className="font-dm-mono flex shrink-0 items-center gap-2 rounded-lg border border-(--color-border) px-3 py-1 text-xs whitespace-nowrap text-(--color-text-secondary) transition-colors hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
          title={`Sort by date ${sortOrder === "asc" ? "ascending" : "descending"}`}
        >
          {sortOrder === "asc" ? (
            <>
              <ArrowUpWideNarrow className="h-4 w-4" />
              <span>Oldest First</span>
            </>
          ) : (
            <>
              <ArrowDownWideNarrow className="h-4 w-4" />
              <span>Newest First</span>
            </>
          )}
        </button>
      </div>

      {sortedPosts.length === 0 ? (
        <p className="text-(--color-text-secondary)">
          No posts found matching “{search}”
          {selectedTag && <span> with tag “#{selectedTag}”</span>}.
        </p>
      ) : (
        <ul className="not-prose flex flex-col">
          {sortedPosts.map(({ slug, metadata, readingTime }) => (
            <li
              key={slug}
              className="group border-t border-(--color-border) first:border-t-0"
            >
              <Link
                href={`/blog/${slug}`}
                prefetch={false}
                className="block py-5 transition-opacity"
              >
                <h2 className="text-lg font-semibold tracking-tight text-(--color-text-primary) transition-colors group-hover:text-[#1D6FA4] dark:group-hover:text-[#5BA8D6]">
                  {metadata.title}
                </h2>

                {metadata.summary ? (
                  <p className="mt-1.5 text-sm leading-relaxed text-(--color-text-secondary)">
                    {metadata.summary}
                  </p>
                ) : null}

                {/* published date + read time */}
                <div className="font-dm-mono mt-2.5 flex flex-wrap items-center gap-x-2 text-xs text-(--color-text-tertiary)">
                  {metadata.date && (
                    <time dateTime={metadata.date} className="tabular-nums">
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC",
                      }).format(new Date(metadata.date))}
                    </time>
                  )}
                  {metadata.date && readingTime && (
                    <span className="h-1 w-1 rounded-full bg-(--color-text-tertiary)" />
                  )}
                  {readingTime && <span>{readingTime}</span>}
                </div>
              </Link>

              {metadata.tags && metadata.tags.length > 0 && (
                <div className="-mt-1 flex hidden flex-wrap gap-2 pb-5">
                  {metadata.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      aria-pressed={selectedTag === tag}
                      className={cn(
                        "font-dm-mono text-xs transition-colors hover:text-(--color-text-primary)",
                        selectedTag === tag
                          ? "font-medium text-(--color-text-primary)"
                          : "text-(--color-text-tertiary)"
                      )}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
