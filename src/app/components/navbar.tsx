"use client"
import Link from "next/link"
import ThemeButton from "./theme-button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  link: string
}

export const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blogs",
    link: "/blog",
  },
  {
    name: "Lab",
    link: "/lab",
  },
]

export const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  return (
    <header
      className={cn(
        `mb-8 flex w-full items-center justify-between pt-4`,
        className
      )}
      role="navigation"
    >
      <nav className="flex items-center gap-4 lg:gap-6" role="navigation">
        {navItems.map((item: NavItem, idx: number) => {
          return (
            <Link
              key={idx}
              href={item.link}
              className={` ${pathname === item.link ? "text-gray-900 dark:text-white" : ""} cursor-pointer text-base whitespace-nowrap text-gray-500 transition-colors duration-700 ease-in-out hover:text-gray-900 dark:text-gray-400 dark:hover:text-white`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
      <ThemeButton />
    </header>
  )
}
