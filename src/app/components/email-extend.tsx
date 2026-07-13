"use client"
import { useState } from "react"
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip"

const EMAIL = "hey@yagyaraj.com"
type CopyState = "idle" | "copied" | "error"

export const MailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

export const Email = () => {
  const [copyState, setCopyState] = useState<CopyState>("idle")
  const [open, setOpen] = useState(false)

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyState("copied")
    } catch {
      setCopyState("error")
    }
    setOpen(true)
    setTimeout(() => setCopyState("idle"), 1500)
  }

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <button
          onMouseLeave={() => setOpen(false)}
          onMouseEnter={() => setOpen(true)}
          onClick={handleCopy}
          aria-label="Copy email"
          className="group inline-flex items-center justify-center rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        >
          {/* icon: collapses to width 0 on hover */}
          <span className="grid size-4 place-items-center overflow-hidden opacity-100 transition-all duration-300 ease-out group-hover:size-0 group-hover:opacity-0">
            <MailIcon aria-hidden="true" className="size-4" />
          </span>
          {/* email: 0fr -> 1fr expands intrinsic width smoothly */}
          <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-out group-hover:grid-cols-[1fr]">
            <span className="overflow-hidden text-sm whitespace-nowrap opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {EMAIL}
            </span>
          </span>
        </button>
      </TooltipTrigger>

      <TooltipContent>
        <p role="status">
          {copyState === "copied"
            ? "Email copied"
            : copyState === "error"
              ? "Could not copy"
              : "Copy email address"}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
