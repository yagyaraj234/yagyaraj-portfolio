import { ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Section, SectionHeader } from "@/app/components/ui/section"
import { TechTag } from "@/app/components/ui/tech-tag"
import { cn } from "@/lib/utils"

const linkBase =
  "inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-[13px] font-medium no-underline"
const primaryLinkClass = cn(
  linkBase,
  "bg-(--color-text-primary) text-white hover:bg-zinc-700 dark:text-zinc-950 dark:hover:bg-zinc-300"
)
const secondaryLinkClass = cn(
  linkBase,
  "bg-black/[0.05] text-(--color-text-primary) hover:bg-black/[0.09] dark:bg-white/[0.08] dark:hover:bg-white/[0.12]"
)
const labelClass = "text-[13px] text-(--color-text-tertiary)"

interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
  // Background behind the screenshot, light + dark
  tint: string
}

interface ProjectScreen {
  src: string
  alt: string
  width: number
  height: number
  title: string
  caption: string
}

interface Project {
  title: string
  status: string
  description: string
  live?: string
  git?: string
  // Featured projects render as a detailed card
  image?: ProjectImage
  screens?: ProjectScreen[]
  role?: string
  timeline?: string
  metrics?: { value: string; label: string }[]
  surface?: string
  focus?: string
  highlights?: string[]
  stack?: string[]
}

const projectsData: Project[] = [
  {
    title: "Fluently",
    status: "Live beta",
    description:
      "AI English coach for job interviews, client calls and everyday fluency. Learners set goals, take an assessment, then practise through an adaptive roadmap of lessons and live voice roleplays.",
    live: "https://tryfluently.site",
    git: "https://github.com/yagyaraj234/tryfluently",
    image: {
      src: "/project-preview/fluently/hero.png",
      alt: "Fluently roleplay call with Maya next to an assessment report and the learner's roadmap",
      width: 1400,
      height: 732,
      tint: "bg-[#eceefc] dark:bg-[#12142b]",
    },
    screens: [
      {
        src: "/project-preview/fluently/assessment.png",
        alt: "Assessment result showing CEFR levels for fluency, grammar and vocabulary against the goal's target",
        width: 800,
        height: 720,
        title: "Assessment",
        caption:
          "A voice or written assessment estimates a CEFR level for each skill and sets a target from the learner's goal.",
      },
      {
        src: "/project-preview/fluently/roadmap.png",
        alt: "Roadmap with a completed unit, a lesson in progress and the next conversation unit",
        width: 800,
        height: 620,
        title: "Roadmap",
        caption:
          "Units of short lessons. Each lesson is prepared from how the learner did in the last one.",
      },
      {
        src: "/project-preview/fluently/roleplay.png",
        alt: "Roleplay message with a grammar correction and a button to hear the right pronunciation",
        width: 800,
        height: 648,
        title: "Roleplay",
        caption:
          "A live voice partner stays in character, then a debrief lists corrections with audio to hear them said right.",
      },
    ],
    role: "Solo build: product, design, full-stack, infra",
    timeline: "Oct 2026 – now",
    metrics: [
      { value: "114", label: "PRs merged" },
      { value: "69", label: "Test files" },
      { value: "15", label: "Postgres tables" },
      { value: "4", label: "Design records" },
    ],
    surface: "Web app, voice + text",
    focus: "Adaptive AI coaching",
    highlights: [
      "Live mock interviews and roleplays on OpenAI Realtime. The API relays the call setup and holds the only key, then hangs up the call when the learner's monthly voice allowance runs out.",
      "Assessment, goals, then a roadmap. Each lesson is generated just in time from the learner's skill profile, focus areas and memory, behind leases so a retry never writes duplicate content.",
      "Postgres-backed job worker with renewable leases, retries and restart recovery. Per-learner AI rate limits and a graceful drain of requests and live calls on every deploy.",
    ],
    stack: [
      "TanStack Start",
      "Hono",
      "Bun",
      "PostgreSQL",
      "Drizzle",
      "Better Auth",
      "AI SDK",
      "OpenAI Realtime",
      "Docker",
      "Caddy",
    ],
  },
  {
    title: "Trevyn",
    status: "Completed",
    description:
      "AI-powered GitHub App that reviews PRs with full codebase context and lets you apply fixes in one click or batch them into a single commit.",
    live: "https://trevyn.dev",
    image: {
      src: "/project-preview/trevyn.png",
      alt: "Trevyn reviewing a pull request and proposing a code fix",
      width: 2000,
      height: 1240,
      tint: "bg-[#e8f3ed] dark:bg-[#101b17]",
    },
    role: "Solo build: GitHub App, API, web",
    timeline: "Apr 2026",
    metrics: [{ value: "52", label: "PRs merged" }],
    surface: "GitHub pull requests",
    focus: "Repository-aware AI review",
    highlights: [
      "Runs as a GitHub App: pull request webhooks trigger a review, and accepted fixes are committed back to the branch.",
      "Indexes the repository into a vector store so each review sees related code beyond the diff.",
    ],
    stack: [
      "TanStack Start",
      "Hono",
      "PostgreSQL",
      "Drizzle",
      "GitHub App",
      "AI SDK",
      "Upstash Vector",
    ],
  },
  {
    title: "Collab",
    status: "Completed",
    description:
      "Trello-like project management with organizations, boards, task tracking, and Stripe subscription billing.",
    live: "https://collab.yagyaraj.com",
    git: "https://github.com/yagyaraj234/collab",
  },
]

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-1.5">
      {project.live && (
        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryLinkClass}
        >
          Live <ArrowUp className="size-3 rotate-45" />
        </Link>
      )}
      {project.git && (
        <Link
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className={project.live ? secondaryLinkClass : primaryLinkClass}
        >
          Code <ArrowUp className="size-3 rotate-45" />
        </Link>
      )}
    </div>
  )
}

function FeaturedProject({
  project,
  image,
}: {
  project: Project
  image: ProjectImage
}) {
  return (
    <article className="group reveal overflow-hidden rounded-2xl bg-(--color-bg-secondary)">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-medium tracking-tight text-(--color-text-primary)">
              {project.title}
            </h3>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-[#0F6E56] dark:text-[#34D399]">
              <span className="relative flex size-1.5">
                {project.status.startsWith("Live") && (
                  <span className="absolute inset-0 rounded-full bg-current opacity-60 motion-safe:animate-ping" />
                )}
                <span className="relative size-1.5 rounded-full bg-current" />
              </span>
              {project.status}
            </span>
          </div>
          {project.role && (
            <p className="mt-1 text-[13px] text-(--color-text-tertiary)">
              {project.role}
              {project.timeline && <> · {project.timeline}</>}
            </p>
          )}

          <p className="mt-3 max-w-md text-base leading-relaxed text-(--color-text-secondary)">
            {project.description}
          </p>

          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <dt className={labelClass}>Surface</dt>
              <dd className="mt-0.5 text-sm text-(--color-text-primary)">
                {project.surface}
              </dd>
            </div>
            <div>
              <dt className={labelClass}>Focus</dt>
              <dd className="mt-0.5 text-sm text-(--color-text-primary)">
                {project.focus}
              </dd>
            </div>
            {project.metrics?.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse">
                <dt className={labelClass}>{metric.label}</dt>
                <dd className="text-2xl font-medium tracking-tight text-(--color-text-primary) tabular-nums">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto pt-5">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className={cn("flex items-center p-4 sm:p-6", image.tint)}>
          <Link
            href={project.live ?? project.git ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="block w-full overflow-hidden rounded-xl bg-white"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="eager"
              sizes="(min-width: 1024px) 600px, 100vw"
              className="h-auto w-full transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.01]"
            />
          </Link>
        </div>
      </div>

      {project.screens && (
        <div className="px-6 pt-8 pb-6">
          <h4 className="text-sm font-medium text-(--color-text-primary)">
            Inside the app
          </h4>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {project.screens.map((screen) => (
              <figure key={screen.title} className="group/screen flex flex-col">
                <a
                  href={screen.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${screen.title} screen full size`}
                  className={cn(
                    "block overflow-hidden rounded-xl p-2 active:scale-[0.98]",
                    image.tint
                  )}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width}
                    height={screen.height}
                    sizes="(min-width: 640px) 240px, 100vw"
                    className="aspect-10/9 h-auto w-full rounded-lg object-cover transition-transform duration-300 ease-out group-hover/screen:scale-[1.02]"
                  />
                </a>
                <figcaption className="mt-2">
                  <span className="flex items-center gap-1 text-sm font-medium text-(--color-text-primary)">
                    {screen.title}
                    <ArrowUp
                      aria-hidden="true"
                      className="size-3 rotate-45 text-(--color-text-tertiary) opacity-0 transition-opacity duration-150 group-hover/screen:opacity-100"
                    />
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-relaxed text-(--color-text-secondary)">
                    {screen.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {(project.highlights || project.stack) && (
        <div className="px-6 pt-8 pb-6">
          {project.highlights && (
            <>
              <h4 className="text-sm font-medium text-(--color-text-primary)">
                What I built
              </h4>
              <ul className="mt-2 max-w-[68ch] space-y-2">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-base leading-relaxed text-(--color-text-secondary) before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-(--color-text-tertiary)"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}
          {project.stack && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <TechTag key={tech} label={tech} size="sm" />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export function Projects({ show = 10 }: { show?: number }) {
  const projectsToDisplay = projectsData.slice(0, show)

  return (
    <Section id="projects">
      <SectionHeader id="projects-title" title="Selected work" />

      <div className="mt-5 flex flex-col gap-3">
        {projectsToDisplay.map((project) =>
          project.image ? (
            <FeaturedProject
              key={project.title}
              project={project}
              image={project.image}
            />
          ) : (
            <div
              key={project.title}
              className="reveal flex items-start justify-between gap-4 rounded-xl bg-(--color-bg-secondary) px-5 py-4"
            >
              <div className="flex-1">
                <h3 className="mb-1 text-base font-medium text-(--color-text-primary)">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-(--color-text-secondary)">
                  {project.description}
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className={labelClass}>{project.status}</span>
                <ProjectLinks project={project} />
              </div>
            </div>
          )
        )}
      </div>
    </Section>
  )
}
