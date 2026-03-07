"use client"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeButton() {
  const { setTheme } = useTheme()
  return (
    <div className="mt-1 flex cursor-pointer">
      <SunIcon
        className="hidden size-[16px] dark:block"
        onClick={() => setTheme("light")}
      />
      <MoonIcon
        className="size-[16px] dark:hidden"
        onClick={() => setTheme("dark")}
      />
    </div>
  )
}
