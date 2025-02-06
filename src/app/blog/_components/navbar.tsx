import { ThemeButton } from "@/app/page";
import { Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-4 px-2">
      <Link href="/blog" className="flex gap-4 items-center">
        <Image
          src="/notion.png"
          height={24}
          width={24}
          sizes="(max-width: 768px) 64px, 96px"
          alt="user"
          className="rounded-full  hover:transition-transform scale-110 hover:scale-125  duration-300 ease-in-out cursor-pointer bg-slate-500"
        />
        {/* <span>Blog's</span> */}
      </Link>
      <div className="flex gap-4 items-center">
        <ThemeButton />
        <Rss size={16} className="mt-3 cursor-pointer" />
      </div>
    </div>
  );
}
