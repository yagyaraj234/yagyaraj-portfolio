"use client"

import Image from "next/image"
import Link from "next/link"
import { useQueryState, parseAsString } from "nuqs"
import { PostIndexItem } from "@/types/blog.types"
import Search from "./search"
import { cn } from "@/lib/utils"
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react"
import { POPULAR_TAGS } from "@/lib/blog.constants"

export default function PostList({ posts }: { posts: PostIndexItem[] }) {
  const [search, setSearch] = useQueryState(
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
                "h-8 rounded-full px-3 text-[13px] active:scale-[0.97]",
                selectedTag === tag
                  ? "bg-(--color-text-primary) text-(--background)"
                  : "bg-black/[0.045] text-(--color-text-secondary) hover:bg-black/[0.08] hover:text-(--color-text-primary) dark:bg-white/[0.07] dark:hover:bg-white/[0.11]"
              )}
            >
              #{tag}
            </button>
          ))}
        </div>

        <button
          onClick={toggleSort}
          className="flex h-8 shrink-0 items-center gap-2 rounded-lg px-3 text-[13px] whitespace-nowrap text-(--color-text-secondary) hover:bg-black/[0.05] hover:text-(--color-text-primary) dark:hover:bg-white/[0.08]"
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

      <p
        role="status"
        className="mb-3 text-[13px] text-(--color-text-tertiary)"
      >
        {sortedPosts.length} {sortedPosts.length === 1 ? "post" : "posts"}
        {(search || selectedTag) && (
          <button
            onClick={() => {
              setSearch(null)
              setSelectedTag(null)
            }}
            className="ml-3 rounded underline underline-offset-4"
          >
            Clear filters
          </button>
        )}
      </p>
      {sortedPosts.length === 0 ? (
        <p className="text-(--color-text-secondary)">
          No posts found matching “{search}”
          {selectedTag && <span> with tag “#{selectedTag}”</span>}.
        </p>
      ) : (
        <ul className="not-prose flex flex-col">
          {sortedPosts.map(({ slug, metadata, readingTime, cover }, index) => (
            <li key={slug} className="group reveal">
              <Link
                href={`/blog/${slug}`}
                prefetch={false}
                className="grid grid-cols-[1fr_6rem] items-start gap-4 py-5 sm:grid-cols-[1fr_13rem] sm:gap-6"
              >
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold tracking-tight text-(--color-text-primary) group-hover:text-[#1D6FA4] dark:group-hover:text-[#5BA8D6]">
                    {metadata.title}
                  </h2>

                  {metadata.summary ? (
                    <p className="mt-1.5 max-w-[60ch] text-base leading-relaxed text-(--color-text-primary)">
                      {metadata.summary}
                    </p>
                  ) : null}

                  {/* published date + read time */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-2 text-[13px] text-(--color-text-tertiary)">
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
                </div>
                <div className="overflow-hidden rounded-lg bg-(--color-bg-secondary)">
                  <Image
                    src={cover ?? "/post/blog-og.png"}
                    alt=""
                    width={320}
                    height={168}
                    sizes="(min-width: 640px) 208px, 96px"
                    loading={index < 3 ? "eager" : "lazy"}
                    className="aspect-40/21 h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
