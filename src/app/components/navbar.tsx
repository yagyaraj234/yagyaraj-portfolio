import Link from "next/link";
import ThemeButton from "./theme-button";

export interface NavItem {
  name: string;
  link: string;
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
];

export const Navbar = () => {
  return (
    <header className="flex justify-end items-center pt-4">
      <nav className="flex lg:gap-2" role="navigation">
        {navItems.map((item: NavItem, idx: number) => {
          return (
            <Link
              key={idx}
              href={item.link}
              className={`sm:p-2 transition-colors ease-in-out duration-700 dark:text-gray-400 text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer  max-sm:hidden`}
            >
              {item.name}
            </Link>
          );
        })}
        <ThemeButton />
      </nav>
    </header>
  );
};
