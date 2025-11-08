import { motion } from "motion/react";

export function Journey() {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
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
              gcp and firebase, while implementing responsive design principles
              to optimize cross-device functionality and user experience. led
              ui/ux improvements across the platform ecosystem.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
