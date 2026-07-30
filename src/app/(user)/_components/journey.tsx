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
      alt="Wavemaker"
      className="h-max w-full rounded-md"
      loading="eager"
      height={500}
      width={500}
      priority
      unoptimized
    />
    <p className="mt-4 text-sm text-neutral-600 normal-case dark:text-neutral-400">
      Wavemaker offers a low-code development platform for professional
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
    date: "Dec 2024 - Present",
    summary:
      "Building low-code platform layer for production-grade full-stack enterprise applications.",
    description:
      "The transpiler emits a full Next.js app from WaveMaker's proprietary DSL in under 2 seconds. The preview engine replaced a 10-second hard reload with 1-2s HMR. WMX is the extension system that lets teams drop custom React components into WaveMaker apps with two-way data binding and eventing wired at build time.",
    points: [
      "Built a markup-to-React transpiler from scratch, converting WaveMaker's proprietary DSL into production Next.js in under 2 seconds, with SEO and AEO metadata precomputed at generation time and microfrontend compatibility out of the box.",
      "Built a self-healing AI agent that generates WMX components from natural language prompts: it compiles each component, feeds build errors back to itself, and retries until the build passes. Converges in 1-3 iterations across INVOCATION_COUNT production invocations.",
      "Rebuilt studio preview infrastructure from a hard-reload model (10s, no HMR) into a hot-reload engine with 2-4s cold start and 1-2s HMR, rendering user apps without spinning up per-user containers.",
      "Architected WMX, an extension system letting teams plug custom React components into WaveMaker apps with automatic two-way data binding, eventing, and styling injected at build time.",
      "Contributed to a localization agent generating labels from a single prompt: 20,000+ labels across Hindi, Arabic, Russian, Portuguese and more, used in 20+ enterprise applications.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Transpiler",
      "HMR",
      "AI Agents",
      "Micro Frontends",
      "Low-Code Platform",
    ],
    tooltipContent: <WavemakerCard />,
  },
  {
    id: "ravaai",
    role: "Founding Engineer",
    company: "Rava AI",
    href: "https://rava.ai",
    date: "Jan 2024 - Dec 2024",
    summary:
      "Built the entire production backend and the frontend that ran on top of it.",
    description:
      "The backend was Express and Python on GCP Cloud Run: auth, payments, LLM endpoints, document indexing, and a Redis and BullMQ queue that ran thousand-row CSV jobs with adaptive batch sizing and per-row retry, over a hybrid Neo4j and pgvector retrieval layer. On the frontend I built the config-driven form and workflow trigger setup, so new content workflows shipped without code changes.",
    points: [
      "Founding engineer and the only backend engineer on a 4-person team. Built the production backend from scratch in Node.js/Express on GCP Cloud Run: user services, payments (Stripe, Razorpay), LLM endpoints, and document indexing.",
      "Built a Redis and BullMQ job queue for LLM batch processing with adaptive batch sizing (10 rows under low server load, 3-4 under high), per-row retry with a 3-attempt cap, and persistent job state so thousand-row CSV jobs survive browser closes.",
      "Built a multi-format RAG ingestion pipeline (web scraping, document text extraction, OCR for images) feeding a hybrid Neo4j and pgvector retrieval layer: graph nodes for structure, vector search over content.",
      "Built a token metering and billing system with per-plan credit balances checked and deducted on every LLM call, plus per-user rate limiting, custom auth (Google OAuth, email/password), and a GCS and CDN asset layer.",
      "Built the config-driven React form system and workflow trigger setup, rendering workflow-specific input layouts from config so the platform supported new content workflows with zero frontend changes, paired with a two-layer caching strategy cutting server load 40% and response times 50%.",
    ],
    tags: [
      "Node.js",
      "Express",
      "GCP Cloud Run",
      "Redis",
      "BullMQ",
      "PostgreSQL",
      "pgvector",
      "Neo4j",
      "RAG",
      "LLMs",
      "Stripe",
      "React",
      "Next.js",
    ],
    tooltipContent: <RavaAICard />,
  },
  {
    id: "skillrazr",
    role: "Full-stack Developer Intern",
    company: "SkillRazr",
    href: "https://skillrazr.com",
    date: "Oct 2023 - Dec 2023",
    summary:
      "Browser-based Git and SQL sandboxes where learners run real commands.",
    description:
      "The Git playground runs real commands in a sandboxed environment on GCP, built with Node.js and Firebase. The SQL playground executes live queries in the browser against a real database.",
    points: [
      "Built an interactive Git Playground on GCP using Node.js and Firebase, enabling users to practice real Git commands in a sandboxed environment.",
      "Built an interactive SQL Playground where users write and run queries against a live database in the browser.",
      "Shipped responsive layouts across mobile, tablet, and desktop.",
    ],
    tags: ["React", "Node.js", "Firebase", "GCP", "Responsive Design"],
    tooltipContent: <SkillRazrCard />,
  },
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
                  <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {exp.description}
                  </p>

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
