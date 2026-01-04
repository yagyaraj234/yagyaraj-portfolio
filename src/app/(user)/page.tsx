import Link from "next/link";
import { Journey } from "./_components/journey";
import OpenToWork from "./_components/open-to-work";
import { Projects } from "./_components/projects";
import { skills } from "@/app/components/static-content";
import { GitHubContributions } from "@/app/components/github-contributions";

export default function Home() {
  return (
    <div className="box-border sm:mb-16 mb-20 text-base">
      <div className="lg:mt-8 mt-4 text-base">
        <h2 className="font-semibold lowercase">about me.</h2>
        <p className="mt-4 lowercase">
          i&apos;m a passionate full-stack developer who learns and transforms
          complex problems into simple, beautiful, and intuitive solutions
          through development and design.
        </p>
      </div>
      {/* I'm a Full Stack Web Developer from Mohali, India, with 6+ years of coding
      and 4+ years of professional experience, trying to make the internet a bit
      cooler one website at a time. */}
      {/* <OpenToWork /> */}
      <Journey />
      <Projects show={1} />
      {/* Animated Skills Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">skills</h2>

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
        <h2 className="font-semibold lowercase">contact</h2>
        <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm">
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
    </div>
  );
}
