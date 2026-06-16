import { ArrowUp } from "lucide-react"
import Link from "next/link"
import { Section, SectionHeader } from "@/app/components/ui/section"
import { TechTag } from "@/app/components/ui/tech-tag"

const linkClass =
  "inline-flex items-center gap-1.5 rounded-lg border border-(--color-border) px-2.5 py-1 font-dm-mono text-[10px] text-(--color-text-secondary) no-underline transition-colors duration-150 hover:border-(--color-border-hover) hover:text-(--color-text-primary)"

const projectsData = [
  {
    number: "01",
    title: "Trevyn",
    status: "Completed",
    description:
      "AI-powered GitHub App that reviews PRs with full codebase context and lets you apply fixes in one click or batch them into a single commit.",
    live: "https://trevyn.dev",
    tags: [
      "TypeScript",
      "Hono.js",
      "Postgres + pgvector",
      "BullMQ + Redis",
      "Google Cloud Platform",
      "GitHub App",
      "Tree-sitter",
    ],
  },
  {
    number: "02",
    title: "Collab",
    status: "Completed",
    description:
      "Trello-like project management with organizations, boards, task tracking, and Stripe subscription billing.",
    live: "https://collab.yagyaraj.com",
    git: "https://github.com/yagyaraj234/collab",
    tags: ["Nextjs", "Server Actions", "Zustand", "Stripe", "Prisma ORM"],
  },
]

export function Projects({ show = 10 }: { show?: number }) {
  const projectsToDisplay = projectsData.slice(0, show)
  const [featured, ...secondary] = projectsToDisplay

  return (
    <Section id="projects">
      <SectionHeader id="projects-title" title="Projects" />

      <div className="mt-5 flex flex-col gap-3">
        {/* Featured project */}
        <div className="rounded-xl border border-(--color-border) bg-(--color-bg-secondary)/50 p-6 transition-colors duration-200 hover:border-(--color-border-hover)">
          {/* Status badge */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-[#E1F5EE] px-2 py-1 dark:bg-[#0D9E75]/15">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0D9E75]" />
            <span className="font-dm-mono text-[10px] leading-none text-[#0F6E56] dark:text-[#34D399]">
              {featured.status}
            </span>
          </div>

          <h3 className="mb-2 font-sans text-xl font-medium text-(--color-text-primary)">
            {featured.title}
          </h3>

          <p className="mb-5 max-w-prose font-sans text-[13px] leading-[1.6] text-(--color-text-secondary)">
            {featured.description}
          </p>

          {/* <div className="mb-5 flex gap-2">
            {featured.live && (
              <Link href={featured.live} target="_blank" className={linkClass}>
                Live <ArrowUp className="size-3 rotate-45" />
              </Link>
            )}
            {featured.git && (
              <Link href={featured.git} target="_blank" className={linkClass}>
                Code <ArrowUp className="size-3 rotate-45" />
              </Link>
            )}
          </div> */}

          <div className="flex flex-wrap gap-1.5">
            {featured.tags.map((tag, i) => (
              <TechTag key={i} label={tag} size="sm" />
            ))}
          </div>
        </div>

        {/* Secondary projects */}
        {secondary.map((project, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-4 rounded-xl border border-(--color-border) bg-(--color-bg-secondary) px-5 py-4 transition-colors duration-200 hover:border-(--color-border-hover)"
          >
            <div className="flex-1">
              <div className="font-dm-mono mb-1 text-[11px] text-(--color-text-tertiary)">
                {project.number}
              </div>
              <h3 className="mb-1 font-sans text-[14px] font-medium text-(--color-text-primary)">
                {project.title}
              </h3>
              <p className="font-sans text-[12px] leading-[1.6] text-(--color-text-secondary)">
                {project.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className="font-dm-mono text-[10px] text-(--color-text-tertiary) uppercase">
                {project.status}
              </span>
              <div className="flex gap-1.5">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className={linkClass}
                  >
                    Live <ArrowUp className="size-3 rotate-45" />
                  </Link>
                )}
                {project.git && (
                  <Link
                    href={project.git}
                    target="_blank"
                    className={linkClass}
                  >
                    Code <ArrowUp className="size-3 rotate-45" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
