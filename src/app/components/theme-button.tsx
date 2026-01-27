"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { setTheme } = useTheme();
  return (
    <div className="flex mt-1 cursor-pointer">
      <SunIcon
        className="size-[16px] hidden dark:block"
        onClick={() => setTheme("light")}
      />
      <MoonIcon
        className="size-[16px] dark:hidden"
        onClick={() => setTheme("dark")}
      />
    </div>
  );
}
