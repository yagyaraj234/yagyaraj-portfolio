import { Preview } from "@/app/components/ui/preview"
import Link from "next/link"
import Image from "next/image"

const RavaAICard = () => {
  return (
    <div>
      <Image
        src="/tooltip/ravaai.webp"
        alt="Rava AI"
        width={100}
        height={360}
        className="h-max w-full rounded-md"
        loading="eager"
        priority
        unoptimized
      />
      <p className="mt-4 text-sm text-neutral-600 normal-case dark:text-neutral-400">
        Rava AI is an agentic AI-powered go-to-market (GTM) platform for
        startups, automating strategy, marketing content, and investor pitch
        decks.
      </p>
    </div>
  )
}
const SkillRazrCard = () => {
  return (
    <div>
      <Image
        src="/tooltip/skillrazr.webp"
        alt="SkillRazr"
        width={100}
        height={360}
        className="h-max w-full rounded-md"
        loading="eager"
        priority
        unoptimized
      />
      <p className="mt-4 text-sm text-neutral-600 normal-case dark:text-neutral-400">
        SkillRazr offers online tech training, internships, and skill
        development programs designed to prepare students for jobs.
      </p>
    </div>
  )
}

const WavemakerCard = () => {
  return (
    <div>
      <Image
        src="/tooltip/wavemaker.webp"
        alt="WaveMaker"
        width={100}
        height={360}
        className="h-max w-full rounded-md"
        loading="eager"
        priority
        unoptimized
      />
      <p className="mt-4 text-sm text-neutral-600 normal-case dark:text-neutral-400">
        WaveMaker offers a low-code development platform for professional
        developers to build web and mobile applications using open standards
      </p>
    </div>
  )
}

export function Journey() {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">journey.</h2>

      <div className="mt-4 flex w-full flex-col gap-4 space-y-4">
        <div className="group flex gap-4">
          <div className="min-h-full min-w-0.5 rounded-md bg-neutral-200 transition-colors delay-0 duration-700 ease-in-out group-hover:bg-yellow-500" />

          <div className="w-full">
            <div className="flex min-w-full justify-between text-sm">
              <div className="text-sm">
                <div className="text-lg font-medium">Development Engineer,</div>
                <div className="lowercase">
                  at,{" "}
                  <Link
                    href="https://wavemaker.com"
                    target="_blank"
                    className="underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    <Preview
                      containerClassName="text-neutral-600 dark:text-neutral-400 p-0"
                      content={<WavemakerCard />}
                    >
                      {" "}
                      <span className="cursor-pointer font-bold">
                        WaveMaker
                      </span>
                    </Preview>
                  </Link>
                </div>
              </div>
              <div className="text-base font-medium">jan, 2025 - present </div>
            </div>

            <p className="mt-2 text-base text-zinc-800 lowercase dark:text-zinc-200">
              <span className="font-medium">
                contributed to the react runtime and code generation
                architecture
              </span>{" "}
              used to export scalable applications from wavemaker studio.{" "}
              <span className="font-medium">
                designed mechanisms for managing complex application state using
                javascript proxy
              </span>{" "}
              and coordinating runtime behavior across dynamically generated
              react components.{" "}
            </p>
          </div>
        </div>
        <div className="group flex gap-4">
          <div className="min-h-full min-w-0.5 rounded-md bg-neutral-200 transition-colors delay-0 duration-700 ease-in-out group-hover:bg-yellow-500" />

          <div className="flex min-h-[100px] w-full flex-col gap-2">
            <div className="flex min-w-full justify-between text-sm">
              <div className="text-sm">
                <div className="text-lg font-medium">Software engineer,</div>
                <div className="lowercase">
                  at,{" "}
                  <Link
                    href="https://rava.ai"
                    target="_blank"
                    className="underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    <Preview
                      containerClassName="text-neutral-600 dark:text-neutral-400 p-0"
                      content={<RavaAICard />}
                    >
                      {" "}
                      <span className="cursor-pointer font-bold">Rava AI</span>
                    </Preview>
                  </Link>
                </div>
              </div>
              <div className="text-base font-medium">jan - dec, 2024</div>
            </div>

            <p className="min-h-[50px] text-base text-zinc-800 lowercase dark:text-zinc-200">
              <span className="font-medium">
                built automated content workflows + embeddings{" "}
              </span>
              across diverse content types.
              <span className="font-medium">
                reduced server load by 40%{" "}
              </span>{" "}
              via browser caching optimizations, and{" "}
              <span className="font-medium">improved deploy speed by 70% </span>{" "}
              with ci/cd. shipped{" "}
              <span className="font-medium">
                personalized content generation
              </span>
              for 1000+ customers using persona-based targeting.
            </p>
          </div>
        </div>
        <div className="group flex gap-2">
          <div className="min-h-full min-w-0.5 rounded-md bg-neutral-200 transition-colors delay-0 duration-700 ease-in-out group-hover:bg-yellow-500" />

          <div className="flex min-h-[100px] w-full flex-col gap-2">
            <div className="flex min-w-full justify-between">
              <div className="text-sm">
                <div className="text-lg font-medium">Full stack developer,</div>
                <div className="lowercase">
                  at,{" "}
                  <Link
                    href="https://skillrazr.com"
                    target="_blank"
                    className="underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    <Preview
                      containerClassName="text-neutral-600 dark:text-neutral-400 p-0"
                      content={<SkillRazrCard />}
                    >
                      {" "}
                      <span className="cursor-pointer font-bold">
                        SkillRazr
                      </span>
                    </Preview>
                  </Link>
                </div>
              </div>
              <div className="text-base font-medium">oct - dec, 2023</div>
            </div>

            <p className="min-h-[50px] text-base text-zinc-800 lowercase dark:text-zinc-200">
              <span className="font-medium">
                built interactive git + sql learning platforms{" "}
              </span>
              using gcp and firebase.{" "}
              <span className="font-medium">improved cross-device ux </span>{" "}
              with responsive design and led{" "}
              <span className="font-medium">ui/ux upgrades </span> across the
              platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
