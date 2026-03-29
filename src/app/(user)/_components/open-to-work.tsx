"use client"
import { ArrowUpRight } from "lucide-react"

export default function OpenToWork() {
  return (
    <div className="mt-6 space-y-4 rounded-md bg-neutral-50 p-4 text-base dark:bg-zinc-800">
      <div>
        I&apos;m open to collaborate with talented individuals and contribute to
        impactful projects. If you&apos;d like to learn more about my work or
        discuss potential opportunities, feel free to reach out!
      </div>

      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer rounded-md bg-black p-3 text-sm text-white transition-colors duration-300 ease-in-out hover:bg-black/80"
          onClick={() => window.open("https://x.com/yagyaraj234")}
        >
          Drop message on X
        </button>

        <button
          className="group cursor-pointer"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1HH94EgoL2M73UtJD4miG74NAdxWg-HGS/view?usp=sharing"
            )
          }
        >
          <div className="flex items-center justify-between text-sm dark:text-white">
            Resume
            <ArrowUpRight
              className="transition-all duration-300 ease-in-out group-hover:translate-x-1"
              size={16}
            />
          </div>
        </button>
      </div>
    </div>
  )
}
