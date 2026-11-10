import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Journey, RavaAICard, WavemakerCard } from "./_components/journey"
import { Projects } from "./_components/projects"
import { skills } from "@/app/components/static-content"
import { SocialLinks } from "@/app/components/social-links"
import BlogList from "./_components/blog-list"
import { Preview } from "../components/ui/preview"
import { Section, SectionHeader } from "../components/ui/section"
import { TechTag } from "../components/ui/tech-tag"

const badgeClass =
  "mx-0.5 cursor-pointer rounded bg-black/[0.06] px-1 py-0.5 text-sm hover:bg-black/[0.1] dark:bg-white/[0.08] dark:text-zinc-200 dark:hover:bg-white/[0.14]"

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
      <div className="text-muted mt-6 max-w-[62ch] space-y-4 text-base leading-relaxed tracking-wide normal-case lg:mt-8">
        <p>
          Building the platform engine at{" "}
          <Preview containerClassName="p-0" content={<WavemakerCard />}>
            <span className={badgeClass}>WaveMaker</span>
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
        <p>
          Outside work I ship my own products, most recently{" "}
          <Link href="#projects" className={badgeClass}>
            Fluently
          </Link>
          , an AI English coach with live voice practice, and{" "}
          <Link href="#projects" className={badgeClass}>
            Trevyn
          </Link>
          , a codebase-aware PR reviewer.
        </p>
      </div>

      <SocialLinks />

      <Journey />

      <Projects show={2} />

      <Section id="writings">
        <SectionHeader
          id="writings-title"
          title="Recent writings"
          href="/blog"
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
        <div className="mt-5 rounded-xl bg-(--color-bg-secondary) p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-lg">
              <p className="text-lg font-medium tracking-tight text-(--color-text-primary)">
                Have a product or platform problem worth unpacking?
              </p>
              <p className="mt-1.5 text-base leading-relaxed text-(--color-text-secondary)">
                Tell me the context, constraints, and outcome you want. What are
                you building, and where is it stuck?
              </p>
            </div>
            <Link
              href="mailto:hey@yagyaraj.com?subject=Project%20conversation"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1D6FA4] px-4 text-sm font-medium text-white hover:bg-[#185f8c]"
            >
              Write an email
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-(--color-text-tertiary)">
            <span>Opens your email app</span>
            <span aria-hidden="true">·</span>
            <span>hey@yagyaraj.com</span>
            <span aria-hidden="true">·</span>
            <Link
              href="/linkedin"
              target="_blank"
              className="hit-area underline-offset-4 hover:text-(--color-text-primary) hover:underline"
            >
              Prefer LinkedIn?
            </Link>
          </div>
        </div>
      </Section>
    </main>
  )
}
