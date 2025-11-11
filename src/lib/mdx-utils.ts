import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  author?: string;
  date?: string;
  tags?: string[];
  summary?: string;
  slug: string;
}

export function getPostMetadata(slug: string): PostMetadata | null {
  try {
    const filePath = path.join(process.cwd(), "src/content", `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // First try to extract metadata from JavaScript export
    const jsMetadataMatch = fileContents.match(
      /export const metadata\s*=\s*({[\s\S]*?});/
    );
    if (jsMetadataMatch) {
      try {
        // Extract the object and evaluate it safely
        const metadataString = jsMetadataMatch[1];
        // Simple regex to extract key-value pairs (basic implementation)
        const titleMatch = metadataString.match(/title:\s*["']([^"']+)["']/);
        const authorMatch = metadataString.match(/author:\s*["']([^"']+)["']/);
        const dateMatch = metadataString.match(/date:\s*["']([^"']+)["']/);
        const summaryMatch = metadataString.match(
          /summary:\s*["']([^"']+)["']/
        );
        const tagsMatch = metadataString.match(/tags:\s*\[([^\]]*)\]/);

        const metadata = {
          title: titleMatch ? titleMatch[1] : "Untitled Post",
          author: authorMatch ? authorMatch[1] : undefined,
          date: dateMatch ? dateMatch[1] : undefined,
          summary: summaryMatch ? summaryMatch[1] : undefined,
          tags: tagsMatch
            ? tagsMatch[1]
                .split(",")
                .map((tag) => tag.trim().replace(/["']/g, ""))
            : [],
          slug,
        };

        return metadata;
      } catch (jsError) {
        console.warn(
          `Failed to parse JS metadata for ${slug}, falling back to gray-matter`
        );
      }
    }

    // Fallback to gray-matter for YAML frontmatter
    const { data } = matter(fileContents);

    return {
      title: data.title || "Untitled Post",
      author: data.author,
      date: data.date,
      tags: data.tags || [],
      summary: data.summary,
      slug,
    };
  } catch (error) {
    console.error(`Error reading metadata for ${slug}:`, error);
    return null;
  }
}

export function getAllPostsMetadata(): PostMetadata[] {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      return getPostMetadata(slug);
    })
    .filter((metadata): metadata is PostMetadata => metadata !== null)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
}
