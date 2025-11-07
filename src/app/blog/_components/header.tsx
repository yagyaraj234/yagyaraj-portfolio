import ThemeButton from "@/app/components/theme-button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between mb-4">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <Image
            src="/notion.png"
            height={24}
            width={24}
            sizes="(max-width: 768px) 64px, 96px"
            alt="user"
            className="rounded-full hover:transition-transform scale-110 hover:scale-125 duration-300 ease-in-out cursor-pointer bg-slate-500"
          />
        </Link>
        <Link href={"/blog"}>Yagyaraj.</Link>
      </div>
      <ThemeButton />
    </header>
  );
}
