import fs from "node:fs";
import path from "node:path";
import { PostIndexItem, PostMeta } from "@/types/blog.types";

const POSTS_DIR = path.join(process.cwd(), "src", "content");

// Calculate reading time based on word count (average 200 words per minute)
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  if (!words) return "";
  return `${Math.ceil(minutes)} min read`;
}

// Utility: get all .mdx files as slugs
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx$|\.md$/, ""));
}

// Dynamically import each MDX file and read exported `metadata`
export async function readPosts(): Promise<PostIndexItem[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const mod = await import(`@/content/${slug}.mdx`);
        const metadata: PostMeta = mod.metadata ?? { title: slug };

        // Read file content for reading time calculation
        const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
        const content = fs.readFileSync(filePath, "utf-8");
        const readingTime = calculateReadTime(content);

        return { slug, metadata, readingTime };
      } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
      }
    })
  );

  const validPosts = posts.filter((post): post is PostIndexItem => post !== null);

  // Sort by date desc if present
  validPosts.sort((a, b) => {
    const ad = a.metadata.date ? Date.parse(a.metadata.date) : 0;
    const bd = b.metadata.date ? Date.parse(b.metadata.date) : 0;
    return bd - ad;
  });

  return validPosts;
}

export async function getPostsByTag(tag: string): Promise<PostIndexItem[]> {
  const allPosts = await readPosts();
  return allPosts.filter(post => 
    post.metadata.tags?.includes(tag)
  );
}
