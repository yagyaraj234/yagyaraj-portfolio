"use client";
import { useParams } from "next/navigation";
import { HeartIcon, MessageCircle } from "lucide-react";
import { likePost } from "@/actions/post/actions";
import TOC from "./toc";

type PostAction = {
  title: string;
};
export default function PostActions({ title }: PostAction) {
  // extract slug
  const { slug } = useParams<{ slug: string }>();

  async function handleClick() {
    debugger;
    await likePost({
      slug,
      title,
    });
  }
  return (
    <div className=" transition-all duration-300 ease-in-out select-none flex gap-4 hover:gap-6 items-center rounded-full p-2 bottom-4 left-0 right-0 fixed dark:bg-white/10 bg-zinc-200 backdrop-blur-lg ring-0 ring-red-500 drop-shadow-lg w-fit mx-auto bg-blend-difference">
      <HeartIcon
        fill="red"
        color="red"
        className="hover:scale-105 ease-in-out transition-all cursor-pointer"
        onClick={handleClick}
      />
      <MessageCircle className="hover:scale-105 ease-in-out transition-all cursor-pointer" />
      <TOC />
    </div>
  );
}
