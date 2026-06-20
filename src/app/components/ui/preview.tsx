"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export const Preview = ({
  content,
  children,
  containerClassName,
}: {
  content: string | React.ReactNode
  children: React.ReactNode
  containerClassName?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLSpanElement>(null)

  // ─── position calculation ───────────────────────────────────────────────────
  const calculatePosition = (mouseX: number, mouseY: number) => {
    if (!contentRef.current || !containerRef.current)
      return { x: mouseX + 12, y: mouseY + 12 }

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const tooltipWidth = 240
    const tooltipHeight = contentRef.current.scrollHeight

    const absoluteX = containerRect.left + mouseX
    const absoluteY = containerRect.top + mouseY

    let finalX = mouseX + 12
    let finalY = mouseY + 12

    if (absoluteX + 12 + tooltipWidth > viewportWidth) {
      finalX = mouseX - tooltipWidth - 12
    }
    if (absoluteX + finalX < 0) {
      finalX = -containerRect.left + 12
    }
    if (absoluteY + 12 + tooltipHeight > viewportHeight) {
      finalY = mouseY - tooltipHeight - 12
    }
    if (absoluteY + finalY < 0) {
      finalY = -containerRect.top + 12
    }

    return { x: finalX, y: finalY }
  }

  const updateMousePosition = (mouseX: number, mouseY: number) => {
    setMouse({ x: mouseX, y: mouseY })
    const newPosition = calculatePosition(mouseX, mouseY)
    setPosition(newPosition)
  }

  // ─── recalculate position when tooltip becomes visible ──────────────────────
  // single rAF so content has painted and scrollHeight is accurate
  useEffect(() => {
    if (!isVisible) return
    requestAnimationFrame(() => {
      const newPosition = calculatePosition(mouse.x, mouse.y)
      setPosition(newPosition)
    })
  }, [isVisible, mouse.x, mouse.y])

  // ─── event handlers ─────────────────────────────────────────────────────────
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    setIsVisible(true)
    const rect = e.currentTarget.getBoundingClientRect()
    updateMousePosition(e.clientX - rect.left, e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 })
    setPosition({ x: 0, y: 0 })
    setIsVisible(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!isVisible) return
    const rect = e.currentTarget.getBoundingClientRect()
    updateMousePosition(e.clientX - rect.left, e.clientY - rect.top)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLSpanElement>) => {
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    updateMousePosition(touch.clientX - rect.left, touch.clientY - rect.top)
    setIsVisible(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsVisible(false)
      setMouse({ x: 0, y: 0 })
      setPosition({ x: 0, y: 0 })
    }, 2000)
  }

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (window.matchMedia("(hover: none)").matches) {
      e.preventDefault()
      if (isVisible) {
        setIsVisible(false)
        setMouse({ x: 0, y: 0 })
        setPosition({ x: 0, y: 0 })
      } else {
        const rect = e.currentTarget.getBoundingClientRect()
        updateMousePosition(e.clientX - rect.left, e.clientY - rect.top)
        setIsVisible(true)
      }
    }
  }

  // ─── render ─────────────────────────────────────────────────────────────────
  return (
    <span
      ref={containerRef}
      className={cn("relative inline-block", containerClassName)}
      suppressHydrationWarning
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {/* children always render — no condition, no hydration gap */}
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="preview-card"
            initial={{ opacity: 0, scale: 0.96, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-none absolute z-50 min-w-60 overflow-hidden rounded-md border border-transparent bg-white shadow-sm ring-1 shadow-black/5 ring-black/5 dark:bg-neutral-900 dark:shadow-white/10 dark:ring-white/5"
            style={{
              top: position.y,
              left: position.x,
              willChange: "opacity, transform",
            }}
          >
            <div
              ref={contentRef}
              className="h-max overflow-y-auto p-2 text-sm text-neutral-600 dark:text-neutral-400"
              style={{ maxHeight: "48vh" }} // CSS replaces JS height measurement
            >
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

export default Preview
