"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { social_links } from "./static-content"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Email } from "./email-extend"

// Rendered on the client as one unit: a server-rendered array of Radix
// tooltips was intermittently dropped from the dev RSC stream (Next 16.2.1).
export function SocialLinks() {
  return (
    <nav
      aria-label="Social links"
      className="mt-7 flex flex-wrap items-center gap-1"
    >
      <Link
        href="mailto:hey@yagyaraj.com?subject=Project%20conversation"
        className="mr-2 inline-flex h-11 items-center gap-2 rounded-lg bg-[#1D6FA4] px-4 text-sm font-medium text-white hover:bg-[#185f8c]"
      >
        Write an email
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </Link>
      {social_links.map((link) => (
        <Tooltip key={link.name}>
          <TooltipTrigger asChild>
            <Link
              href={link.url}
              target="_blank"
              title={link.name}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              aria-label={link.name}
            >
              <link.icon aria-hidden="true" className="size-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{link.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
      <Email />
    </nav>
  )
}
