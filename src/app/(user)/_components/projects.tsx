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
    <section className="mt-12 mb-6" aria-label="Projects">
      <h2 className="text-lg font-semibold">Projects</h2>

      <div className="mt-4 flex flex-col gap-3">
        {/* Featured project */}
        <div className="rounded-xl border-[0.5px] border-(--color-border)/70 bg-(--color-bg-secondary) p-6 transition-colors duration-200 hover:border-(--color-border-hover)">
          {/* Status badge */}
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-[#E1F5EE] px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0D9E75]" />
            <span className="font-[family-name:var(--font-dm-mono),monospace] text-[10px] leading-none text-[#0F6E56]">
              ongoing
            </span>
          </div>

          <h3 className="mb-2 font-[family-name:var(--font-sans),sans-serif] text-xl font-medium text-(--color-text-primary)">
            {featured.title}
          </h3>

          <p className="mb-5 font-[family-name:var(--font-sans),sans-serif] text-[13px] leading-[1.6] text-(--color-text-secondary)">
            {featured.description}
          </p>

          <div className="mb-5 flex gap-2">
            {featured.live && (
              <Link
                href={featured.live}
                target="_blank"
                className="rounded-lg border-[0.5px] border-(--color-border) bg-transparent px-2.5 py-1 font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) no-underline transition-colors duration-150 hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
              >
                live preview ↗
              </Link>
            )}
            {featured.git && (
              <Link
                href={featured.git}
                target="_blank"
                className="rounded-lg border-[0.5px] border-(--color-border) bg-transparent px-2.5 py-1 font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) no-underline transition-colors duration-150 hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
              >
                source code ↗
              </Link>
            )}
          </div>

          <div className="flex flex-wrap gap-[5px]">
            {featured.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-sm border-[0.5px] border-(--color-border) px-[7px] py-0.5 font-[family-name:var(--font-dm-mono),monospace] text-[10px] leading-none text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary projects */}
        {secondary.map((project, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-4 rounded-xl border-[0.5px] border-(--color-border)/70 bg-(--color-bg-secondary) px-5 py-4 transition-colors duration-200 hover:border-(--color-border-hover)"
          >
            <div className="flex-1">
              <div className="mb-1 font-[family-name:var(--font-dm-mono),monospace] text-[11px] text-(--color-text-tertiary)">
                {project.number}
              </div>
              <h3 className="mb-1 font-[family-name:var(--font-sans),sans-serif] text-[14px] font-medium text-(--color-text-primary)">
                {project.title}
              </h3>
              <p className="font-[family-name:var(--font-sans),sans-serif] text-[12px] leading-[1.6] text-(--color-text-secondary)">
                {project.description}
              </p>
            </div>

            <div className="flex flex-shrink-0 flex-col items-end gap-2">
              <span className="font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-tertiary) uppercase">
                {project.status}
              </span>
              <div className="flex gap-1.5">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="rounded-lg border-[0.5px] border-(--color-border) bg-transparent px-2.5 py-1 font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) no-underline transition-colors duration-150 hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
                  >
                    preview ↗
                  </Link>
                )}
                {project.git && (
                  <Link
                    href={project.git}
                    target="_blank"
                    className="rounded-lg border-[0.5px] border-(--color-border) bg-transparent px-2.5 py-1 font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) no-underline transition-colors duration-150 hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
                  >
                    code ↗
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
