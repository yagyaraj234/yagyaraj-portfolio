import { cn } from "@/lib/utils"

export function Wide({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "-mx-6 !max-w-[calc(100%+48px)] md:-mx-8 md:!max-w-[calc(100%+64px)]",
        className
      )}
    >
      {children}
    </div>
  )
}
