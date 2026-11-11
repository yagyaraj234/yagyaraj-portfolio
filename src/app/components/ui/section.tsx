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
      {id && (
        <a
          className="heading-anchor"
          href={`#${id}`}
          aria-label={`Link to ${title}`}
        >
          #
        </a>
      )}
    </h2>
  )

  return (
    <div className="flex items-center gap-4">
      <div className="flex shrink-0 flex-col gap-1.5">
        {href ? (
          <Link
            href={href}
            className="group inline-flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-[#1D6FA4] dark:text-zinc-100 dark:hover:text-[#5BA8D6]"
          >
            <h2 id={id}>{title}</h2>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 translate-y-px text-(--color-text-tertiary)"
            />
          </Link>
        ) : (
          heading
        )}
      </div>
      {action && <div className="ml-auto">{action}</div>}
    </div>
  )
}
