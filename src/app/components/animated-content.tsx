"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { skills, projectData } from "./static-content";
import { Journey } from "../(user)/_components/journey";

export function AnimatedContent() {
  return (
    <div className="box-border mb-8">
      <div className="lg:mt-8 mt-4 text-sm">
        <h2 className="font-semibold lowercase">about me.</h2>
        <p className="mt-4 lowercase">
          i&apos;m a passionate full-stack developer who learns and transforms
          complex problems into simple, beautiful, and intuitive solutions
          through development and design.
        </p>
      </div>

      <Journey />

      {/* Animated Projects Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">projects.</h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4 text-sm">
          {projectData.map((project, idx) => (
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
                    project?.about?.map((about, idx) => (
                      <li
                        className="text-sm dark:text-zinc-200 text-zinc-800 lowercase"
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

      {/* Animated Skills Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">skills</h2>

        <div className="flex flex-wrap gap-x-2 gap-y-2 pt-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 text-white dark:hover:bg-zinc-800 dark:bg-zinc-700 rounded-md px-2 py-1 text-xs transition-colors duration-500 ease-in-out lowercase"
            >
              {skill.toLowerCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Animated Contact Section */}
      <div className="mt-8">
        <h2 className="font-semibold lowercase">contact</h2>
        <p className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm">
          interested in a conversation? drop dm&apos;s over{" "}
          <a
            href="/linkedin"
            className="hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            target="_blank"
          >
            linkedin
          </a>{" "}
          or{" "}
          <a
            href="mailto:hey@yagyaraj.com"
            className="hover:text-yellow-500 transition-colors duration-300 ease-in-out"
          >
            email
          </a>
          . ask me anything about my work, projects, or anything else.
        </p>
      </div>
    </div>
  );
}
