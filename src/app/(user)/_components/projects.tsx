import Image from "next/image"
import Link from "next/link"

const projectsData = [
  {
    number: "01",
    title: "Trevyn",
    status: "Ongoing",
    description:
      "AI-powered GitHub App that reviews PRs with full codebase context and lets you apply fixes in one click or batch them into a single commit.",
    live: "https://trevyn.dev",
    tags: [
      "TypeScript",
      "Hono.js",
      "Postgres + pgvector",
      "Tree-sitter",
      "BullMQ + Redis",
      "Google Cloud Platform",
      "GitHub App",
    ],
  },
  {
    number: "02",
    title: "Collab",
    status: "Completed",
    description:
      "Trello-like project management app with organizations, boards, and task tracking. Integrated Stripe for subscription and payment management.",
    live: "https://collab.yagyaraj.com",
    git: "https://github.com/yagyaraj/collab",
    tags: [
      "Nextjs",
      "Server Actions",
      "Zustand",
      "Node.js",
      "Cleark Auth",
      "Stripe",
      "Postgres",
      "Prisma ORM",
    ],
  },
  {
    number: "02",
    title: "Preap",
    description:
      "Mock interview platform with role-based interviews, live call recording, behavioral analysis, and tiered pricing.",
    live: "https://preap.yagyaraj.com",
    tags: ["Next.js 15", "Framer Motion", "AI"],
  },
  {
    number: "03",
    title: "AI Blog Agent",
    description:
      "Mastra-powered writing agent with tools for research, drafting, and keyword analysis. Generates full blog posts autonomously.",
    git: "https://github.com/yagyaraj/ai-blog-agent",
    tags: ["Mastra", "LLM", "Node.js"],
  },
]

export function Projects({ show = 10 }: { show?: number }) {
  const projectsToDisplay = projectsData.slice(0, show)
  return (
    <section className="mt-12 mb-6" aria-label="Projects">
      <h2 className="text-lg font-semibold">Projects</h2>

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        {projectsToDisplay.map((project, idx) => (
          <div
            key={idx}
            className="relative block cursor-pointer rounded-xl border-[0.5px] border-(--color-border)/70 bg-(--color-bg-secondary) p-5 transition-colors duration-200 ease-in-out hover:border-(--color-border-hover)"
          >
            {project.status && (
              <div className="absolute top-5 right-5 font-[family-name:var(--font-dm-mono),monospace] text-[10px] leading-none text-(--color-text-tertiary) uppercase">
                {project.status}
              </div>
            )}

            <div className="mb-2.5 font-[family-name:var(--font-dm-mono),monospace] text-[11px] leading-none text-(--color-text-tertiary)">
              {project.number}
            </div>

            <h3 className="mb-1.5 font-[family-name:var(--font-sans),sans-serif] text-[14px] leading-snug font-medium text-(--color-text-primary)">
              {project.title}
            </h3>

            <p className="text-secondary mb-3.5 font-[family-name:var(--font-sans),sans-serif] text-[12px] leading-[1.6]">
              {project.description}
            </p>

            <div className="mb-3 flex flex-row gap-2">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="rounded-lg border-[0.5px] border-(--color-border) bg-transparent px-2.5 py-1 font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) normal-case no-underline transition-colors duration-150 ease-in-out hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
                >
                  live preview ↗
                </Link>
              )}
              {project.git && (
                <Link
                  href={project.git}
                  target="_blank"
                  className="rounded-sm border-[0.5px] border-(--color-border) bg-transparent px-2.5 py-1 font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) normal-case no-underline transition-colors duration-150 ease-in-out hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
                >
                  source code ↗
                </Link>
              )}
            </div>

            <div className="flex flex-wrap gap-[5px]">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="rounded-sm border-[0.5px] border-(--color-border) bg-transparent px-[7px] py-0.5 font-[family-name:var(--font-dm-mono),monospace] text-[10px] leading-none text-zinc-600 normal-case"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
