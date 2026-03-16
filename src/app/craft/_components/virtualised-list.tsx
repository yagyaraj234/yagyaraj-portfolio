"use client"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type VirtualizedListProps<T> = {
  data: T[]
  renderItem: (item: T, index: number, list: T[]) => ReactNode
  minHeight: number // required min height of the list
  className?: string
  height?: number // list container height default 100%
  rowHeight?: number // if not provided, will be calculated from the first item
  buffer?: number // buffer items to render before and after the visible items default 20
}

export default function VirtualizedList<T>({
  data,
  renderItem,
  className,
  minHeight,
  height,
  rowHeight: defaultRowHeight,
  buffer = 20,
}: VirtualizedListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)

  const [rowHeight, setRowHeight] = useState<number | undefined>(
    defaultRowHeight
  )
  const [range, setRange] = useState({
    start: 0,
    end: 10 + (defaultRowHeight || 0),
  })

  // Measure row height
  useEffect(() => {
    if (!measureRef.current || defaultRowHeight) return

    const h = measureRef.current.getBoundingClientRect().height
    if (h > 0) {
      setRowHeight(h)
    }
  }, [defaultRowHeight])

  // Attach scroll logic after height known
  useEffect(() => {
    if (!containerRef.current || !rowHeight) return

    const el = containerRef.current
    //    get the container height in pixels
    const conatinerHeight = height || el.clientHeight
    //    using rowHeight
    const itemsInView = Math.ceil(conatinerHeight / rowHeight)

    //    setting initial range
    setRange({ start: 0, end: itemsInView + buffer })

    const handleScroll = () => {
      const scrollTop = el.scrollTop

      // now add a buffer of 10 items
      let start = Math.floor(scrollTop / rowHeight)
      let end = start + itemsInView

      if (start >= buffer) {
        start -= buffer
      }
      if (end >= data.length) {
        end += buffer
      }

      setRange((prev) => {
        //    check prev ranges and update if any changes
        if (prev.start === start && prev.end === end) return prev
        return { start, end }
      })
    }

    el.addEventListener("scroll", handleScroll)

    return () => el.removeEventListener("scroll", handleScroll)
  }, [rowHeight])

  // if rowHeight is not there render few items and calculate the height
  function renderFallbackItems() {
    return (
      <>
        {data.slice(0, 20).map((item, i) => (
          <div key={i} ref={i === 0 ? measureRef : undefined}>
            {renderItem(item, i, data)}
          </div>
        ))}
      </>
    )
  }

  const visibleItems = data.slice(range.start, range.end)

  function renderVisibleItems() {
    if (!rowHeight) return null
    return (
      <div
        style={{
          height: data.length * (rowHeight || 0),
          position: "relative",
        }}
      >
        <div
          style={{
            transform: `translateY(${range.start * rowHeight}px)`,
          }}
        >
          {visibleItems.map((item, i) =>
            renderItem(item, range.start + i, data)
          )}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: height || "100%",
        minHeight,
        maxHeight: height || 500,
      }}
      className={cn("overflow-y-auto scroll-smooth", className)}
    >
      {!rowHeight ? renderFallbackItems() : renderVisibleItems()}
    </div>
  )
}
