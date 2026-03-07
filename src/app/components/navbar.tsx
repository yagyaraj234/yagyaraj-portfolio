import Link from "next/link"
import ThemeButton from "./theme-button"

export interface NavItem {
  name: string
  link: string
}

export const navItems: NavItem[] = [
  {
    name: "about",
    link: "/",
  },
  {
    name: "journey",
    link: "/journey",
  },
  {
    name: "projects",
    link: "/projects",
  },
  {
    name: "blogs",
    link: "/blog",
  },
]

export const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-end pt-4">
      <nav className="flex items-center gap-4 lg:gap-6" role="navigation">
        {navItems.map((item: NavItem, idx: number) => {
          return (
            <Link
              key={idx}
              href={item.link}
              className={`cursor-pointer text-sm whitespace-nowrap text-gray-500 transition-colors duration-700 ease-in-out hover:text-gray-900 max-sm:hidden sm:text-base dark:text-gray-400 dark:hover:text-white`}
            >
              {item.name}
            </Link>
          )
        })}
        {/* <ThemeButton /> */}
      </nav>
    </header>
  )
}
