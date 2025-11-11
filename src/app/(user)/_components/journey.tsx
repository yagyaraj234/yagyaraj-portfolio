import Link from "next/link";

export function Journey() {
  return (
    <div className="mt-8">
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
                  <Link
                    href="https://rava.ai"
                    target="_blank"
                    className="underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
                  >
                    rava ai
                  </Link>
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
                  <Link
                    href="https://skillrazr.com"
                    target="_blank"
                    className="underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
                  >
                    skillrazr
                  </Link>
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
    </div>
  );
}
