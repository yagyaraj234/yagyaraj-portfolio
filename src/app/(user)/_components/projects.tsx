import { ArrowUpRight } from "lucide-react";
import { projectData } from "@/app/components/static-content";

export function Projects({ show = 10 }: { show?: number }) {
  const projects = projectData.slice(0, show);
  return (
    <div className="mt-8">
      <h2 className="font-semibold lowercase">projects.</h2>

      <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4 text-sm">
        {projects.map((project, idx) => (
          <div className="group flex gap-4" key={idx}>
            <div className="min-h-full min-w-[1.5px] bg-neutral-200 group-hover:bg-yellow-500 transition-colors ease-in-out delay-0 duration-700 rounded-md" />

            <div className="w-full">
              <div className="flex justify-start min-w-full text-sm">
                <div className="w-full">
                  <div className="text-lg flex gap-4 items-center">
                    {project.name}{" "}
                    <span className="text-xs uppercase dark:bg-zinc-700 bg-zinc-600 hover:bg-zinc-800 text-white rounded-[4px] p-1 my-1 transition-colors duration-500 ease-in-out delay-75">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex gap-1 items-center group/live lowercase">
                      <a href={project.live} target="_blank">
                        live preview
                      </a>
                      <ArrowUpRight
                        className="group-hover/live:translate-x-1 transition-all duration-300 ease-in-out"
                        size={16}
                      />
                    </div>
                    <div className="flex gap-1 items-center group/github lowercase">
                      <a href={project.git} target="_blank">
                        source code
                      </a>
                      <ArrowUpRight
                        className="group-hover/github:translate-x-1 transition-all duration-300 ease-in-out"
                        size={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                {project?.about &&
                  project?.about?.map((about: string, idx: number) => (
                    <li
                      className="text-base dark:text-zinc-200 text-zinc-800 lowercase"
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
  );
}
