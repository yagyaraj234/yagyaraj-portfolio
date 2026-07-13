import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  /** Draw a hairline divider above the section for vertical rhythm. */
  divider?: boolean
}

export function Section({ children, className, id, divider }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn(
        "scroll-mt-24",
        divider ? "mt-12 border-t border-(--color-border) pt-12" : "mt-12",
        className
      )}
    >
      {children}
    </section>
  )
}

type SectionHeaderProps = {
  title: string
  /** Makes the title a link and shows a trailing arrow on hover. */
  href?: string
  /** Right-aligned action (e.g. count, "view all"). */
  action?: React.ReactNode
  id?: string
}

export function SectionHeader({ title, href, action, id }: SectionHeaderProps) {
  const heading = (
    <h2
      id={id}
      className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
    >
      {title}
    </h2>
  )

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1.5">
        <div aria-hidden="true" className="flex h-2 w-16 items-center gap-2">
          <span className="size-1.5 rounded-full bg-[#1D6FA4] shadow-[0_0_0_3px_rgba(29,111,164,0.1)] dark:bg-[#5BA8D6]" />
          <span className="h-px flex-1 bg-linear-to-r from-(--color-border-hover) to-transparent" />
        </div>
        {href ? (
          <Link
            href={href}
            className="group inline-flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-[#1D6FA4] dark:text-zinc-100 dark:hover:text-[#5BA8D6]"
          >
            <span id={id}>{title}</span>
            <ArrowUpRight className="size-3.5 translate-y-px text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ) : (
          heading
        )}
      </div>
      {action}
    </div>
  )
}
