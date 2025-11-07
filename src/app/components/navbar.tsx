import Link from "next/link";

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
    link: "#journey",
  },
  {
    name: "projects",
    link: "#projects",
  },
  {
    name: "skills",
    link: "#projects",
  },
  {
    name: "blogs",
    link: "/blogs",
  },
];

export const Navbar = () => {
  return (
    <div className="flex justify-end">
      {navItems.map((item, idx) => {
        const isActive = item.name === "about" ? true : false;
        return (
          <Link
            key={idx}
            href={item.link}
            className={`p-2 transition-colors ease-in-out duration-700 text-gray-500 hover:text-gray-900 dark:hover:text-white ${
              isActive ? "dark:text-white  text-gray-900" : ""
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
