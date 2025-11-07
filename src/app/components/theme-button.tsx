"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { setTheme } = useTheme();
  return (
    <motion.div
      className="flex mt-3 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <SunIcon
        className="size-[16px] hidden dark:block"
        onClick={() => setTheme("light")}
      />
      <MoonIcon
        className="size-[16px] dark:hidden"
        onClick={() => setTheme("dark")}
      />
    </motion.div>
  );
}
