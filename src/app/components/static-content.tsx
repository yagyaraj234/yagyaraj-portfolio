import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ArrowUpRight } from "lucide-react";
import { PiReadCvLogoFill } from "react-icons/pi";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export const social_links = [
  {
    name: "Email",
    url: "mailto:hey@yagyaraj.com",
    icon: IoMdMail,
  },
  {
    name: "Github",
    url: "https://github.com/yagyaraj234",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yagyaraj234",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yagyaraj234",
    icon: FaXTwitter,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1HDRjs-a3BH-40CQi_Ozr_aS175bhOzEm/view?usp=sharing",
    icon: PiReadCvLogoFill,
  },
];

export const skills = [
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

export const projectData = [
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
];

export function StaticContent() {
  return (
    <div className="box-border mb-8">
      {/* Static Header - Theme toggle will be added by client component */}
      <div className="flex justify-end items-center">
        <div className="flex lg:gap-2">
          {/* Navigation items will be handled by client component */}
          <div className="flex mt-3 cursor-pointer">
            {/* Theme toggle will be added by client component */}
          </div>
        </div>
      </div>

      {/* Static Hero Section */}
      <div className="flex gap-4 lg:mt-6">
        <div className="relative">
          <div className="rounded-full border-none max-h-[96px] max-w-[96px] overflow-hidden">
            <Image
              src="/notion.png"
              height={96}
              width={96}
              sizes="(max-width: 768px) 64px, 96px"
              alt="user"
              className="rounded-full bg-slate-500"
            />
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-2">
          <h1 className="lg:text-xl">Hey👋, I&apos;m Yagyaraj</h1>
          <h2 className="max-lg:text-sm">
            Full-Stack Software Engineer | India
          </h2>

          <div className="flex gap-x-2">
            {social_links.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                target="_blank"
                className="rounded-full p-1"
                aria-label={link.name}
              >
                <link.icon
                  aria-hidden="true"
                  size={16}
                  className="text-zinc-900 dark:text-zinc-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Static About Section */}
      <div className="lg:mt-8 mt-4 text-sm">
        <h2 className="font-semibold lowercase">about me.</h2>
        <p className="mt-4 lowercase">
          i&apos;m a passionate full-stack developer who learns and transforms
          complex problems into simple, beautiful, and intuitive solutions
          through development and design.
        </p>
      </div>

      {/* Static Journey Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">journey.</h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4">
          <div className="group flex gap-4">
            <div className="min-h-full min-w-[2px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

            <div className="w-full">
              <div className="flex justify-between min-w-full text-sm">
                <div className="text-xs">
                  <div className="text-[16px]">Software engineer,</div>
                  <div className="lowercase">
                    at,{" "}
                    <a
                      href="https://rava.ai"
                      target="_blank"
                      className="underline"
                    >
                      rava ai
                    </a>
                  </div>
                </div>
                <div className="text-md">jan - dec, 2024</div>
              </div>

              <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm">
                as a core engineer, developed automated content workflows and
                embedding systems for diverse content types. implemented browser
                caching optimizations reducing server load by 40%. established
                ci/cd pipelines improving deployment speed by 70%. built
                personalized content generation features serving 1000+ customers
                based on user personas.
              </p>
            </div>
          </div>
          <div className="group flex gap-4">
            <div className="min-h-full min-w-[2px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

            <div className="w-full">
              <div className="flex justify-between min-w-full">
                <div className="text-xs">
                  <div className="text-[16px]">Full stack developer,</div>
                  <div className="text-xs lowercase">
                    at,{" "}
                    <a
                      href="https://skillrazr.com"
                      target="_blank"
                      className="underline"
                    >
                      skillrazr
                    </a>
                  </div>
                </div>
                <div className="text-md">oct - dec, 2023</div>
              </div>

              <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm">
                engineered interactive git and sql learning platforms utilizing
                gcp and firebase, while implementing responsive design
                principles to optimize cross-device functionality and user
                experience. led ui/ux improvements across the platform
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Static Projects Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">projects.</h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4 text-sm">
          {projectData.map((project, idx) => (
            <div className="group flex gap-4" key={idx}>
              <div className="min-h-full min-w-[1.5px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

              <div className="w-full">
                <div className="flex justify-start min-w-full text-sm">
                  <div className="w-full">
                    <div className="text-lg flex gap-4 items-center">
                      {project.name}{" "}
                      <span className="text-xs uppercase dark:bg-zinc-700 bg-zinc-600 hover:bg-zinc-800 text-white rounded-[4px] p-1 my-1 transition-colors duration-500 ease-in-out delay-75">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex gap-1 items-center group/live lowercase">
                        <a href={project.live} target="_blank">
                          live preview
                        </a>
                        <ArrowUpRight
                          className="group-hover/live:translate-x-1 transition-all duration-300 ease-in-out"
                          size={16}
                        />
                      </div>
                      <div className="flex gap-1 items-center group/github lowercase">
                        <a href={project.git} target="_blank">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Skills Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">skills</h2>

        <div className="flex flex-wrap gap-x-2 gap-y-2 pt-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 text-white dark:hover:bg-zinc-800 dark:bg-zinc-700 rounded-md px-2 py-1 text-xs transition-colors duration-500 ease-in-out lowercase"
            >
              {skill.toLowerCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Static Contact Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">contact</h2>
        <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm">
          interested in a conversation? drop dm&apos;s over{" "}
          <Link className="underline" target="_blank" href="/linkedin">
            linkedin
          </Link>{" "}
          or{" "}
          <a href="mailto:hey@yagyaraj.com" className="underline">
            email
          </a>
          . ask me anything about my work, projects, or anything else.
        </p>
      </div>
    </div>
  );
}
