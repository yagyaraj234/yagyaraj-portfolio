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
  label?: string
  title: string
  /** Makes the title a link and shows a trailing arrow on hover. */
  href?: string
  /** Right-aligned action (e.g. count, "view all"). */
  action?: React.ReactNode
  id?: string
}

export function SectionHeader({
  label,
  title,
  href,
  action,
  id,
}: SectionHeaderProps) {
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
