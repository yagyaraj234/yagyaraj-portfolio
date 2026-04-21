"use client"

import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  className?: string
}

export function FAQ({ items, className }: FAQProps) {
  return (
    <div className={cn("my-8 space-y-3", className)}>
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded-xl border border-zinc-200 bg-zinc-50/50 transition-all duration-300 open:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-900/50 dark:open:shadow-none"
        >
          <summary className="flex cursor-pointer select-none list-none items-center gap-3 px-5 py-4 text-[15px] font-medium text-zinc-800 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white [&::-webkit-details-marker]:hidden">
            <ChevronRight className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-90 dark:text-zinc-500" />
            <span>{item.question}</span>
          </summary>
          <div className="px-5 pb-5 pl-12 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
