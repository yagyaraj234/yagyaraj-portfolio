import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export default function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "min-h-[calc(100vh-180px)] max-w-3xl sm:mx-auto sm:min-w-3xl",
        className
      )}
    >
      {children}
    </div>
  )
}
