import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function Aside({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <details
      open
      className="group my-8 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
    >
      <summary className="flex cursor-pointer items-center gap-3 px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 list-none [&::-webkit-details-marker]:hidden">
        <ChevronRight className="h-4 w-4 text-zinc-500 transition-transform duration-200 group-open:rotate-90" />
        <span>{label}</span>
      </summary>
      <div className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-4 text-zinc-600 dark:text-zinc-400">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </details>
  );
}
