import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"
import { Journey, RavaAICard, WavemakerCard } from "./_components/journey"
import { Projects } from "./_components/projects"
import { skills, social_links } from "@/app/components/static-content"
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
          that powers full-stack{" "}
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
      </div>

      {/* Social links */}
      <nav
        aria-label="Social links"
        className="mt-7 flex flex-wrap items-center gap-1"
      >
        {social_links.map((link, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                title={link.name}
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

      <Projects show={1} />

      <Section id="writings">
        <SectionHeader
          id="writings-title"
          title="Recent writings"
          href="/writings"
        />
        <div className="text-muted mt-5 text-base">
          <BlogList />
        </div>
      </Section>

      <Section id="skills">
        <SectionHeader id="skills-title" title="Skills" />
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <TechTag key={skill} label={skill} />
          ))}
        </div>
      </Section>

      <Section id="contact">
        <SectionHeader id="contact-title" title="Contact" />
        <div className="relative mt-5 overflow-hidden rounded-xl border border-(--color-border) bg-(--color-bg-secondary)/55 p-5 sm:p-6">
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 size-40 rounded-full bg-[#1D6FA4]/8 blur-3xl"
          />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-lg">
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg border border-(--color-border) bg-white text-[#1D6FA4] shadow-sm dark:bg-zinc-900 dark:text-[#5BA8D6]">
                <Mail aria-hidden="true" className="size-4" />
              </div>
              <p className="text-base font-medium tracking-tight text-(--color-text-primary)">
                Have a product or platform problem worth unpacking?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-(--color-text-secondary)">
                Tell me the context, constraints, and outcome you want. What are
                you building, and where is it stuck?
              </p>
            </div>
            <Link
              href="mailto:hey@yagyaraj.com?subject=Project%20conversation"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1D6FA4] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[#185f8c] hover:shadow-md active:translate-y-0"
            >
              Write an email
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
          <div className="font-dm-mono relative mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-(--color-border) pt-3 text-[10px] text-(--color-text-tertiary)">
            <span>Opens your email app</span>
            <span aria-hidden="true">·</span>
            <span>hey@yagyaraj.com</span>
            <span aria-hidden="true">·</span>
            <Link
              href="/linkedin"
              target="_blank"
              className="transition-colors hover:text-(--color-text-primary)"
            >
              Prefer LinkedIn?
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
