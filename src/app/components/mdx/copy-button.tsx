"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function CopyButton({
  content,
  label,
}: {
  content: string
  label?: string
}) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle")
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    []
  )

  const copy = async (): Promise<void> => {
    if (timer.current) clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(content)
      setState("copied")
    } catch {
      setState("error")
    }
    timer.current = setTimeout(() => setState("idle"), 2500)
  }
  const message =
    state === "copied"
      ? "Copied"
      : state === "error"
        ? "Could not copy. Select and copy manually."
        : ""
  const Icon =
    state === "copied" ? Check : state === "error" ? AlertCircle : Copy

  return (
    <>
      <button
        type="button"
        onClick={copy}
        title={message || label || "Copy code"}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-white/10",
          state === "copied" && "text-green-700 dark:text-green-400"
        )}
        aria-label={message || label || "Copy code"}
      >
        <Icon aria-hidden="true" className="h-4 w-4" />
        {label && (
          <span className="text-[13px] font-medium">
            {state === "copied"
              ? "Copied"
              : state === "error"
                ? "Try again"
                : label}
          </span>
        )}
      </button>
      <span role="status" className="sr-only">
        {message}
      </span>
    </>
  )
}
