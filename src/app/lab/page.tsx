import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/app/components/ui/page-hero"
import { Section } from "@/app/components/ui/section"
import { TechTag } from "@/app/components/ui/tech-tag"

interface Project {
  name: string
  description: string
  tags: string[]
  stats: { label: string; value: string }[]
  href?: string
  source?: string
  /** Screenshot of the live product, in public/project-preview/lab. */
  image?: string
}

const projects: Project[] = [
  {
    name: "Fluently",
    description:
      "An AI English coach for interviews and client calls: an assessment, an adaptive roadmap of lessons, and live voice roleplays.",
    tags: ["English coaching", "Live voice", "Adaptive lessons"],
    stats: [
      { label: "Practice", value: "Voice + text" },
      { label: "Roadmap", value: "Adaptive" },
    ],
    href: "https://tryfluently.site",
    source: "https://github.com/yagyaraj234/tryfluently",
    image: "/project-preview/lab/fluently.jpg",
  },
  {
    name: "GhostNote",
    description:
      "A private, offline teleprompter for macOS with a movable, resizable, auto-scrolling script overlay.",
    tags: ["macOS teleprompter", "Auto-scroll", "Offline"],
    stats: [
      { label: "Platform", value: "macOS 14+" },
      { label: "Storage", value: "Local" },
    ],
    href: "https://ghostnote.yagyaraj.com",
    image: "/project-preview/lab/ghostnote.jpg",
  },
  {
    name: "Slides",
    description:
      "Turns spoken or typed ideas into editable presentation decks, then exports them as real PowerPoint files.",
    tags: ["Presentations", "Voice to slides", "PPTX export"],
    stats: [
      { label: "Templates", value: "9" },
      { label: "Layouts", value: "10" },
    ],
    href: "https://slides.yagyaraj.com",
    source: "https://github.com/yagyaraj234/slides",
  },
  {
    name: "Trevyn",
    description:
      "Autonomous code review agents that understand a repository, find issues, propose fixes, and verify the result.",
    tags: ["Pull request review", "Suggested fixes", "Code quality"],
    stats: [
      { label: "Coverage", value: "Full repository" },
      { label: "Fixes", value: "One click" },
    ],
    href: "https://trevyn.dev",
    image: "/project-preview/lab/trevyn.jpg",
  },
  {
    name: "Helix",
    description:
      "Scans completed AI-agent traces for failures, security risks, cost leaks, and performance problems.",
    tags: ["Agent monitoring", "Risk detection", "Cost insights"],
    stats: [
      { label: "Checks", value: "Risk + cost" },
      { label: "Reports", value: "Shareable" },
    ],
    href: "https://helix.trevyn.dev",
    source: "https://github.com/yagyaraj234/Helix",
    image: "/project-preview/lab/helix.jpg",
  },
  {
    name: "Collab",
    description:
      "A Trello-like workspace for organizations to manage boards, tasks, due dates, and paid plans.",
    tags: ["Team planning", "Boards", "Task tracking"],
    stats: [
      { label: "Workspace", value: "Organizations" },
      { label: "Tracking", value: "Tasks + due dates" },
    ],
    href: "https://collab.yagyaraj.com",
    source: "https://github.com/yagyaraj234/Collab",
    image: "/project-preview/lab/collab.jpg",
  },
  {
    name: "Preap",
    description:
      "An AI interview practice room with live voice conversations and immediate, actionable feedback.",
    tags: ["Mock interviews", "Live voice", "Actionable feedback"],
    stats: [
      { label: "Mode", value: "Live voice" },
      { label: "Feedback", value: "Instant" },
    ],
  },
  {
    name: "Runza",
    description:
      "PR-aware web testing that plans and runs Playwright checks, then publishes reports and artifacts.",
    tags: ["Pull request testing", "Accessibility", "Test reports"],
    stats: [
      { label: "Trigger", value: "Every pull request" },
      { label: "Output", value: "Reports + artifacts" },
    ],
    source: "https://github.com/yagyaraj234/runza",
  },
]

export default function Page() {
  return (
    <main className="flex-1 pb-24">
      <PageHero
        title="Things I’ve built"
        subtitle="Useful, playful, and fast-made projects."
      />

      <Section id="products">
        {/* <SectionHeader
          id="products-title"
          title="Products"
          action={
            <span className="font-dm-mono text-[10px] text-(--color-text-tertiary) uppercase">
              {projects.length.toString().padStart(2, "0")} total
            </span>
          }
        /> */}

        <div className="flex flex-col gap-1.5" aria-label="Projects">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="reveal rounded-xl bg-(--color-bg-secondary) p-4 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-x-4 sm:p-5"
            >
              {project.image && (
                <a
                  href={project.href ?? project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="group/shot mb-5 block overflow-hidden rounded-lg bg-white sm:col-span-2"
                >
                  <Image
                    src={project.image}
                    alt=""
                    width={1440}
                    height={900}
                    sizes="(min-width: 768px) 728px, 100vw"
                    loading={index < 2 ? "eager" : "lazy"}
                    className="aspect-16/9 w-full object-cover object-top transition-transform duration-300 ease-out group-hover/shot:scale-[1.02]"
                  />
                </a>
              )}
              <h2 className="text-lg font-semibold tracking-tight text-(--color-text-primary)">
                {project.name}
              </h2>

              <div className="mt-1.5 min-w-0 sm:mt-0.5">
                <p className="max-w-[60ch] text-base leading-relaxed text-(--color-text-primary)">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} label={tag} size="sm" />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                  <dl className="flex flex-wrap gap-x-5 gap-y-1.5">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="text-[13px] text-(--color-text-tertiary)">
                          {stat.label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium text-(--color-text-primary)">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex items-center gap-1.5 text-[13px] font-medium">
                    {project.source && (
                      <Link
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 items-center rounded-lg px-3 text-(--color-text-secondary) hover:bg-black/[0.05] hover:text-(--color-text-primary) dark:hover:bg-white/[0.08]"
                      >
                        Source
                      </Link>
                    )}
                    {project.href && (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 items-center gap-1 rounded-lg bg-[#1D6FA4] px-3 text-white hover:bg-[#185f8c]"
                      >
                        Open{" "}
                        <ArrowUpRight aria-hidden="true" className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}
