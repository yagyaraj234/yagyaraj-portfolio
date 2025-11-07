import Image from "next/image";
import { social_links } from "./static-content";
import Link from "next/link";

export function UserInfo() {
  return (
    <div className="flex gap-4 lg:mt-6">
      <div className="relative">
        <div className="rounded-full border-none max-h-[96px] max-w-[96px] overflow-hidden">
          <Image
            src="/notion.png"
            height={96}
            width={96}
            sizes="(max-width: 768px) 64px, 96px"
            alt="user"
            className="rounded-full hover:transition-transform scale-110 hover:scale-125 duration-300 ease-in-out cursor-pointer bg-slate-500"
          />
        </div>
      </div>

      {/* Animated About */}
      <div className="flex flex-col gap-2">
        <h1 className="lg:text-xl">Hey👋, I&apos;m Yagyaraj</h1>
        <h2 className="max-lg:text-sm">Full-Stack Software Engineer | India</h2>

        <div className="flex gap-x-2">
          {social_links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              target="_blank"
              className="rounded-full p-1"
            >
              <link.icon
                size={16}
                className="text-zinc-900 dark:text-zinc-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
