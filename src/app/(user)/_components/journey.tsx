"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// ─── Tooltip Cards ────────────────────────────────────────────────────────────
import dynamic from "next/dynamic"
const Preview = dynamic(() => import("@/app/components/ui/preview"), {
  ssr: false,
})

export const RavaAICard = () => (
  <div>
    <Image
      src="/tooltip/ravaai.webp"
      alt="Rava AI"
      width={100}
      height={360}
      className="h-max w-full rounded-md"
      loading="eager"
      priority
      unoptimized
    />
    <p className="mt-4 text-base text-neutral-600 normal-case dark:text-neutral-400">
      Rava AI is an agentic AI-powered go-to-market (GTM) platform for startups,
      automating strategy, marketing content, and investor pitch decks.
    </p>
  </div>
)

const SkillRazrCard = () => (
  <div>
    <Image
      src="/tooltip/skillrazr.webp"
      alt="SkillRazr"
      width={100}
      height={360}
      className="h-max w-full rounded-md"
      loading="eager"
      priority
      unoptimized
    />
    <p className="mt-4 text-base text-neutral-600 normal-case dark:text-neutral-400">
      SkillRazr offers online tech training, internships, and skill development
      programs designed to prepare students for jobs.
    </p>
  </div>
)

export const WavemakerCard = () => (
  <div>
    <Image
      src="/tooltip/wavemaker.webp"
      alt="WaveMaker"
      width={100}
      height={360}
      className="h-max w-full rounded-md"
      loading="eager"
      priority
      unoptimized
    />
    <p className="mt-4 text-base text-neutral-600 normal-case dark:text-neutral-400">
      WaveMaker offers a low-code development platform for professional
      developers to build web and mobile applications using open standards.
    </p>
  </div>
)

// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences = [
  {
    id: "wavemaker",
    role: "Development Engineer",
    company: "WaveMaker",
    href: "https://wavemaker.com",
    date: "jan 2025 – present",
    summary:
      "React runtime and code generation architecture for scalable app exports.",
    points: [
      <>
        Contributed to the{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          React runtime engine
        </strong>{" "}
        powering WaveMaker Studio — the layer responsible for interpreting
        low-code definitions and rendering them as production-ready React
        applications.
      </>,
      <>
        Designed a{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          JavaScript Proxy-based state management
        </strong>{" "}
        system to track and coordinate complex application state across hundreds
        of dynamically generated components — without requiring manual wiring.
      </>,
      <>
        Built{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          code generation pipelines
        </strong>{" "}
        that export clean, maintainable React codebases from visual studio
        definitions, enabling teams to own and extend their output outside the
        platform.
      </>,
      <>
        Worked deep in the{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          platform layer
        </strong>{" "}
        — the kind of infrastructure most engineers never touch, where
        reliability and predictability matter more than features.
      </>,
    ],
    tags: [
      "React",
      "TypeScript",
      "JS Proxy",
      "Code Generation",
      "Platform Engineering",
    ],
    tooltipContent: <WavemakerCard />,
  },
  {
    id: "ravaai",
    role: "Software Engineer",
    company: "Rava AI",
    href: "https://rava.ai",
    date: "jan – dec 2024",
    summary:
      "Took the product from zero to production — frontend, backend, DevOps, and AI end-to-end.",
    points: [
      <>
        Owned the product end-to-end at a seed-stage AI startup — from{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          system design to deployment
        </strong>
        , across frontend, backend, DevOps, and AI integrations with no
        dedicated team per layer.
      </>,
      <>
        Built{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          automated content pipelines
        </strong>{" "}
        using LLM APIs, embeddings, and vector search — processing diverse
        content types and delivering them through persona-based targeting for{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          1000+ customers
        </strong>
        .
      </>,
      <>
        Cut{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          server load by 40%
        </strong>{" "}
        through strategic browser caching — reducing infrastructure costs
        without touching the core application logic.
      </>,
      <>
        Reduced{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          deploy time by 70%
        </strong>{" "}
        by building a CI/CD pipeline from scratch — turning multi-hour manual
        deploys into single-click automated releases.
      </>,
    ],
    tags: ["Next.js", "Node.js", "LLMs", "Embeddings", "CI/CD", "GCP"],
    tooltipContent: <RavaAICard />,
  },
  {
    id: "skillrazr",
    role: "Full-stack Developer",
    company: "SkillRazr",
    href: "https://skillrazr.com",
    date: "oct – dec 2023",
    summary:
      "Interactive developer learning platforms built on GCP and Firebase.",
    points: [
      <>
        Built{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          interactive Git and SQL learning environments
        </strong>{" "}
        — hands-on platforms where developers practice real commands in a
        sandboxed browser interface, not just watch videos.
      </>,
      <>
        Designed and shipped a{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          responsive UI system
        </strong>{" "}
        that worked consistently across mobile, tablet, and desktop —
        significantly improving completion rates for learners on smaller
        devices.
      </>,
      <>
        Led{" "}
        <strong className="font-medium text-zinc-900 dark:text-zinc-100">
          UI/UX upgrades
        </strong>{" "}
        across the platform — standardising component patterns, improving visual
        consistency, and reducing friction in the learner journey.
      </>,
    ],
    tags: ["React", "Firebase", "GCP", "Responsive Design"],
    tooltipContent: <SkillRazrCard />,
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export function Journey() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Experiences</h2>

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
                className="flex w-full cursor-pointer items-start justify-between gap-4 py-3.5 text-left"
                aria-expanded={isOpen}
              >
                <div className="flex flex-col gap-1">
                  {/* Role · Company */}
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </span>
                    <span className="text-xs text-neutral-400">·</span>
                    <Link
                      href={exp.href}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm text-neutral-500 underline-offset-2 transition-colors duration-200 hover:text-yellow-500 hover:underline dark:text-neutral-400"
                    >
                      <Preview
                        containerClassName="p-0 text-neutral-600 dark:text-neutral-400"
                        content={exp.tooltipContent}
                      >
                        <span className="cursor-pointer">{exp.company}</span>
                      </Preview>
                    </Link>
                  </div>
                  {/* Summary — always visible */}
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {exp.summary}
                  </p>
                </div>

                {/* Date + toggle */}
                <div className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                    {exp.date}
                  </span>
                  <span
                    className="font-mono text-sm text-neutral-400 transition-transform duration-200"
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
                        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-neutral-200 px-2 py-0.5 font-mono text-[10px] text-neutral-400 dark:border-neutral-700 dark:text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
