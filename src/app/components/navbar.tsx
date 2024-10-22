import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
  ref: string;
}

export const navItems: NavItem[] = [
  {
    name: "about",
    link: "/",
    ref: "aboutRef",
  },
  {
    name: "journey",
    link: "#journey",
    ref: "journeyRef",
  },
  {
    name: "projects",
    link: "#projects",
    ref: "projectsRef",
  },
  {
    name: "skills",
    link: "#projects",
    ref: "skillsRef",
  },
];

export const Navbar = () => {
  return (
    <div className="flex justify-end">
      <div>
        {navItems.map((item) => {
          const isActive = item.name === "about" ? true : false;
          return (
            <Link
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
    </div>
  );
};
