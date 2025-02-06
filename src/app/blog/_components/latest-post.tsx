import Link from "next/link";
import { formatDate, getBlogPosts } from "../utils";

export default function LatestPost() {
  let latestPost = getBlogPosts();
  return (
    <div>
      <h1 className="mt-4 text-2xl font-semibold px-2">Recently Published</h1>

      {latestPost.map((post) => {
        return (
          <article
            key={post.slug}
            className="my-4 border-b border-zinc-200 dark:border-zinc-700 pb-4 last:border-none p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900  hover:bg-zinc-100 transition-colors duration-300 ease-in-out"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-medium text-2xl text-pretty normal-case ">
                {post.metadata.title}
              </h2>
            </Link>

            <p className="text-sm normal-case leading-8 select-none">
              {post.metadata.description}
            </p>

            <div>{formatDate(post.metadata.date)}</div>
          </article>
        );
      })}
    </div>
  );
}
