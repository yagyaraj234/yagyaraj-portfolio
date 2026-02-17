import Link from "next/link";
import { Journey } from "./_components/journey";
import OpenToWork from "./_components/open-to-work";
import { Projects } from "./_components/projects";
import { skills } from "@/app/components/static-content";
import { GitHubContributions } from "@/app/components/github-contributions";
import { USER } from "@/data/user.data";

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
];

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
  };

  return (
    <main className="box-border  text-base" role="main">
      {/* Invisible structured data for SEO/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="lg:mt-8 mt-4 text-base">
        <h2 className="font-semibold text-lg">about me.</h2>
        <p className="mt-4 lowercase">
          i&apos;m a passionate full-stack developer who learns and transforms
          complex problems into simple, beautiful, and intuitive solutions
          through development and design.
        </p>
      </div>

      {/* <OpenToWork /> */}
      <Journey />
      <Projects show={1} />
      {/* Animated Skills Section */}
      <div className="mt-8">
        <h2 className="font-semibold text-lg">skills.</h2>

        <div className="flex flex-wrap gap-x-2 gap-y-2 pt-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 text-white dark:hover:bg-zinc-800 dark:bg-zinc-700 rounded-md px-2 py-1 text-sm transition-colors duration-500 ease-in-out lowercase"
            >
              {skill.toLowerCase()}
            </div>
          ))}
        </div>
      </div>
      <GitHubContributions />

      <div className="mt-8">
        <h2 className="font-semibold text-lg">writing.</h2>
        <div className="mt-2 dark:text-zinc-200 text-zinc-800 text-base">
          I've started writing{" "}
          <Link
            href="/blog"
            className="hover:text-yellow-500 underline transition-colors duration-300 ease-in-out"
          >
            blogs
          </Link>{" "}
          to help others improve their engineering skills. Stay tuned for more
          content!
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-lg">contact.</h2>
        <p className="mt-2 dark:text-zinc-200 text-zinc-800 text-base">
          interested in a conversation? drop dm&apos;s over{" "}
          <Link
            href="/linkedin"
            className="hover:text-yellow-500 underline transition-colors duration-300 ease-in-out"
            target="_blank"
          >
            linkedin
          </Link>{" "}
          or{" "}
          <Link
            href="mailto:hey@yagyaraj.com"
            className="hover:text-yellow-500 underline transition-colors duration-300 ease-in-out"
            target="_blank"
          >
            email
          </Link>
          . ask me anything about my work, projects, or anything else.
        </p>
      </div>
    </main>
  );
}
