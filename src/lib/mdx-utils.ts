import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  author?: string;
  date?: string;
  lastUpdated?: string;
  tags?: string[];
  summary?: string;
  slug: string;
  ogImage?: string;
}

export function getPostMetadata(slug: string): PostMetadata | null {
  try {
    const filePath = path.join(process.cwd(), "src/content", `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // First try to extract metadata from JavaScript export
    const jsMetadataMatch = fileContents.match(
      /export const metadata\s*=\s*({[\s\S]*?});/,
    );
    if (jsMetadataMatch) {
      try {
        // Extract the object and evaluate it safely
        const metadataString = jsMetadataMatch[1];
        // Simple regex to extract key-value pairs (basic implementation)
        const titleMatch = metadataString.match(/title:\s*(["'])([\s\S]*?)\1/);
        const authorMatch = metadataString.match(
          /author:\s*(["'])([\s\S]*?)\1/,
        );
        const dateMatch = metadataString.match(/date:\s*(["'])([\s\S]*?)\1/);
        const summaryMatch = metadataString.match(
          /summary:\s*(["'])([\s\S]*?)\1/,
        );
        const tagsMatch = metadataString.match(/tags:\s*\[([^\]]*)\]/);
        const ogImageMatch = metadataString.match(
          /ogImage:\s*(["'])([\s\S]*?)\1/,
        );
        const lastUpdatedMatch = metadataString.match(
          /lastUpdated:\s*(["'])([\s\S]*?)\1/,
        );

        const metadata = {
          title: titleMatch ? titleMatch[2] : "Untitled Post",
          author: authorMatch ? authorMatch[2] : undefined,
          date: dateMatch ? dateMatch[2] : undefined,
          lastUpdated: lastUpdatedMatch ? lastUpdatedMatch[2] : undefined,
          summary: summaryMatch ? summaryMatch[2] : undefined,
          tags: tagsMatch
            ? tagsMatch[1]
                .split(",")
                .map((tag) => tag.trim().replace(/["']/g, ""))
            : [],
          slug,
          ogImage: ogImageMatch ? ogImageMatch[1] : undefined,
        };

        return metadata;
      } catch (jsError) {
        console.warn(
          `Failed to parse JS metadata for ${slug}, falling back to gray-matter`,
        );
      }
    }

    // Fallback to gray-matter for YAML frontmatter
    const { data } = matter(fileContents);

    return {
      title: data.title || "Untitled Post",
      author: data.author,
      date: data.date,
      lastUpdated: data.lastUpdated,
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
