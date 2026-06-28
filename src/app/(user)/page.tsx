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
import { Section, SectionHeader } from "../components/ui/section"
import { TechTag } from "../components/ui/tech-tag"
import { Email } from "../components/email-extend"

const badgeClass =
  "mx-0.5 cursor-pointer rounded bg-zinc-50 px-1 py-0.5 text-sm ring ring-zinc-200 transition-colors hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:ring-zinc-800 dark:hover:bg-zinc-800"

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
    <main className="box-border" role="main">
      {/* Invisible structured data for SEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Intro */}
      <div className="text-muted mt-6 space-y-4 text-base leading-relaxed tracking-wide normal-case lg:mt-8">
        <p>
          Building the platform engine at{" "}
          <Preview containerClassName="p-0" content={<WavemakerCard />}>
            <span className={badgeClass}>Wavemaker</span>
          </Preview>{" "}
          that powers{" "}
          <b className="font-medium text-zinc-900 dark:text-zinc-100">
            React / Next.js
          </b>{" "}
          application generation. Previously at{" "}
          <Preview
            containerClassName="text-neutral-600 dark:text-neutral-400 p-0"
            content={<RavaAICard />}
          >
            <span className={badgeClass}>Rava AI</span>
          </Preview>
          , where I took the product from zero to production handling frontend,
          backend, DevOps, and AI integrations end-to-end.
        </p>
        <p>
          I’m passionate about platform engineering, scalable web systems, and
          building tools that make developers more productive.
        </p>
      </div>

      {/* Social links */}
      <nav aria-label="Social links" className="mt-6 flex flex-wrap gap-1">
        {social_links.map((link, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Link
                href={link.url}
                target="_blank"
                className="inline-flex items-center justify-center rounded-md p-2 text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                aria-label={link.name}
              >
                <link.icon aria-hidden="true" className="size-4" />
              </Link>
            </TooltipTrigger>

            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Email />
      </nav>

      <Journey />

      <Section id="writings">
        <SectionHeader
          id="writings-title"
          label="Blog"
          title="Recent writings"
          href="/writings"
        />
        <div className="text-muted mt-5 text-base">
          <BlogList />
        </div>
      </Section>

      <Projects show={1} />

      <Section id="skills">
        <SectionHeader id="skills" title="Skills" />
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <TechTag key={skill} label={skill} />
          ))}
        </div>
      </Section>

      <GitHubContributions />

      <Section id="contact">
        <SectionHeader id="contact-title" label="Say hi" title="Contact" />
        <p className="text-muted mt-3 text-base leading-relaxed">
          Interested in a conversation? Drop a DM on{" "}
          <Link
            href="/linkedin"
            className="underline decoration-blue-500 decoration-wavy underline-offset-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link
            href="mailto:hey@yagyaraj.com"
            className="underline decoration-blue-500 decoration-wavy underline-offset-4 transition-colors duration-300 ease-in-out hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </Link>
          . Ask me anything about my work, projects, or anything else.
        </p>
      </Section>
    </main>
  )
}
