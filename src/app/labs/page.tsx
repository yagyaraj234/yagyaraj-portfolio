"use client"

import { useState } from "react"
import { PageHero } from "@/app/components/ui/page-hero"
import AnimatedCard from "./_components/animated-card"
import ChatBox from "./_components/chat-input"
import InfiniteCardStack from "./_components/infinite-card-stack"
import PricingSection from "./_components/pricing-section"

// ─── types ───────────────────────────────────────────────────────────────────

type Category = "All" | "Components" | "Layouts" | "Motion"

interface Experiment {
  id: string
  title: string
  description: string
  category: Exclude<Category, "All">
  status: "stable" | "wip" | "new"
  component: React.ComponentType
}

// ─── data ────────────────────────────────────────────────────────────────────

const experiments: Experiment[] = [
  {
    id: "chat-input",
    title: "Chat Input",
    description:
      "Gemini-style input with rainbow gradient border, toggle modes, file attachments, and a send button that appears on demand.",
    category: "Components",
    status: "new",
    component: ChatBox,
  },
  // {
  //   id: "bento-grid",
  //   title: "Bento Grid",
  //   description:
  //     "Asymmetric feature grid with mixed cell sizes and subtle hover depth.",
  //   category: "Layouts",
  //   status: "stable",
  //   component: BentoGrid,
  // },
  {
    id: "pricing",
    title: "Pricing Section",
    description:
      "Three-tier pricing with a highlighted plan, feature checklist rows, and CTA buttons.",
    category: "Components",
    status: "new",
    component: PricingSection,
  },
  {
    id: "animated-cards",
    title: "Animated Cards",
    description:
      "Media cards with video backgrounds, aura blur effects, and layered hover interactions.",
    category: "Motion",
    status: "new",
    component: () => (
      <div className="flex flex-wrap items-center justify-center gap-4 p-6">
        <AnimatedCard
          title="Blurred Aura"
          description="A soft, diffused form fading into warm gradients - minimal, calm, and atmospheric."
          src="/gas.mp4"
        />
        <AnimatedCard
          title="Liquid Fire Form"
          description="A vivid macro of glowing, petal-like forms capturing the raw flow of heat and texture."
          className="bg-white text-zinc-700"
          src="/flower.mp4"
        />
      </div>
    ),
  },
  {
    id: "infinite-stack",
    title: "Infinite Card Stack",
    description:
      "Cycle through a layered card stack with a smooth, manual transition.",
    category: "Motion",
    status: "new",
    component: InfiniteCardStack,
  },
]

// ─── status badge ─────────────────────────────────────────────────────────────

const statusStyles: Record<Experiment["status"], string> = {
  new: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
  stable: "bg-slate-500/10 text-(--color-text-secondary)",
  wip: "bg-amber-500/12 text-amber-700 dark:text-amber-400",
}
const statusLabel: Record<Experiment["status"], string> = {
  new: "New",
  stable: "Stable",
  wip: "WIP",
}

function StatusBadge({ status }: { status: Experiment["status"] }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[13px] font-medium ${statusStyles[status]}`}
    >
      {statusLabel[status]}
    </span>
  )
}

// ─── category pill ────────────────────────────────────────────────────────────

const categories: Category[] = ["All", "Components", "Motion"]

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: Category
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      aria-pressed={active}
      onClick={onClick}
      className={`h-9 rounded-full px-3.5 text-[13px] font-medium transition-colors duration-150 ease-out ${
        active
          ? "bg-foreground text-background"
          : "bg-(--color-bg-secondary) text-(--color-text-secondary) hover:text-(--color-text-primary)"
      }`}
    >
      {label}
    </button>
  )
}

// ─── experiment card ──────────────────────────────────────────────────────────

function ExperimentCard({ exp }: { exp: Experiment }) {
  const [expanded, setExpanded] = useState(true)
  const Component = exp.component

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-(--color-bg-secondary)">
      {/* Meta row  always visible */}
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="flex flex-col gap-1.5">
          {/* Category + status */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-(--color-text-tertiary)">
              {exp.category}
            </span>
            <span aria-hidden="true" className="text-(--color-text-tertiary)">
              ·
            </span>
            <StatusBadge status={exp.status} />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold tracking-tight text-(--color-text-primary)">
            {exp.title}
          </h2>

          {/* Description */}
          <p className="max-w-[60ch] text-base leading-relaxed text-(--color-text-primary)">
            {exp.description}
          </p>
        </div>

        {/* View / Close button */}
        <button
          aria-expanded={expanded}
          aria-label={`${expanded ? "Close" : "View"} ${exp.title}`}
          onClick={() => setExpanded((v) => !v)}
          className={`h-9 shrink-0 rounded-lg px-3 text-[13px] font-medium transition-colors duration-150 ease-out ${
            expanded
              ? "bg-foreground text-background"
              : "bg-black/[0.06] text-(--color-text-primary) hover:bg-black/[0.1] dark:bg-white/[0.08] dark:hover:bg-white/[0.14]"
          }`}
        >
          {expanded ? "Close" : "View"}
        </button>
      </div>

      {expanded && (
        <div className="detail-enter mx-1.5 mb-1.5 overflow-hidden rounded-xl bg-white">
          <Component />
        </div>
      )}
    </article>
  )
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function LabsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filtered =
    activeCategory === "All"
      ? experiments
      : experiments.filter((e) => e.category === activeCategory)

  const count = filtered.length

  return (
    <main className="flex-1 pb-24">
      <PageHero
        title="Experiments"
        subtitle="Small interface and motion studies, built to get the feel right."
      />

      {/* Category filter */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <CategoryPill
            key={c}
            label={c}
            active={activeCategory === c}
            onClick={() => setActiveCategory(c)}
          />
        ))}
        <span
          role="status"
          className="ml-auto text-[13px] text-(--color-text-tertiary)"
        >
          {count} experiment{count !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Experiment list */}
      <div className="mt-6 flex flex-col gap-3">
        {filtered.map((exp) => (
          <ExperimentCard key={exp.id} exp={exp} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-24 text-center">
          <p className="text-base text-(--color-text-tertiary)">
            No experiments in this category yet.
          </p>
        </div>
      )}
    </main>
  )
}
