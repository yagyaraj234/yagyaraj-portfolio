import dynamic from "next/dynamic"
import Link from "next/link"
import { Journey, RavaAICard, WavemakerCard } from "./_components/journey"
import { Projects } from "./_components/projects"
import { skills, social_links } from "@/app/components/static-content"

const GitHubContributions = dynamic(
  () => import("@/app/components/github-contributions"),
  {
    loading: () => <p></p>,
    ssr: true,
  }
)
import BlogList from "./_components/blog-list"
import { Preview } from "../components/ui/preview"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip"
import OpenToWork from "./_components/open-to-work"

// FAQ data for invisible FAQPage JSON-LD (AEO/SEO only, not rendered)
const faqData = [
  {
    question: "What technologies does Yagyaraj work with?",
    answer:
      "Yagyaraj specializes in React, Next.js, TypeScript, Node.js, TailwindCSS, Prisma, Firebase, MongoDB, and Docker. He builds full-stack web applications with a focus on performance, scalability, and clean architecture.",
  },
  {
    question: "How can I hire Yagyaraj for a project?",
    answer:
      "You can reach out via email at hey@yagyaraj.com or send a direct message on LinkedIn. Yagyaraj is available for freelance projects, consulting, and full-time opportunities.",
  },
  {
    question: "What is Yagyaraj's development approach?",
    answer:
      "Yagyaraj follows a user-first development approach. He focuses on building performant, accessible, and maintainable applications using modern web standards. Every project starts with understanding the problem, followed by clean architecture design and iterative development.",
  },
]

export default function Home() {
  // FAQPage JSON-LD for AEO invisible to users, picked up by bots
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="font-giest text-ase box-border" role="main">
      {/* Invisible structured data for SEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-4 text-base lg:mt-8">
        <div className="font-iter text-muted mt-4 text-base tracking-wide normal-case">
          Building the platform engine at{" "}
          <Preview containerClassName="p-0" content={<WavemakerCard />}>
            {" "}
            <span className="mx-0.5 cursor-pointer rounded bg-zinc-50 p-0.5 px-1 text-sm ring ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800">
              Wavemaker
            </span>
          </Preview>{" "}
          that powers <b className="font-medium"> React/Nextjs</b> application
          generation. Previously at{" "}
          <Preview
            containerClassName="text-neutral-600 dark:text-neutral-400 p-0"
            content={<RavaAICard />}
          >
            {" "}
            <span className="mx-0.5 cursor-pointer rounded bg-zinc-50 p-0.5 px-1 text-sm ring ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800">
              Rava AI
            </span>
          </Preview>
          , where I took the product from zero to production. handling frontend,
          backend, DevOps, and AI integrations end-to-end.{" "}
          <br className="h-3" />{" "}
          <div className="mt-4">
            I’m passionate about platform engineering, scalable web systems, and
            building tools that make developers more productive.
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-x-2">
        {social_links.map((link, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Link
                href={link.url}
                target="_blank"
                className="rounded-full p-1"
                aria-label={link.name}
              >
                <link.icon
                  aria-hidden="true"
                  className="size-4 text-zinc-600 dark:text-zinc-300"
                />
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* <OpenToWork /> */}
      <Journey />

      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            <Link href="/writings">Recent writings</Link>{" "}
          </h2>
        </div>
        <div className="text-muted mt-2 text-base">
          <BlogList />
        </div>
      </div>
      <Projects show={1} />
      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold">Skills</h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded border border-neutral-200 px-2.5 py-1 font-mono text-xs text-neutral-600 transition-all duration-200 hover:border-zinc-400 hover:text-zinc-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-zinc-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <GitHubContributions />
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-muted mt-2 text-base">
          Interested in a conversation? drop DMs over{" "}
          <Link
            href="/linkedin"
            className="underline decoration-blue-500 decoration-wavy underline-offset-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
            target="_blank"
          >
            Linkedin
          </Link>{" "}
          or{" "}
          <Link
            href="mailto:hey@yagyaraj.com"
            className="underline decoration-blue-500 decoration-wavy underline-offset-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
          . Ask me anything about my work, projects, or anything else.
        </p>
      </div>
    </main>
  )
}
