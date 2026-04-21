import { cn } from "@/lib/utils"
import { Info, TriangleAlert, Zap, CircleCheck } from "lucide-react"

const icons = {
  info: <Info className="h-5 w-5 text-blue-500/80" />,
  warning: <TriangleAlert className="h-5 w-5 text-orange-500/80" />,
  success: <CircleCheck className="h-5 w-5 text-emerald-500/80" />,
  tip: <Zap className="h-5 w-5 text-zinc-500/80" />,
}

type CalloutType = keyof typeof icons

export function Callout({
  children,
  type = "info",
  className,
}: {
  children: React.ReactNode
  type?: CalloutType
  className?: string
}) {
  return (
    <div
      className={cn(
        "my-6 flex items-start gap-4 rounded-xl border p-4 text-sm leading-relaxed shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] transition-colors dark:shadow-none",
        {
          "border-blue-100 bg-blue-50/50 text-blue-900 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-200":
            type === "info",
          "border-orange-100 bg-orange-50/50 text-orange-900 dark:border-orange-900/30 dark:bg-orange-950/20 dark:text-orange-200":
            type === "warning",
          "border-emerald-100 bg-emerald-50/50 text-emerald-900 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-200":
            type === "success",
          "border-zinc-200 bg-zinc-50/50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200":
            type === "tip",
        },
        className
      )}
    >
      <div className="text-xl select-none">{icons[type]}</div>
      <div className="flex-1 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
