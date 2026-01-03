import { X } from "lucide-react";

export function Columns({ children }: { children: React.ReactNode }) {
  return (
    <section className="my-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
      {children}
    </section>
  );
}

export function ColumnRight({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute -left-4 -top-8 -bottom-8 w-px bg-zinc-200 dark:bg-zinc-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-300 dark:text-zinc-700">
          <X className="h-4 w-4" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-zinc-300 dark:text-zinc-700">
          <X className="h-4 w-4" />
        </div>
      </div>
      {children}
    </div>
  );
}
