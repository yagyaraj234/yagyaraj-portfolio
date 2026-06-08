"use client"
import { useState, useCallback } from "react"

const cards = [
  {
    title: "What Are OKLCH Colors?",
    date: "August 2025",
    content: (
      <div className="flex h-full items-center justify-center gap-3 bg-white px-4">
        {[
          "#a78bfa",
          "#818cf8",
          "#22d3ee",
          "#34d399",
          "#4ade80",
          "#a3e635",
          "#facc15",
          "#fb923c",
          "#f472b6",
        ].map((color, i) => (
          <div
            key={i}
            style={{ backgroundColor: color }}
            className="h-32 w-4 rounded-full shadow-sm"
          />
        ))}
      </div>
    ),
  },
  {
    title: "Understanding Gradients",
    date: "October 2025",
    content: (
      <div className="flex h-full items-center justify-center bg-white">
        <div
          className="h-40 w-48 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #7c3aed 0%, #ec4899 50%, transparent 80%)",
            opacity: 0.85,
          }}
        />
      </div>
    ),
  },
  {
    title: "CSS Grid Mastery",
    date: "December 2025",
    content: (
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80)`,
        }}
      />
    ),
  },
]

export default function InfiniteCardStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const total = cards.length

  // Returns which visual layer (0=front, 1=middle, 2=back) each card index is at
  const getLayer = useCallback(
    (cardIndex: number) => {
      const diff = (cardIndex - activeIndex + total) % total
      return diff // 0 = front, 1 = middle, 2 = back
    },
    [activeIndex, total]
  )

  const layerStyles = [
    // Front card
    {
      transform: "translateY(0px) scale(1)",
      zIndex: 30,
      opacity: 1,
    },
    // Middle card
    {
      transform: "translateY(-22px) scale(0.94)",
      zIndex: 20,
      opacity: 1,
    },
    // Back card
    {
      transform: "translateY(-40px) scale(0.88)",
      zIndex: 10,
      opacity: 1,
    },
  ]

  // When animating: front card flies down, middle advances, back card hides
  const animatingLayerStyles = [
    // Front card — flies down
    {
      transform: "translateY(120%) scale(1)",
      zIndex: 30,
      opacity: 0,
    },
    // Middle card — moves to front position
    {
      transform: "translateY(0px) scale(1)",
      zIndex: 20,
      opacity: 1,
    },
    // Back card — shrinks and fades out (hides behind middle)
    {
      transform: "translateY(-8px) scale(0.82)",
      zIndex: 10,
      opacity: 0,
    },
  ]

  function handleAnimate() {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % total)
      setIsAnimating(false)
    }, 500)
  }

  return (
    <section className="flex flex-col items-center justify-center bg-white dark:bg-zinc-950 select-none">
      <div
        className="relative"
        style={{ width: 360, height: 280, marginTop: 40, paddingTop: 40 }}
      >
        {cards.map((card, i) => {
          const layer = getLayer(i)
          const style = isAnimating
            ? animatingLayerStyles[layer]
            : layerStyles[layer]

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "100%",
                bottom: 0,
                left: 0,
                transition: isAnimating
                  ? "transform 0.5s ease-in-out, opacity 0.4s ease-in-out"
                  : "transform 0.5s ease-in-out",
                ...style,
              }}
            >
              <div
                className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-1.5 pb-4 ring ring-zinc-200 dark:ring-zinc-700 drop-shadow-lg"
                style={{
                  boxShadow:
                    layer === 0
                      ? "0 8px 32px -4px rgba(0,0,0,0.14), 0 2px 8px -2px rgba(0,0,0,0.08)"
                      : "0 2px 8px -2px rgba(0,0,0,0.08)",
                }}
              >
                <div className="h-44 w-full overflow-hidden rounded-xl ring ring-zinc-100">
                  {card.content}
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {card.title}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-400">{card.date}</p>
                  </div>
                  <button className="flex items-center gap-1 rounded-full bg-zinc-900 dark:bg-zinc-700 px-3.5 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-80">
                    Read
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="relative z-50 w-full bg-white dark:bg-zinc-950 py-4">
        <div className="mx-auto w-max rounded-lg bg-white dark:bg-zinc-900 px-2 py-1 text-center text-sm font-medium ring ring-zinc-200 dark:ring-zinc-700 drop-shadow-2xl">
          <button onClick={handleAnimate} disabled={isAnimating}>
            Animate
          </button>
        </div>
      </div>
    </section>
  )
}
