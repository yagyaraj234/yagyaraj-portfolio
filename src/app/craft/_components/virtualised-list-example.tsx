"use client"

import { useState } from "react"
import { PlayIcon, PauseIcon, HeartIcon } from "lucide-react"
import VirtualizedList from "./virtualised-list"
import { cn } from "@/lib/utils"

type ListItemProps = {
  item: (typeof MOCK_ITEMS)[number]
}

type ListProps = {
  height: number
  width?: number
  className?: string
}
const MOCK_ITEMS = [
  {
    name: "Dio Lupa",
    subtitle: "REMAINING REASON",
    img: "https://img.daisyui.com/images/profile/demo/1@94.webp",
  },
  {
    name: "Ellie Beilish",
    subtitle: "BEARS OF A FEVER",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    name: "Sabrino Gardener",
    subtitle: "CAPPUCCINO",
    img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
]

function ListItem({ item }: ListItemProps) {
  const [liked, setLiked] = useState(false)
  const [play, setPlay] = useState(false)

  function handleLikeClick(e: React.MouseEvent) {
    e.stopPropagation()
    setLiked(!liked)
  }

  function handlePlayClick(e: React.MouseEvent) {
    e.stopPropagation()
    setPlay(!play)
  }

  return (
    <li className="flex items-center gap-4 border-b border-zinc-100 bg-white px-4 py-3 last:border-b-0">
      <div>
        <img
          className="size-12 rounded-[14px] object-cover"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[15px] font-medium text-zinc-900">
          {item.name}
        </div>
        <div className="mt-0.5 truncate text-[12px] font-bold tracking-wide text-zinc-500 uppercase">
          {item.subtitle}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handlePlayClick}
          className="flex size-10 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
          {play ? (
            <PauseIcon className="size-5" strokeWidth={1.5} />
          ) : (
            <PlayIcon className="size-5" strokeWidth={1.5} />
          )}
        </button>

        <button
          onClick={handleLikeClick}
          className="flex size-10 cursor-pointer items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
          <HeartIcon
            className={`size-5`}
            strokeWidth={1.5}
            color={liked ? "red" : "currentColor"}
            fill={liked ? "red" : "none"}
          />
        </button>
      </div>
    </li>
  )
}

export default function VirtualizedListExample({
  height,
  width,
  className,
}: ListProps) {
  const data = Array.from(
    { length: 1000 },
    (_, i) => MOCK_ITEMS[i % MOCK_ITEMS.length]
  )
  return (
    <div
      className={cn(
        "w-full rounded-[15px] border border-zinc-200 p-1 drop-shadow-lg dark:border-zinc-700",
        className
      )}
      data-lenis-prevent
    >
      <VirtualizedList
        data={data}
        renderItem={(item, idx) => <ListItem key={idx} item={item} />}
        minHeight={height || 500}
        buffer={12}
        className="overflow-y-auto rounded-xl border border-zinc-200 dark:border-zinc-700"
      />
    </div>
  )
}
