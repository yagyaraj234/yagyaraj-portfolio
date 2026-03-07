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
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-colors",
                selectedTag === tag
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-gray-200 bg-transparent text-gray-600 hover:border-gray-400 dark:border-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
              )}
            >
              #{tag}
            </button>
          ))}
        </div>

        <button
          onClick={toggleSort}
          className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium whitespace-nowrap text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-900"
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
        <p className="text-gray-500">
          No posts found matching "{search}"
          {selectedTag && <span> with tag "#{selectedTag}"</span>}.
        </p>
      ) : (
        <ul className="not-prose space-y-4">
          {sortedPosts.map(({ slug, metadata, readingTime }) => (
            <li
              key={slug}
              className="flex justify-between gap-2 pb-2 max-md:flex-col md:pb-6"
            >
              <div>
                <h2 className="text-xl font-semibold max-md:text-lg max-sm:text-lg">
                  <Link
                    href={`/blog/${slug}`}
                    className="cursor-pointer hover:underline"
                    prefetch={false}
                  >
                    {metadata.title}
                  </Link>
                </h2>

                {metadata.summary ? (
                  <p className="mt-2 text-gray-800 max-sm:text-sm dark:text-gray-300">
                    {metadata.summary}
                  </p>
                ) : null}

                {/* published date, read time and tags */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    {metadata.date && (
                      <span>
                        {new Date(metadata.date).toLocaleDateString()}
                      </span>
                    )}
                    {readingTime && (
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-black/50 dark:bg-white/50"></div>
                        <span>{readingTime}</span>
                      </div>
                    )}
                  </div>

                  {metadata.tags && metadata.tags.length > 0 && (
                    <div className="flex gap-2">
                      {metadata.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={cn(
                            "hidden hover:underline",
                            selectedTag === tag
                              ? "font-bold text-black dark:text-white"
                              : ""
                          )}
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
