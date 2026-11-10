"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const Heading = ({
  level,
  ...props
}: React.ComponentPropsWithoutRef<"h1"> & { level: "h1" | "h2" | "h3" }) => {
  const [id, setId] = useState(props.id ?? null)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (props.id) return
    if (!ref.current) return
    const innerText = ref.current.innerText
    if (!innerText) return
    const id = innerText.toLowerCase().replace(/[^a-z0-9]/g, "-")
    setId(id)
  }, [props.id])

  const Component = level
  return (
    <Component
      ref={ref}
      {...props}
      className={cn(level !== "h1" && "reveal", props.className)}
      id={id ?? undefined}
    >
      {props.children}
      {id && level !== "h1" && (
        <a
          className="heading-anchor"
          href={`#${id}`}
          aria-label="Link to this section"
        >
          #
        </a>
      )}
    </Component>
  )
}
