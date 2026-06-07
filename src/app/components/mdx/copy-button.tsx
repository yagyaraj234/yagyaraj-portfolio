"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export function CopyButton({
  content,
  label,
}: {
  content: string
  label?: string
}) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(content)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <button
      onClick={copy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md p-1.5 transition-all duration-200",
        "hover:bg-zinc-200 dark:hover:bg-white/10",
        "text-zinc-500 dark:text-zinc-400",
        isCopied && "text-green-500 dark:text-green-400"
      )}
      aria-label="Copy code"
    >
      {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {label ? (
        <span className="text-xs font-medium">
          {isCopied ? "Copied" : label}
        </span>
      ) : null}
    </button>
  )
}
