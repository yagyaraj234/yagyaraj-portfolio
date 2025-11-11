import { getAllPostsMetadata } from "@/lib/mdx-utils";

// Get all post slugs from the content directory
export const blogData: string[] = getAllPostsMetadata().map(post => post.slug);
