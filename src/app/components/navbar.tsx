"use client"
import Link from "next/link"
import ThemeButton from "./theme-button"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "motion/react"

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
    name: "Writings",
    link: "/blog",
  },
  {
    name: "Lab",
    link: "/lab",
  },
]

export const Navbar = () => {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const routeIndex = navItems.findIndex((item) =>
    item.link === "/" ? pathname === item.link : pathname.startsWith(item.link)
  )

  return (
    <header className="flex w-full items-center justify-end pt-4 max-sm:mb-8">
      <nav
        className="flex items-center gap-1 rounded-full border border-(--color-border) bg-(--color-bg-secondary)/60 p-1 backdrop-blur-sm"
        aria-label="Primary navigation"
      >
        <div className="flex">
          {navItems.map((item: NavItem, index: number) => {
            const isRouteActive = routeIndex === index

            return (
              <Link
                key={item.link}
                href={item.link}
                aria-current={isRouteActive ? "page" : undefined}
                className={`relative grid h-8 place-items-center rounded-full px-2.5 text-center text-xs whitespace-nowrap transition-[color,transform] duration-150 ease-out active:scale-[0.97] ${isRouteActive ? "text-gray-900 dark:text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
              >
                {isRouteActive && (
                  <motion.span
                    layoutId="active-nav-item"
                    aria-hidden="true"
                    initial={false}
                    className="pointer-events-none absolute inset-0 rounded-full bg-white shadow-sm dark:bg-zinc-800"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            type: "tween",
                            duration: 0.2,
                            ease: [0.77, 0, 0.175, 1],
                          }
                    }
                  />
                )}
                <span className="relative">{item.name}</span>
              </Link>
            )
          })}
        </div>
        <ThemeButton />
      </nav>
    </header>
  )
}
