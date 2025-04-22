"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ArrowUpRight, MoonIcon, SunIcon, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { NavItem, navItems } from "./components/navbar";
import { useTheme } from "next-themes";
import { PiReadCvLogoFill } from "react-icons/pi";
import Link from "next/link";
import { motion } from "motion/react";

const social_links = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yagyaraj234",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/yagyaraj234",
    icon: FaGithub,
  },
  {
    name: "Email",
    url: "mailto:hey@yagyaraj.com",
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
  {
    id: 12,
    name: "Collab",
    git: "https://github.com/yagyaraj234/collab",
    status: "📦 Completed",
    live: "https://collab-neon.vercel.app/",
    about: [
      "built a trello-like app with org management, boards, and task tracking",
      "integrated stripe for payments and subscription management",
    ],
    details: [
      "implemented drag-and-drop functionality for intuitive task management",
      "created a responsive ui that works seamlessly on mobile and desktop",
      "built secure auth system with role-based permissions for organizations",
      "designed scalable database schema for handling multiple organizations",
      "implemented real-time updates for collaborative work environments",
    ],
    tech: ["next.js", "tailwind", "prisma", "postgresql", "stripe api"],
  },
  {
    id: 13,
    name: "workbot",
    git: "https://github.com/yagyaraj234/workbot",
    status: "⏳ in progress",
    live: "https://workbot.site",
    about: [
      "building an ai-powered document processing system with rag methodology",
      "creating workspace environments for different document types",
    ],
    details: [
      "integrating pinecone for vector embeddings and fast similarity search",
      "using jina ai for robust data extraction across multiple file formats",
      "implementing persistent chat history with contextual memory",
      "designing custom ui for different workspace types (docs, code, video)",
      "building secure file upload and processing pipeline for sensitive data",
    ],
    tech: ["next.js", "openai api", "pinecone", "jina ai", "vercel ai sdk"],
  },
];

export default function Home() {
  const about = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const [expandedProjects, setExpandedProjects] = useState<{
    [key: number]: boolean;
  }>({});
  const { setTheme } = useTheme();

  const toggleProjectDetails = (id: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
      <motion.div
        className="flex justify-end items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex lg:gap-2">
          {navItems.map((item: NavItem, idx: number) => {
            const isActive = item.name === "about" ? true : false;
            return (
              <motion.div
                key={idx}
                className={`lg:p-2 transition-colors ease-in-out duration-700 text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer ${
                  isActive ? "dark:text-white text-gray-900" : ""
                } max-lg:hidden`}
                onClick={() => handleScroll(item.name)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
              >
                {item.name}
              </motion.div>
            );
          })}
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
        </div>
      </motion.div>
      <motion.div
        className="flex gap-4 lg:mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="rounded-full border-none max-h-[96px] max-w-[96px] overflow-hidden">
            <Image
              src="/notion.png"
              height={96}
              width={96}
              sizes="(max-width: 768px) 64px, 96px"
              alt="user"
              className="rounded-full hover:transition-transform scale-110 hover:scale-125 duration-300 ease-in-out cursor-pointer bg-slate-500"
            />
          </div>
        </motion.div>

        {/* About */}
        <div className="flex flex-col gap-2">
          <motion.h1
            className="lg:text-xl lowercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            hey👋, i&apos;m yagyaraj
          </motion.h1>
          <motion.h2
            className="max-lg:text-sm lowercase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            a full-stack software engineer, from india.
          </motion.h2>

          <motion.div
            className="flex gap-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {social_links.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                className="rounded-full p-1"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  duration: 0.3,
                  delay: 0.6 + idx * 0.1,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <link.icon
                  size={16}
                  className="text-zinc-900 dark:text-zinc-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="lg:mt-8 mt-4 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="font-semibold lowercase">about me.</h2>
        <motion.p
          className="mt-4 lowercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          i&apos;m a passionate full-stack developer who transforms complex
          problems into simple, beautiful solutions through development and
          design.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-8"
        ref={journeyRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="font-semibold lowercase">journey.</h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4">
          <div className="group flex gap-4">
            <div className="min-h-full min-w-[2px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

            <div className="w-full">
              <div className="flex justify-between min-w-full text-sm">
                <div className="text-xs">
                  <div className="text-[16px] lowercase">
                    software engineer,
                  </div>
                  <div className="lowercase">
                    at,{" "}
                    <a
                      href="https://rava.ai"
                      target="_black"
                      className="underline"
                    >
                      rava ai
                    </a>
                  </div>
                </div>
                <div className="text-md">jan - dec, 2024</div>
              </div>

              <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm">
                built automated content workflows and embedding systems.
                implemented browser caching reducing server load by 40%. set up
                ci/cd pipelines improving deployment by 70%. created
                personalized content features for 1000+ users.
              </p>
            </div>
          </div>
          <div className="group flex gap-4">
            <div className="min-h-full min-w-[2px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

            <div className="w-full">
              <div className="flex justify-between min-w-full">
                <div className="text-xs">
                  <div className="lowercase text-[16px]">
                    full stack developer,
                  </div>
                  <div className="text-xs lowercase">
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
                <div className="text-md">oct - dec, 2023</div>
              </div>

              <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm">
                built git and sql learning platforms with gcp and firebase.
                implemented responsive design for cross-device use. led ui/ux
                improvements across platform.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-8"
        ref={projectsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="font-semibold lowercase">projects.</h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4 text-sm">
          {projectData.map((project, idx) => (
            <motion.div
              className="group flex gap-4"
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}

              // whileHover={{ x: 4 }}
            >
              <div className="min-h-full min-w-[1.5px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

              <div className="w-full">
                <div className="flex justify-start min-w-full text-sm">
                  <div className="w-full">
                    <div className="text-lg lowercase flex gap-4 items-center">
                      {project.name}{" "}
                      <span className="text-xs uppercase dark:bg-zinc-700 bg-zinc-600 hover:bg-zinc-800 text-white rounded-[4px] p-1 my-1 transition-colors duration-500 ease-in-out delay-75">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex gap-1 items-center group/live lowercase">
                        <a href={project.live} target="_black">
                          live preview
                        </a>
                        <ArrowUpRight
                          className="group-hover/live:translate-x-1 transition-all duration-300 ease-in-out"
                          size={16}
                        />
                      </div>
                      <div className="flex gap-1 items-center group/github lowercase">
                        <a href={project.git} target="_black">
                          source code
                        </a>
                        <ArrowUpRight
                          className="group-hover/github:translate-x-1 transition-all duration-300 ease-in-out"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  {project?.about &&
                    project?.about?.map((about, idx) => (
                      <li
                        className="text-sm dark:text-zinc-200 text-zinc-800 lowercase"
                        key={idx}
                      >
                        {about}
                      </li>
                    ))}
                </ul>

                <motion.button
                  onClick={() => toggleProjectDetails(project.id)}
                  className="mt-2 flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {expandedProjects[project.id] ? "see less" : "see more"}
                  <ChevronDown size={14} />
                </motion.button>

                {expandedProjects[project.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pl-4"
                  >
                    <ul className="list-disc pl-2 space-y-1 mb-3">
                      {project?.details?.map((detail, idx) => (
                        <motion.li
                          className="text-sm dark:text-zinc-300 text-zinc-700 lowercase"
                          key={idx}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.1 }}
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-medium mb-2 dark:text-zinc-300">
                      tech stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project?.tech?.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded-md text-xs lowercase"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.3 + idx * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="mt-8"
        ref={skillsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="font-semibold lowercase">skills</h2>

        <div className="flex flex-wrap gap-x-2 gap-y-2 pt-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 text-white hover:dark:bg-zinc-800 dark:bg-zinc-700 rounded-md px-2 py-1 text-xs transition-colors duration-500 ease-in-out lowercase"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill.toLowerCase()}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className="font-semibold lowercase">contact</h2>
        <motion.p
          className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          interested in a conversation? drop dm&apos;s over{" "}
          <motion.span whileHover={{ scale: 1.05 }} display="inline-block">
            <Link className="underline" target="_blank" href="/linkedin">
              linkedin
            </Link>
          </motion.span>{" "}
          or{" "}
          <motion.span whileHover={{ scale: 1.05 }} display="inline-block">
            <a href="mailto:hey@yagyaraj.com" className="underline">
              email
            </a>
          </motion.span>
          . ask me anything about my work, projects, or anything else.
        </motion.p>
      </motion.div>
    </div>
  );
}
