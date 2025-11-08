// app/blog/page.tsx
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";

type PostMeta = {
  title: string;
  author?: string;
  date?: string; // ISO date
  tags?: string[];
  summary?: string;
};

type PostIndexItem = {
  slug: string;
  metadata: PostMeta;
};

console.log(
  "content directory",
  path.join(process.cwd(), "content"),
  process.cwd()
);
const POSTS_DIR = path.join(process.cwd(), "src", "content");

// Utility: get all .mdx files as slugs
function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx$|.md$/, ""));
}

// Dynamically import each MDX file and read exported `metadata`
async function readPosts(): Promise<PostIndexItem[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/${slug}.mdx`);
      const metadata: PostMeta = mod.metadata ?? { title: slug };
      return { slug, metadata };
    })
  );

  // Sort by date desc if present
  posts.sort((a, b) => {
    const ad = a.metadata.date ? Date.parse(a.metadata.date) : 0;
    const bd = b.metadata.date ? Date.parse(b.metadata.date) : 0;
    return bd - ad;
  });

  return posts;
}

export const dynamic = "force-static"; // list can be built at build-time; adjust if posts change often

export default async function BlogIndexPage() {
  const posts = await readPosts();
  console.log("posts --->", posts);

  return (
    <div className="mt-8">
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="not-prose space-y-6">
          {posts.map(({ slug, metadata }) => (
            <li key={slug} className=" pb-6 flex justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold">
                  <Link href={`/blog/${slug}`} className="hover:underline">
                    {metadata.title}
                  </Link>
                </h2>
                <div className="mt-1 text-sm text-muted-foreground">
                  {metadata.author ? <span>By {metadata.author}</span> : null}
                  {metadata.date ? (
                    <span>
                      {" "}
                      • {new Date(metadata.date).toLocaleDateString()}
                    </span>
                  ) : null}
                </div>
                {metadata.summary ? (
                  <p className="mt-2">{metadata.summary}</p>
                ) : null}
                {metadata.tags && metadata.tags.length > 0 ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {metadata.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <Image
                src={`/post/${slug}.webp`}
                alt={metadata.title}
                width={300}
                height={100}
                className="rounded-md bg-white"
                loading="lazy"
                priority={false}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
