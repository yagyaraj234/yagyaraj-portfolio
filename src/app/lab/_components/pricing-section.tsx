import {
  BedDouble,
  BotIcon,
  CameraIcon,
  LayoutDashboard,
  LineChart,
} from "lucide-react"

export default function PricingSection() {
  return (
    <section className="grid gap-6 p-6 sm:grid-cols-2">
      <div className="right-0 rounded-2xl bg-white p-1 ring-2 ring-zinc-100 drop-shadow-2xl dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="rounded-xl bg-linear-to-r from-blue-300 via-blue-600/20 to-blue-500/20 p-4 hue-rotate-25">
          <h4 className="mb-2 text-3xl font-semibold">Pro</h4>
          <div className="flex w-[70%] items-start gap-4">
            <h4 className="text-5xl">$15</h4>
            <div className="text text-base font-medium text-black/70 dark:text-white/70">
              Per month billed anually
            </div>
          </div>
          <button className="mt-4 w-full rounded-xl bg-zinc-950/80 px-4 py-3 text-white ring ring-zinc-800 drop-shadow-lg">
            Sign Up
          </button>
        </div>

        <div className="mt-px p-4 pb-2">
          <ul className="mt-6 flex shrink-0 flex-col items-start gap-2 text-base font-medium select-none [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:font-normal [&>li]:text-zinc-700 [&>li>svg]:mr-2 [&>li>svg]:text-zinc-700">
            <li>
              <CameraIcon />
              10 Videos/Month
            </li>
            <li>
              <LayoutDashboard />
              Unlimited Apps integrations
            </li>
            <li>
              <BedDouble />
              Smart Prompt Ideas
            </li>
            <li>
              <LineChart />
              Advanced dashboard analytics
            </li>
            <li>
              <BotIcon />
              AI Powered Script generator
            </li>
          </ul>

          <div className="my-4 text-sm text-zinc-600">Need higher limit ?</div>
        </div>
      </div>
      <div className="right-0 rounded-2xl bg-white p-1 ring-2 ring-zinc-100 drop-shadow-2xl dark:bg-zinc-900 dark:ring-zinc-800">
        <div className="rounded-xl p-4">
          <h4 className="mb-2 bg-linear-to-r from-blue-500 via-blue-800/20 to-blue-500/20 bg-clip-text text-3xl font-semibold text-transparent">
            Pro+
          </h4>
          <div className="mt-2 flex w-[70%] items-start gap-4">
            <h4 className="text-5xl">$25</h4>
            <div className="text text-base font-medium text-black/70 dark:text-white/70">
              Per month billed anually
            </div>
          </div>
          <button className="mt-4 w-full rounded-xl bg-zinc-200/80 px-4 py-3 ring ring-zinc-300 drop-shadow-lg dark:bg-zinc-700/80 dark:ring-zinc-600">
            Sign Up
          </button>
        </div>
        <div className="mt-2 h-px bg-zinc-200"></div>

        <div className="p-4 pb-2">
          <ul className="mt-4 flex shrink-0 flex-col items-start gap-2 text-base font-medium select-none [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:font-normal [&>li]:text-zinc-700 [&>li>svg]:mr-2 [&>li>svg]:text-zinc-700">
            <li>
              <CameraIcon />
              10 Videos/Month
            </li>
            <li>
              <LayoutDashboard />
              Unlimited Apps integrations
            </li>
            <li>
              <BedDouble />
              Smart Prompt Ideas
            </li>
            <li>
              <LineChart />
              Advanced dashboard analytics
            </li>
            <li>
              <BotIcon />
              AI Powered Script generator
            </li>
          </ul>

          <div className="my-4 text-sm text-zinc-600">Need higher limit ?</div>
        </div>
      </div>
    </section>
  )
}
