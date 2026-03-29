import Link from "next/link"

const projectsData = [
  {
    number: "01",
    title: "Collab",
    status: "Completed",
    description:
      "Trello-like project management app with organizations, boards, and task tracking. Integrated Stripe for subscription and payment management.",
    live: "https://collab.yagyaraj.com",
    git: "https://github.com/yagyaraj/collab",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
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
    <section className="mt-8 mb-6" aria-label="Projects">
      <h2 className="text-lg font-semibold">Projects</h2>

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[12px]">
        {projectsToDisplay.map((project, idx) => (
          <div
            key={idx}
            className="relative block cursor-pointer rounded-[12px] border-[0.5px] border-(--color-border) bg-(--color-bg-secondary) p-5 transition-colors duration-200 ease-in-out hover:border-(--color-border-hover)"
          >
            {project.status && (
              <div className="absolute top-5 right-5 font-[family-name:var(--font-dm-mono),monospace] text-[10px] leading-none text-(--color-text-tertiary) uppercase">
                {project.status}
              </div>
            )}

            <div className="mb-[10px] font-[family-name:var(--font-dm-mono),monospace] text-[11px] leading-none text-(--color-text-tertiary)">
              {project.number}
            </div>

            <h3 className="mb-[6px] font-[family-name:var(--font-sans),sans-serif] text-[14px] leading-snug font-medium text-(--color-text-primary)">
              {project.title}
            </h3>

            <p className="mb-[14px] font-[family-name:var(--font-sans),sans-serif] text-[12px] leading-[1.6] text-(--color-text-secondary)">
              {project.description}
            </p>

            <div className="mb-[12px] flex flex-row gap-[8px]">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="rounded-[8px] border-[0.5px] border-(--color-border) bg-transparent px-[10px] py-[4px] font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) normal-case no-underline transition-colors duration-150 ease-in-out hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
                >
                  live preview ↗
                </Link>
              )}
              {project.git && (
                <Link
                  href={project.git}
                  target="_blank"
                  className="rounded-[8px] border-[0.5px] border-(--color-border) bg-transparent px-[10px] py-[4px] font-[family-name:var(--font-dm-mono),monospace] text-[10px] text-(--color-text-secondary) normal-case no-underline transition-colors duration-150 ease-in-out hover:border-(--color-border-hover) hover:text-(--color-text-primary)"
                >
                  source code ↗
                </Link>
              )}
            </div>

            <div className="flex flex-wrap gap-[5px]">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="rounded-[4px] border-[0.5px] border-(--color-border) bg-transparent px-[7px] py-[2px] font-[family-name:var(--font-dm-mono),monospace] text-[10px] leading-none text-(--color-text-tertiary) normal-case"
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
