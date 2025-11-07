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
    <div className="flex justify-end items-center">
      <div className="flex lg:gap-2">
        {navItems.map((item: NavItem, idx: number) => {
          const isActive = item.name === "about" ? true : false;
          return (
            <Link
              key={idx}
              href={item.link}
              className={`lg:p-2 transition-colors ease-in-out duration-700 text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer ${
                isActive ? "dark:text-white text-gray-900" : ""
              } max-lg:hidden`}
            >
              {item.name}
            </Link>
          );
        })}
        <ThemeButton />
      </div>
    </div>
  );
};
