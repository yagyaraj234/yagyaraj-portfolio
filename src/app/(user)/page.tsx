import dynamic from "next/dynamic"
import Link from "next/link"
import { Journey, RavaAICard, WavemakerCard } from "./_components/journey"
import OpenToWork from "./_components/open-to-work"
import { Projects } from "./_components/projects"
import { skills } from "@/app/components/static-content"
const GitHubContributions = dynamic(
  () => import("@/app/components/github-contributions"),
  {
    loading: () => <p></p>,
    ssr: true,
  }
)
import { USER } from "@/data/user.data"
import BlogList from "./_components/blog-list"
import { Preview } from "../components/ui/preview"

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
  // FAQPage JSON-LD for AEO — invisible to users, picked up by bots
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
    <main className="box-border text-base" role="main">
      {/* Invisible structured data for SEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-4 text-base lg:mt-8">
        <div className="font-inter mt-4 text-base tracking-wide normal-case">
          Building the platform engine at{" "}
          <Preview
            containerClassName="text-violet-600 dark:text-violet-400 p-0"
            content={<WavemakerCard />}
          >
            {" "}
            <span className="cursor-pointer font-semibold text-zinc-800 underline dark:text-zinc-200">
              WaveMaker
            </span>
          </Preview>{" "}
          that powers React application generation. Previously at{" "}
          <Preview
            containerClassName="text-neutral-600 dark:text-neutral-400 p-0"
            content={<RavaAICard />}
          >
            {" "}
            <span className="cursor-pointer font-semibold text-zinc-800 underline underline-offset-2 dark:text-zinc-200">
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

      <OpenToWork />
      <Journey />

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            <Link href="/writings">Recent writings</Link>{" "}
          </h2>
        </div>
        <div className="mt-2 text-base text-zinc-800 dark:text-zinc-200">
          <BlogList />
        </div>
      </div>
      <Projects show={1} />
      {/* Animated Skills Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">skills.</h2>

        <div className="flex flex-wrap gap-x-2 gap-y-2 pt-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="rounded-md bg-zinc-900 px-2 py-1 text-sm text-white transition-colors duration-500 ease-in-out hover:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-800"
            >
              {skill.toLowerCase()}
            </div>
          ))}
        </div>
      </div>
      <GitHubContributions />
      <div className="mt-8">
        <h2 className="text-lg font-semibold">contact.</h2>
        <p className="mt-2 text-base text-zinc-800 dark:text-zinc-200">
          interested in a conversation? drop dm&apos;s over{" "}
          <Link
            href="/linkedin"
            className="underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
            target="_blank"
          >
            linkedin
          </Link>{" "}
          or{" "}
          <Link
            href="mailto:hey@yagyaraj.com"
            className="underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
            target="_blank"
          >
            email
          </Link>
          . ask me anything about my work, projects, or anything else.
        </p>
      </div>
    </main>
  )
}
