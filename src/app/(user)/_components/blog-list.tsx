import Link from "next/link"
import { readPosts } from "@/lib/blog.utils"
import { ArrowRightIcon } from "lucide-react"

type BlogItemProps = {
  title: string
  url: string
}

function BlogItem(props: BlogItemProps) {
  return (
    <Link
      href={props.url}
      className="group flex w-full items-start justify-between border-b border-gray-200 py-2.5 transition-all duration-700 ease-in-out hover:border-gray-400 sm:items-center sm:py-2.5"
    >
      <h3 className="text-base font-normal font-stretch-125%">{props.title}</h3>
      <ArrowRightIcon className="h-5 w-5 -rotate-45 opacity-50 transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100" />
    </Link>
  )
}

export default async function BlogList() {
  const posts = await readPosts()
  return (
    <div className="flex flex-col">
      {posts?.slice(0, 3)?.map((pt, idx) => (
        <BlogItem
          key={idx}
          title={pt.metadata.title}
          url={`/blog/${pt.slug}`}
        />
      ))}
    </div>
  )
}
