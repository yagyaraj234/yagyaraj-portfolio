"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Section, SectionHeader } from "@/app/components/ui/section"
import { TechTag } from "@/app/components/ui/tech-tag"

// ─── Tooltip Cards ────────────────────────────────────────────────────────────
import dynamic from "next/dynamic"
const Preview = dynamic(() => import("@/app/components/ui/preview"), {
  ssr: false,
})

export const RavaAICard = () => (
  <>
    <Image
      src="/tooltip/ravaai.webp"
      alt="Rava AI"
      height={500}
      width={500}
      className="h-max w-full rounded-md"
      loading="eager"
      priority
      unoptimized
    />
    <p className="mt-4 text-sm text-neutral-600 normal-case dark:text-neutral-400">
      Rava AI is an agentic AI-powered go-to-market (GTM) platform for startups,
      automating strategy, marketing content, and investor pitch decks.
    </p>
  </>
)

const SkillRazrCard = () => (
  <>
    <Image
      src="/tooltip/skillrazr.webp"
      alt="SkillRazr"
      className="h-max w-full rounded-md"
      loading="eager"
      priority
      unoptimized
      height={500}
      width={500}
    />
    <p className="mt-4 text-sm text-neutral-600 normal-case dark:text-neutral-400">
      SkillRazr offers online tech training, internships, and skill development
      programs designed to prepare students for jobs.
    </p>
  </>
)

export const WavemakerCard = () => (
  <>
    <Image
      src="/tooltip/wavemaker.webp"
      alt="WaveMaker"
      className="h-max w-full rounded-md"
      loading="eager"
      height={500}
      width={500}
      priority
      unoptimized
    />
    <p className="mt-4 text-sm text-neutral-600 normal-case dark:text-neutral-400">
      WaveMaker offers a low-code development platform for professional
      developers to build web and mobile applications using open standards.
    </p>
  </>
)

// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences = [
  {
    id: "wavemaker",
    role: "Development Engineer",
    company: "WaveMaker",
    href: "https://wavemaker.com",
    date: "Jan 2025 – Present",
    summary:
      "Building low-code platform layer for production-grade full-stack enterprise applications.",
    points: [
      <>
        Architectured the core system that lets applications created on{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          WaveMaker low-code platform
        </strong>{" "}
        be exported as production-ready{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          React/Next.js applications
        </strong>
        .
      </>,
      <>
        Built a{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          plugin
        </strong>{" "}
        that lets teams import and use their own React components inside
        WaveMaker applications, with{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          data binding, events, and styling
        </strong>
        .
      </>,
      <>
        Shipped{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          one-click Angular-to-React migration
        </strong>{" "}
        for WaveMaker apps, delivering{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          40% better performance
        </strong>{" "}
        and Lighthouse scores above{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          80
        </strong>{" "}
        without targeted optimization.
      </>,
      <>
        Cut Studio{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          preview updates from 12s to ~2s
        </strong>{" "}
        for apps with up to{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          130 pages,
        </strong>{" "}
        built localization and WMX agents used 1,450+ and 180+ times.
      </>,
      // <>
      //   Contributed to building AI agents that continuously automate engineering
      //   tasks like generating components, fixing bugs, and raising PRs with
      //   minimal human intervention.
      // </>,
    ],
    tags: [
      "Nextjs",
      "React",
      "Redux",
      "TypeScript",
      "Nodejs",
      "JS Proxy",
      "Low-Code Platform",
      "Studio",
    ],
    tooltipContent: <WavemakerCard />,
  },
  {
    id: "ravaai",
    role: "Founding Engineer",
    company: "Rava AI",
    href: "https://rava.ai",
    date: "Jan – Dec 2024",
    summary:
      "Took the product from zero to production: frontend, backend, DevOps, and AI end-to-end.",
    points: [
      <>
        Owned Rava end to end across{" "}
        <strong> Next.js / React and Node services</strong> , building
        config-driven workflow UI, Firebase Auth, GCP Cloud Run / VMs, Redis,
        GCS + CDN asset delivery, and billing.
      </>,
      <>
        Built a multi-format{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          RAG ingestion pipeline
        </strong>{" "}
        (web, documents, OCR for images) feeding a{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          pgvector retrieval layer
        </strong>
        :{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          graph nodes for structure
        </strong>
        , vector search over content history.
      </>,
      <>
        Cut server load by{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          40%
        </strong>{" "}
        through in-browser and server-side caching.
      </>,
      <>
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          Implemented token metering and billing system
        </strong>{" "}
        with{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          per-plan credit
        </strong>{" "}
        balances checked and deducted on every LLM call, plus per-user rate
        limiting.
      </>,
    ],
    tags: [
      "Next.js",
      "TailwindCss",
      "Shadcn",
      "Redux",
      "Node.js",
      "Redis",
      "GCP",
      "LLMs",
      "Embeddings",
      "CI/CD",
    ],
    tooltipContent: <RavaAICard />,
  },
  // {
  //   id: "skillrazr",
  //   role: "Full-stack Developer Intern",
  //   company: "SkillRazr",
  //   href: "https://skillrazr.com",
  //   date: "Oct – Dec 2023",
  //   summary:
  //     "Interactive developer learning platforms built on GCP and Firebase.",
  //   points: [
  //     <>
  //       Built{" "}
  //       <strong className="font-medium text-zinc-900 dark:text-zinc-100">
  //         interactive Git & SQL learning environments
  //       </strong>{" "}
  //       real commands in a sandboxed browser, not videos.
  //     </>,
  //     <>
  //       Shipped a{" "}
  //       <strong className="font-medium text-zinc-900 dark:text-zinc-100">
  //         responsive UI system
  //       </strong>{" "}
  //       across mobile, tablet, and desktop, lifting completion rates.
  //     </>,
  //     <>
  //       Led{" "}
  //       <strong className="font-medium text-zinc-900 dark:text-zinc-100">
  //         UI/UX upgrades
  //       </strong>{" "}
  //       standardising components and reducing learner friction.
  //     </>,
  //   ],
  //   tags: ["React", "Firebase", "GCP", "Responsive Design"],
  //   tooltipContent: <SkillRazrCard />,
  // },
]

// ─── Component ────────────────────────────────────────────────────────────────
export function Journey() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <Section id="experience">
      <SectionHeader id="experience-title" title="Experience" />

      <div className="mt-4 flex w-full flex-col">
        {experiences.map((exp) => {
          const isOpen = openId === exp.id
          return (
            <div
              key={exp.id}
              className="group border-b border-neutral-200 dark:border-neutral-800"
            >
              {/* ── Row header ── */}
              <button
                onClick={() => toggle(exp.id)}
                className="flex w-full cursor-pointer items-start justify-between gap-3 py-3.5 text-left"
                aria-expanded={isOpen}
              >
                <div className="flex min-w-0 flex-col gap-1">
                  {/* Role · Company */}
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </span>
                    <span className="text-xs text-neutral-400">·</span>
                    <Link
                      href={exp.href}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center py-1 text-sm text-neutral-500 underline-offset-2 transition-colors duration-200 hover:text-yellow-500 hover:underline dark:text-neutral-400"
                    >
                      <Preview
                        containerClassName="p-0"
                        content={exp.tooltipContent}
                      >
                        <span className="cursor-pointer">{exp.company}</span>
                      </Preview>
                    </Link>
                  </div>
                  {/* Date  shown inline on mobile, moves to the right on desktop */}
                  <span className="font-dm-mono text-xs text-neutral-500 tabular-nums sm:hidden dark:text-neutral-400">
                    {exp.date}
                  </span>
                  {/* Summary  desktop only */}
                  <p className="text-[13px] text-neutral-500 max-sm:hidden dark:text-neutral-400">
                    {exp.summary}
                  </p>
                </div>

                {/* Date (desktop) + toggle */}
                <div className="flex shrink-0 items-center gap-3 pt-0.5">
                  <span className="font-dm-mono text-xs text-neutral-500 tabular-nums max-sm:hidden dark:text-neutral-400">
                    {exp.date}
                  </span>
                  <span
                    className="font-dm-mono text-sm text-neutral-400 transition-transform duration-200"
                    style={{
                      display: "inline-block",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </div>
              </button>

              {/* ── Expandable body ── */}
              <div
                aria-hidden={!isOpen}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? "600px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="pb-4">
                  <ul className="flex flex-col gap-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                        <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <TechTag key={tag} label={tag} size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
