import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

type PostMeta = {
  title: string;
  author?: string;
  date?: string; // ISO date
  lastUpdated?: string; // ISO date
  tags?: string[];
  summary?: string;
};

type PostIndexItem = {
  slug: string;
  metadata: PostMeta;
  readingTime: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content");

// Calculate reading time based on word count (average 200 words per minute)
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  if (!words) return "";
  return `${Math.ceil(minutes)} min read`;
}

// Utility: get all .mdx files as slugs
function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx$|\.md$/, ""));
}

// Dynamically import each MDX file and read exported `metadata`
async function readPosts(): Promise<PostIndexItem[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/${slug}.mdx`);
      const metadata: PostMeta = mod.metadata ?? { title: slug };

      // Read file content for reading time calculation
      const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
      const content = fs.readFileSync(filePath, "utf-8");
      const readingTime = calculateReadTime(content);

      return { slug, metadata, readingTime };
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

export const metadata = {
  title: "Blog | Yagyaraj",
  description:
    "Thoughts on software engineering, web development, and building products.",
  openGraph: {
    title: "Blog | Yagyaraj",
    description:
      "Thoughts on software engineering, web development, and building products.",
    url: "https://yagyaraj.com/blog",
    siteName: "Yagyaraj",
    images: [
      {
        url: "https://yagyaraj.com/api/og", // Default site OG or specific blog OG
        width: 1200,
        height: 630,
        alt: "Blog | Yagyaraj",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function BlogIndexPage() {
  const posts = await readPosts();

  return (
    <div className="mt-4 flex-1">
      <div className="text-2xl font-semibold mb-12 underline decoration-wavy decoration-blue-500 underline-offset-4">
        Writing. 👻
      </div>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="not-prose space-y-4">
          {posts.map(({ slug, metadata, readingTime }) => (
            <li
              key={slug}
              className="md:pb-6 pb-2 flex justify-between gap-2 max-md:flex-col"
            >
              <div>
                <h2 className="text-xl max-md:text-lg font-semibold cursor-pointer">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:underline cursor-pointer"
                  >
                    {metadata.title}
                  </Link>
                </h2>

                {metadata.summary ? (
                  <p className="text-gray-800 dark:text-gray-300 mt-2">
                    {metadata.summary}
                  </p>
                ) : null}

                {/* published date and read time */}
                <div className="flex gap-2 items-center text-xs font-medium mt-4">
                  {metadata.date && (
                    <span>{new Date(metadata.date).toLocaleDateString()}</span>
                  )}
                  {readingTime && (
                    <div className="flex gap-2 items-center ">
                      <div className="h-1 w-1 rounded-full bg-black/50"></div>
                      <span>{readingTime}</span>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
