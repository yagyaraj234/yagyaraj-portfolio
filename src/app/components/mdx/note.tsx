import { cn } from "@/lib/utils";

export function InlineNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative my-4 2xl:my-0 2xl:[&_[data-note]]:absolute 2xl:[&_[data-note]]:top-0 2xl:[&_[data-note]]:left-[calc(100%+2rem)] 2xl:[&_[data-note]]:w-[200px]">
      {children}
    </div>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-200",
        "2xl:border-none 2xl:bg-transparent 2xl:p-0 2xl:text-gray-500 2xl:dark:text-gray-400 font-handwriting text-sm 2xl:text-xs leading-relaxed transform rotate-0 2xl:rotate-1"
      )}
      data-note
    >
      <span className="2xl:hidden font-bold mr-2 text-emerald-700 dark:text-emerald-400">
        Note:
      </span>
      {children}
    </div>
  );
}
