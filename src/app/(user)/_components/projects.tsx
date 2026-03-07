import { ArrowUpRight } from "lucide-react"
import { projectData } from "@/app/components/static-content"

export function Projects({ show = 10 }: { show?: number }) {
  const projects = projectData.slice(0, show)
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">projects.</h2>

      <div className="mt-4 flex w-full flex-col gap-[16px] space-y-4 text-sm">
        {projects.map((project, idx) => (
          <div className="group flex gap-4" key={idx}>
            <div className="min-h-full min-w-[1.5px] rounded-md bg-neutral-200 transition-colors delay-0 duration-700 ease-in-out group-hover:bg-yellow-500" />

            <div className="w-full">
              <div className="flex min-w-full justify-start text-sm">
                <div className="w-full">
                  <div className="flex items-center gap-4 text-lg font-medium">
                    {project.name}{" "}
                    <span className="my-1 rounded-[4px] bg-zinc-600 p-1 text-xs text-white uppercase transition-colors delay-75 duration-500 ease-in-out hover:bg-zinc-800 dark:bg-zinc-700">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <div className="group/live flex items-center gap-1 lowercase">
                      <a href={project.live} target="_blank">
                        live preview
                      </a>
                      <ArrowUpRight
                        className="transition-all duration-300 ease-in-out group-hover/live:translate-x-1"
                        size={16}
                      />
                    </div>
                    <div className="group/github flex items-center gap-1 lowercase">
                      <a href={project.git} target="_blank">
                        source code
                      </a>
                      <ArrowUpRight
                        className="transition-all duration-300 ease-in-out group-hover/github:translate-x-1"
                        size={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                {project?.about &&
                  project?.about?.map((about: string, idx: number) => (
                    <li
                      className="text-base text-zinc-800 lowercase dark:text-zinc-200"
                      key={idx}
                    >
                      {about}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
