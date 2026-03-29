"use client"
import Link from "next/link"
import ThemeButton from "./theme-button"
import { usePathname } from "next/navigation"

export interface NavItem {
  name: string
  link: string
}

export const navItems: NavItem[] = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "writings",
    link: "/writings",
  },
]

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="flex w-full items-center justify-end pt-4 max-sm:mb-8">
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
        <ThemeButton />
      </nav>
    </header>
  )
}
