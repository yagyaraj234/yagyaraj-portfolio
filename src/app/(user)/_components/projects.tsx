import { ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Section, SectionHeader } from "@/app/components/ui/section"

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
    image: "/project-preview/trevyn.png",
    imageAlt: "Trevyn reviewing a pull request and proposing a code fix",
    surface: "GitHub pull requests",
    focus: "Repository-aware AI review",
  },
  {
    number: "02",
    title: "Collab",
    status: "Completed",
    description:
      "Trello-like project management with organizations, boards, task tracking, and Stripe subscription billing.",
    live: "https://collab.yagyaraj.com",
    git: "https://github.com/yagyaraj234/collab",
  },
]

export function Projects({ show = 10 }: { show?: number }) {
  const projectsToDisplay = projectsData.slice(0, show)
  const [featured, ...secondary] = projectsToDisplay

  return (
    <Section id="projects" className="relative left-1/2 -translate-x-1/2">
      <SectionHeader id="projects-title" title="Selected work" />

      <div className="mt-5 flex flex-col gap-3">
        {/* Featured project */}
        <article className="group overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-secondary)/55 transition-colors duration-200 hover:border-(--color-border-hover) dark:bg-[#151513]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col p-6">
              <div className="mb-2 flex items-center justify-between gap-4">
                <h3 className="text-3xl font-medium tracking-tight text-(--color-text-primary)">
                  {featured.title}
                </h3>
                <span className="font-dm-mono inline-flex items-center gap-1.5 text-[10px] text-[#0F6E56] dark:text-[#34D399]">
                  <span className="size-1.5 rounded-full bg-current" />
                  {featured.status}
                </span>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-(--color-text-secondary)">
                {featured.description}
              </p>

              <dl className="mt-3 grid grid-cols-2 gap-5 border-t border-(--color-border) pt-2">
                <div>
                  <dt className="font-dm-mono text-[9px] tracking-[0.12em] text-(--color-text-tertiary) uppercase">
                    Surface
                  </dt>
                  <dd className="mt-1 text-xs text-(--color-text-primary)">
                    {featured.surface}
                  </dd>
                </div>
                <div>
                  <dt className="font-dm-mono text-[9px] tracking-[0.12em] text-(--color-text-tertiary) uppercase">
                    Focus
                  </dt>
                  <dd className="mt-1 text-xs text-(--color-text-primary)">
                    {featured.focus}
                  </dd>
                </div>
              </dl>

              <div className="mt-3 flex gap-2">
                <Link
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Visit product <ArrowUp className="size-3 rotate-45" />
                </Link>
              </div>
            </div>

            <div className="border-t border-(--color-border) bg-[#e8f3ed] p-4 sm:p-6 lg:border-t-0 lg:border-l dark:bg-[#101b17]">
              {featured.image && featured.imageAlt && (
                <Link
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${featured.title}`}
                  className="block overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_24px_60px_rgba(14,50,32,0.12)] dark:border-white/10"
                >
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    width={2000}
                    height={1200}
                    loading="eager"
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="aspect-5/3 w-full object-cover object-top-left transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.01]"
                  />
                </Link>
              )}
            </div>
          </div>
        </article>

        {/* Secondary projects */}
        {secondary.map((project, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-4 rounded-xl border border-(--color-border) bg-(--color-bg-secondary)/55 px-5 py-4 transition-colors duration-200 hover:border-(--color-border-hover) dark:bg-[#151513]"
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
