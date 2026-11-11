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
        "reveal my-6 flex items-start gap-4 rounded-xl p-4 text-base leading-relaxed",
        {
          "bg-blue-50 text-blue-900 dark:bg-blue-950/20 dark:text-blue-200":
            type === "info",
          "bg-orange-50 text-orange-900 dark:bg-orange-950/20 dark:text-orange-200":
            type === "warning",
          "bg-emerald-50 text-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-200":
            type === "success",
          "bg-zinc-50 text-zinc-900 dark:bg-zinc-900/50 dark:text-zinc-200":
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
