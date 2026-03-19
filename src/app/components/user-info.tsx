import Image from "next/image"
import Link from "next/link"
import { social_links } from "./static-content"
import { USER } from "@/data/user.data"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"

export function UserInfo() {
  return (
    <div className="selection-none flex gap-4 select-none lg:mt-6">
      <div className="relative select-none">
        <div className="max-h-[96px] max-w-[96px] overflow-hidden rounded-full border-none">
          <Image
            src={USER.avatar}
            height={96}
            width={96}
            sizes="(max-width: 768px) 64px, 96px"
            alt={`${USER.displayName} profile picture`}
            className="cursor-pointer rounded-full bg-slate-500 duration-300 ease-in-out hover:scale-125 hover:transition-transform"
            priority
          />
        </div>
      </div>

      {/* Animated About */}
      <div className="flex flex-col gap-2">
        <h1 className="lg:text-xl">Hey👋, I&apos;m {USER.displayName}</h1>
        <h2 className="max-lg:text-sm">
          {USER.jobTitle} | {USER.address}
        </h2>

        <div className="flex gap-x-2">
          {social_links.map((link, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <Link
                  href={link.url}
                  target="_blank"
                  className="rounded-full p-1"
                  aria-label={link.name}
                >
                  <link.icon
                    aria-hidden="true"
                    // size={16}
                    className="size-4 text-zinc-900 dark:text-zinc-300"
                  />
                </Link>
              </TooltipTrigger>

              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}
