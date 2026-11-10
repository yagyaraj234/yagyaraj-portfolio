"use client"

import { useRef } from "react"
import { Search as SearchIcon, X } from "lucide-react"
import { useQueryState, parseAsString } from "nuqs"

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({
      throttleMs: 200,
      shallow: true,
      history: "replace",
    })
  )

  return (
    <div className="mb-6 flex h-11 items-center gap-2 rounded-lg bg-(--color-bg-secondary) px-3">
      <SearchIcon
        aria-hidden="true"
        className="size-4 shrink-0 text-(--color-text-secondary)"
      />
      <input
        ref={inputRef}
        type="search"
        onKeyDown={(event) => {
          if (event.key === "Escape") setSearch(null)
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value || null)}
        placeholder="Search posts…"
        aria-label="Search posts"
        className="w-full bg-transparent text-base text-(--color-text-primary) outline-none placeholder:text-(--color-text-tertiary)"
      />
      {search && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => {
            setSearch(null)
            inputRef.current?.focus()
          }}
          className="hover:text-foreground rounded p-1 text-(--color-text-secondary)"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      )}
    </div>
  )
}
