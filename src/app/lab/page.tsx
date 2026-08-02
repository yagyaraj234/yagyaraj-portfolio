import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/app/components/ui/section"
import { TechTag } from "@/app/components/ui/tech-tag"

interface Project {
  name: string
  description: string
  tags: string[]
  stats: { label: string; value: string }[]
  href?: string
  source?: string
}

const projects: Project[] = [
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
      <h1 className="hero-name">
        Things I’ve Built
        <br />
        <em className="font-instrumentSerif text-muted text-xl sm:text-4xl">
          A collection of <span style={{ color: "#1D6FA4" }}>useful</span>,{" "}
          <span style={{ color: "#1D6FA4" }}>playful</span>, and{" "}
          <span style={{ color: "#1D6FA4" }}>fast-made </span> projects.
        </em>
      </h1>

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

        <div className="mt-12 flex flex-col gap-1.5" aria-label="Projects">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group rounded-xl border border-(--color-border) bg-(--color-bg-secondary)/35 p-3.5 transition-colors duration-500 ease-in-out hover:border-(--color-border-hover) hover:bg-(--color-bg-secondary)/70 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-x-4 sm:p-4"
            >
              <div className="flex items-start justify-between gap-4 sm:block">
                <span className="font-dm-mono block text-[10px] text-(--color-text-tertiary)">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-(--color-text-primary) max-sm:mt-0">
                  {project.name}
                </h2>
              </div>

              <div className="mt-2.5 min-w-0 sm:mt-0">
                <p className="max-w-xl text-[13px] leading-normal text-(--color-text-secondary)">
                  {project.description}
                </p>

                <div className="mt-2 flex flex-wrap gap-1" aria-label="Tags">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} label={tag} size="sm" />
                  ))}
                </div>

                <div className="mt-2.5 flex flex-wrap items-end justify-between gap-3 border-t border-(--color-border) pt-2.5">
                  <dl className="flex flex-wrap gap-x-5 gap-y-1.5">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="font-dm-mono text-[9px] text-(--color-text-tertiary) uppercase">
                          {stat.label}
                        </dt>
                        <dd className="mt-0.5 text-xs font-medium text-(--color-text-primary)">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="font-dm-mono flex items-center gap-3 text-[9px] tracking-[0.08em] uppercase">
                    {project.source && (
                      <Link
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--color-text-tertiary) transition-colors hover:text-(--color-text-primary)"
                      >
                        Source
                      </Link>
                    )}
                    {project.href && (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#1D6FA4] transition-colors hover:text-[#185f8c] dark:text-[#5BA8D6]"
                      >
                        Open <ArrowUpRight className="size-3" />
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
