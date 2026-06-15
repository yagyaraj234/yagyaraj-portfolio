"use client"

import { useQueryState, parseAsString } from "nuqs"

export default function Search() {
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({
      throttleMs: 200,
      shallow: true,
      history: "replace",
    })
  )

  return (
    <div className="mb-6 rounded-lg border border-(--color-border) bg-(--color-bg-secondary) px-3 py-2 transition-colors focus-within:border-(--color-border-hover)">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value || null)}
        placeholder="Search posts…"
        aria-label="Search posts"
        className="w-full bg-transparent text-sm text-(--color-text-primary) outline-none placeholder:text-(--color-text-tertiary)"
      />
    </div>
  )
}
