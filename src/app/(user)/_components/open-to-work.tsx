"use client";
import { ArrowUpRight } from "lucide-react";

export default function OpenToWork() {
  return (
    <div className=" p-4 space-y-4 bg-neutral-100 rounded-md mt-6 dark:bg-zinc-800 text-sm">
      <div>
        I&apos;m open to collaborate with talented individuals and contribute to
        impactful projects. If you&apos;d like to learn more about my work or
        discuss potential opportunities, feel free to reach out!
      </div>

      <div className="flex gap-4 items-center">
        <button
          className="bg-black rounded-md p-3 text-white text-sm hover:bg-black/80 cursor-pointer  transition-colors duration-300 ease-in-out"
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
          <div className="flex justify-between items-center text-sm dark:text-white">
            Resume
            <ArrowUpRight
              className=" group-hover:translate-x-1 transition-all duration-300 ease-in-out"
              size={16}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
