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
    <div className="mb-8 rounded-lg border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-950">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value || null)}
        placeholder="Search posts..."
        className="w-full bg-transparent px-2 text-sm outline-none placeholder:text-zinc-500"
      />
    </div>
  )
}
