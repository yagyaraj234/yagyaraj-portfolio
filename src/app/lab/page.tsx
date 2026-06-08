"use client"

import { useState } from "react"
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
  span?: "normal" | "wide"
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
    span: "wide",
  },
  {
    id: "pricing",
    title: "Pricing Section",
    description:
      "Three-tier pricing with a highlighted plan, feature checklist rows, and CTA buttons.",
    category: "Components",
    status: "new",
    component: PricingSection,
    span: "wide",
  },
  {
    id: "animated-cards",
    title: "Animated Cards",
    description:
      "Media cards with video backgrounds, aura blur effects, and layered hover interactions.",
    category: "Motion",
    status: "new",
    component: () => (
      <div className="flex items-center justify-center gap-4 p-6 max-sm:flex-col">
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
          btnClass="bg-zinc-800 text-white hover:bg-zinc-900/70"
        />
      </div>
    ),
    span: "wide",
  },
  {
    id: "infinite-stack",
    title: "Infinite Card Stack",
    description:
      "Auto-scrolling card stack with smooth looping and pause-on-hover.",
    category: "Motion",
    status: "new",
    component: InfiniteCardStack,
    span: "wide",
  },
]

// ─── status badge ─────────────────────────────────────────────────────────────

const statusStyles: Record<Experiment["status"], string> = {
  new: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400",
  stable: "bg-slate-500/10 text-slate-500",
  wip: "bg-amber-500/12 text-amber-600 dark:text-amber-400",
}
const statusLabel: Record<Experiment["status"], string> = {
  new: "New",
  stable: "Stable",
  wip: "WIP",
}

function StatusBadge({ status }: { status: Experiment["status"] }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide ${statusStyles[status]}`}
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
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-all duration-150 ${
        active
          ? "bg-foreground text-background shadow-sm"
          : "bg-foreground/6 text-foreground/50 hover:bg-foreground/10 hover:text-foreground/80"
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
    <div
      className={`group border-foreground/8 hover:border-foreground/18 flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 ${exp.span === "wide" ? "col-span-2" : "col-span-1"}`}
    >
      {/* Meta row — always visible */}
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <div className="flex flex-col gap-1.5">
          {/* Category + status */}
          <div className="flex items-center gap-2">
            <span className="text-foreground/35 text-[11px] font-medium tracking-[0.07em] uppercase">
              {exp.category}
            </span>
            <span className="text-foreground/20">·</span>
            <StatusBadge status={exp.status} />
          </div>

          {/* Title */}
          <h3 className="text-foreground font-semibold tracking-[-0.02em]">
            {exp.title}
          </h3>

          {/* Description */}
          <p className="text-foreground/50 text-[13px] leading-relaxed text-balance">
            {exp.description}
          </p>
        </div>

        {/* View / Close button */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className={`shrink-0 rounded-lg px-3 py-1.5 text-[13px] font-medium ring-[0.5px] transition-all duration-150 active:scale-95 ${
            expanded
              ? "bg-foreground text-background ring-foreground/20"
              : "bg-foreground/6 text-foreground/60 ring-foreground/10 hover:bg-foreground/10 hover:text-foreground"
          }`}
        >
          {expanded ? "Close" : "View"}
        </button>
      </div>

      {expanded && (
        <div className="border-foreground/8 bg-foreground/[0.015] border-t sm:p-6">
          <Component />
        </div>
      )}
    </div>
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
      {/* Page header */}
      <div className="border-foreground/8 mt-8 flex items-end justify-between gap-4 border-b pb-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold tracking-[-0.03em]">Lab</h1>
          <p className="text-foreground/50 text-[14px]">
            A page where i put all my experiments :)
          </p>
        </div>
        <span className="text-foreground/30 mb-1 font-mono text-[12px]">
          {count} experiment{count !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Category filter */}
      <div className="mt-5 flex items-center gap-2">
        {categories.map((c) => (
          <CategoryPill
            key={c}
            label={c}
            active={activeCategory === c}
            onClick={() => setActiveCategory(c)}
          />
        ))}
      </div>

      {/* Experiment list */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {filtered.map((exp) => (
          <ExperimentCard key={exp.id} exp={exp} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-24 text-center">
          <p className="text-foreground/30 text-[13px]">
            No experiments in this category yet.
          </p>
        </div>
      )}
    </main>
  )
}
