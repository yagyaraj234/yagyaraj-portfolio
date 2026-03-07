import { cn } from "@/lib/utils"

export function FullWidth({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("col-span-3 !col-start-1 !max-w-full", className)}>
      {children}
    </div>
  )
}
