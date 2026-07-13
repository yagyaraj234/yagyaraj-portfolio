"use client"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button
      type="button"
      aria-label="Switch color theme"
      title="Switch color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-8 place-items-center rounded-full text-zinc-500 transition-colors hover:bg-white hover:text-zinc-900 hover:shadow-sm dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <SunIcon aria-hidden="true" className="hidden size-3.5 dark:block" />
      <MoonIcon aria-hidden="true" className="size-3.5 dark:hidden" />
    </button>
  )
}
