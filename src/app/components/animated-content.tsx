"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { skills, projectData } from "./static-content";
import { Journey } from "../(user)/_components/journey";

export function AnimatedContent() {
  return (
    <div className="box-border mb-8">
      <motion.div
        className="lg:mt-8 mt-4 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="font-semibold lowercase">about me.</h2>
        <motion.p
          className="mt-4 lowercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          i&apos;m a passionate full-stack developer who learns and transforms
          complex problems into simple, beautiful, and intuitive solutions
          through development and design.
        </motion.p>
      </motion.div>

      <Journey />

      {/* Animated Projects Section */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="font-semibold lowercase">projects.</h2>

        <div className="flex flex-col gap-[16px] w-full space-y-4 mt-4 text-sm">
          {projectData.map((project, idx) => (
            <motion.div
              className="group flex gap-4"
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
            >
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated Skills Section */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="font-semibold lowercase">skills</h2>

        <div className="flex flex-wrap gap-x-2 gap-y-2 pt-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-800 text-white dark:hover:bg-zinc-800 dark:bg-zinc-700 rounded-md px-2 py-1 text-xs transition-colors duration-500 ease-in-out lowercase"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill.toLowerCase()}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated Contact Section */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className="font-semibold lowercase">contact</h2>
        <motion.p
          className="lowercase mt-2 dark:text-zinc-200 text-zinc-800 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          interested in a conversation? drop dm&apos;s over{" "}
          <motion.span whileHover={{ scale: 1.05 }}>linkedin</motion.span> or{" "}
          <motion.span whileHover={{ scale: 1.05 }}>email</motion.span>. ask me
          anything about my work, projects, or anything else.
        </motion.p>
      </motion.div>
    </div>
  );
}
