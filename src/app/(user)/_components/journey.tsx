import { Preview } from "@/app/components/ui/preview";
import Link from "next/link";
import Image from "next/image";

const RavaAICard = () => {
  return (
    <div>
      <Image
        src="/tooltip/ravaai.png"
        alt="Rava AI"
        width={100}
        height={360}
        className="rounded-md w-full h-max"
        loading="eager"
        priority
        unoptimized
      />
      <p className="text-sm text-neutral-600 dark:text-neutral-400 normal-case mt-4">
        Rava AI is an agentic AI-powered go-to-market (GTM) platform for
        startups, automating strategy, marketing content, and investor pitch
        decks.
      </p>
    </div>
  );
};
const SkillRazrCard = () => {
  return (
    <div>
      <Image
        src="/tooltip/skillrazr2.png"
        alt="SkillRazr"
        width={100}
        height={360}
        className="rounded-md w-full h-max"
        loading="eager"
        priority
        unoptimized
      />
      <p className="text-sm text-neutral-600 dark:text-neutral-400 normal-case mt-4">
        SkillRazr offers online tech training, internships, and skill
        development programs designed to prepare students for jobs.
      </p>
    </div>
  );
};

const WavemakerCard = () => {
  return (
    <div>
      <Image
        src="/tooltip/skillrazr2.png"
        alt="SkillRazr"
        width={100}
        height={360}
        className="rounded-md w-full h-max"
        loading="eager"
        priority
        unoptimized
      />
      <p className="text-sm text-neutral-600 dark:text-neutral-400 normal-case mt-4">
        WaveMaker offers a low-code development platform for professional
        developers to build web and mobile applications using open standards
      </p>
    </div>
  );
};

export function Journey() {
  return (
    <div className="mt-8 ">
      <h2 className="font-semibold text-lg">journey.</h2>

      <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4">
        <div className="group flex gap-4">
          <div className="min-h-full min-w-[2px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

          <div className="w-full">
            <div className="flex justify-between min-w-full text-sm">
              <div className="text-sm">
                <div className="text-lg font-medium">Software engineer,</div>
                <div className="lowercase">
                  at,{" "}
                  <Link
                    href="https://rava.ai"
                    target="_blank"
                    className="underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
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

            <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-base">
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
              <div className="text-sm">
                <div className="text-lg font-medium">Full stack developer,</div>
                <div className=" lowercase">
                  at,{" "}
                  <Link
                    href="https://skillrazr.com"
                    target="_blank"
                    className="underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
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

            <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-base">
              engineered interactive git and sql learning platforms utilizing
              gcp and firebase, while implementing responsive design principles
              to optimize cross-device functionality and user experience. led
              ui/ux improvements across the platform ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
