"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, MoonIcon, SunIcon } from "lucide-react";
import { useRef } from "react";
import { NavItem, navItems } from "./components/navbar";
import { useTheme } from "next-themes";
import { PiReadCvLogoFill } from "react-icons/pi";

const social_links = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yagyaraj234",
    icon: FaLinkedin,
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/yagyaraj234",
  //   icon: FaXTwitter,
  // },
  {
    name: "Github",
    url: "https://github.com/yagyaraj234",
    icon: FaGithub,
  },
  {
    name: "Email",
    url: "mailto:workyagyaraj@gmail.com",
    icon: IoMdMail,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1HDRjs-a3BH-40CQi_Ozr_aS175bhOzEm/view?usp=sharing",
    icon: PiReadCvLogoFill,
  },
];
const skills = [
  "React",
  "Next.js",
  "TailwindCSS",
  "Typescript",
  "Node.js",
  "Redux",
  "Prisma",
  "Firebase",
  "MongoDB",
  "Docker",
  "C++",
  "Python",
  "FastAPI",
];

const projectData = [
  // {
  //   id: 32412,
  //   name: "Postly",
  //   git: "https://github.com/yagyaraj234/collab",
  //   status: "⏳ In Progress",
  //   live: "https://collab-neon.vercel.app/",
  //   about: [""],
  // },
  {
    id: 1242,
    name: "Workbot",
    git: "https://github.com/yagyaraj234/intelli-docs",
    status: "⏳ On-Going",
    live: "https://workbot.site",
    about: [
      "Architected a versatile document processing system using RAG methodology, integrating Pinecone for vector embeddings and Jina AI for robust data extraction across multiple file formats (PDFs, code, plain text).",
      "Developed an intuitive workspace system that allows users to create dedicated environments for different purposes (general chat, code reviews, YouTube video analysis), each optimized for specific content types and use cases.",
      "Engineered persistent chat history and similarity search functionality, enabling contextual conversations and intelligent information retrieval across different file types and previous interactions.",
    ],
  },
  {
    id: 12,
    name: "Collab",
    git: "https://github.com/yagyaraj234/collab",
    status: "📦 Completed",
    live: "https://collab-neon.vercel.app/",
    about: [
      "Designed and implemented a Trello-like application architecture, allowing users to create organizations, multiple boards per organization, and manage tasks with status updates and due dates",
      "Integrated Stripe for seamless payment processing within the app, enhancing user experience and enabling subscription management for premium features.",
    ],
  },
];
export default function Home() {
  const about = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const { setTheme } = useTheme();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  function handleScroll(item: string) {
    if (item === "about") {
      scrollToSection(about);
    } else if (item === "journey") {
      scrollToSection(journeyRef);
    } else if (item === "projects") {
      scrollToSection(projectsRef);
    } else {
      scrollToSection(skillsRef);
    }
  }
  return (
    <div className="box-border mb-8">
      <div className="flex justify-end items-center">
        <div className="flex lg:gap-2 ">
          {navItems.map((item: NavItem, idx: number) => {
            const isActive = item.name === "about" ? true : false;
            return (
              <div
                key={idx}
                className={`lg:p-2 transition-colors ease-in-out duration-700  text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer ${
                  isActive ? "dark:text-white  text-gray-900" : ""
                } max-lg:hidden `}
                onClick={() => handleScroll(item.name)}
              >
                {item.name}
              </div>
            );
          })}
          <div className="flex mt-3 cursor-pointer">
            <SunIcon
              className="size-[16px]   hidden  dark:block"
              onClick={() => setTheme("light")}
            />
            <MoonIcon
              className="size-[16px]  dark:hidden"
              onClick={() => setTheme("dark")}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 lg:mt-6 ">
        <div className="relative">
          <div className="rounded-full border-none max-h-[96px] max-w-[96px] overflow-hidden">
            <Image
              src="/notion.png"
              height={96}
              width={96}
              sizes="(max-width: 768px) 64px, 96px"
              alt="user"
              className="rounded-full  hover:transition-transform scale-110 hover:scale-125  duration-300 ease-in-out cursor-pointer bg-slate-500"
            />
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-2 ">
          <h1 className="lg:text-xl normal-case">Hey👋, I&apos;m Yagyaraj</h1>
          <h2 className="max-lg:text-sm">
            A full-stack software engineer, from India.
          </h2>

          <div className="flex gap-x-2">
            {social_links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                className="rounded-full p-1"
              >
                <link.icon
                  size={16}
                  className="text-zinc-900 dark:text-zinc-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:mt-8 mt-4 text-sm ">
        <h2 className="font-semibold">about me.</h2>
        <p className="mt-4">
          {/* Hey! I'm a passionate full-stack developer based in Satna, Madhya
          Pradesh, India. My mission is to transform complex problems into
          simple, beautiful, and intuitive solutions through creative web
          development and design. I'd be excited to discuss potential
          opportunities to collaborate and learn more about your need */}
          I&apos;m a passionate full-stack developer who learns and transforms
          complex problems into simple, beautiful, and intuitive solutions
          through development and design.
          {/* I'm excited to discuss potential job */}
        </p>
      </div>

      {/* <div className=" p-4 space-y-4 bg-neutral-100 rounded-md mt-6 dark:bg-zinc-800 text-sm">
        <div>
          I&apos;m open to collaborate with talented individuals and contribute
          to impactful projects. If you&apos;d like to learn more about my work
          or discuss potential opportunities, feel free to reach out!
        </div>

        <div className="flex gap-4 items-center">
          <button
            className="bg-black rounded-md p-3 text-white text-sm hover:bg-black/80  transition-colors duration-300 ease-in-out"
            onClick={() => window.open("https://x.com/yagyaraj234")}
          >
            Drop message on X
          </button>

          <button
            className="group"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1HH94EgoL2M73UtJD4miG74NAdxWg-HGS/view?usp=sharing"
              )
            }
          >
            <div className="flex justify-between items-center text-sm dark:text-white">
              Resume
              <ArrowUpRight
                className=" group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                size={16}
              />
            </div>
          </button>
        </div>
      </div> */}

      <div className="mt-8">
        <h2 className="font-semibold" ref={journeyRef}>
          {" "}
          journey.{" "}
        </h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4">
          <div className="group flex gap-4">
            <div className="min-h-full min-w-[2px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

            <div className="w-full">
              <div className="flex justify-between min-w-full text-sm">
                <div className="text-xs">
                  <div className="text-[16px] normal-case ">
                    Software Engineering, Rava
                  </div>
                  <div>
                    at,{" "}
                    <a
                      href="https://rava.ai"
                      target="_black"
                      className="underline"
                    >
                      rava.ai
                    </a>
                  </div>
                </div>
                <div className="text-md">Jan, 2024 - Dec, 2024</div>
              </div>

              <p className="lowercase  mt-2 dark:text-zinc-200 text-zinc-800 text-sm ">
                As a core engineer, developed automated content workflows and
                embedding systems for diverse content types. Implemented browser
                caching optimizations reducing server load by 40%. Established
                CI/CD pipelines improving deployment speed by 70%. Built
                personalized content generation features serving 1000+ customers
                based on user personas.
              </p>
            </div>
          </div>
          <div className="group flex gap-4">
            <div className="min-h-full min-w-[2px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

            <div className="w-full">
              <div className="flex justify-between min-w-full ">
                <div className="text-xs">
                  <div className="normal-case text-[16px]">
                    Full Stack Developer, Skillrazr
                  </div>
                  <div className="text-xs">
                    at,{" "}
                    <a
                      href="https://skillrazr.com"
                      target="_black"
                      className="underline"
                    >
                      skillrazr
                    </a>
                  </div>
                </div>
                <div className="text-[16px]">Oct - Dec, 2023</div>
              </div>

              <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm ">
                Engineered interactive Git and SQL learning platforms utilizing
                GCP and Firebase, while implementing responsive design
                principles to optimize cross-device functionality and user
                experience. Led UI/UX improvements across the platform
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold" ref={projectsRef}>
          {" "}
          projects.{" "}
        </h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4 text-sm">
          {projectData.map((project, idx) => (
            <div className="group flex gap-4" key={idx}>
              <div className="min-h-full min-w-[1.5px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

              <div className="w-full">
                <div className="flex justify-start min-w-full text-sm">
                  <div>
                    <div className="text-lg  normal-case flex gap-4 items-center ">
                      {project.name}{" "}
                      <span className="text-xs uppercase  dark:bg-zinc-700 bg-zinc-600 hover:bg-zinc-800 text-white rounded-[4px] p-1 my-1 transition-colors duration-500 ease-in-out delay-75">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex gap-1 items-center group/live  ">
                        <a href={project.live} target="_black">
                          live preview
                        </a>
                        <ArrowUpRight
                          className=" group-hover/live:translate-x-1 transition-all duration-300 ease-in-out"
                          size={16}
                        />
                      </div>
                      <div className="flex gap-1 items-center group/github">
                        <a href={project.git} target="_black">
                          source code
                        </a>
                        <ArrowUpRight
                          className=" group-hover/github:translate-x-1 transition-all duration-300 ease-in-out"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-disc pl-4 mt-2  space-y-1">
                  {project?.about &&
                    project?.about?.map((about, idx) => (
                      <li
                        className="text-sm dark:text-zinc-200 text-zinc-800	"
                        key={idx}
                      >
                        {about}
                      </li>
                    ))}{" "}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8" ref={skillsRef}>
        <h2 className="font-semibold"> skills </h2>

        <div className="flex flex-wrap gap-x-2 gap-y-2 pt-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 text-white hover:dark:bg-zinc-800 dark:bg-zinc-700 rounded-md px-2 py-1 text-xs  transition-colors duration-500 ease-in-out"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8" ref={skillsRef}>
        <h2 className="font-semibold"> contact </h2>
        <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm ">
          Interested in a conversation? Drop DM&apos;s over{" "}
          <a
            className="underline"
            target="_blank"
            href="https://yagyaraj.online/linkedin"
          >
            Linkedin
          </a>{" "}
          or{" "}
          <a href="mailto:workyagyaraj@gmail.com" className="underline">
            Email
          </a>{" "}
          Ask me anything about my work, my projects, or anything else
          you&apos;d like.
        </p>
      </div>
    </div>
  );
}
