"use server";
import { db } from "@/db/drizzle";
import { blogLikes, blog } from "@/db/schema";
import { log } from "console";
import { eq } from "drizzle-orm";

type LikePost = {
  slug: string;
  title: string;
};

async function createPost(slug: string, title: string) {
  try {
    //  check if exist or not
    const existingPost = await db
      .select({ id: blog.id })
      .from(blog)
      .where(eq(blog.slug, slug));

    if (existingPost.length > 0) {
      console.log("existingPost", existingPost);
      return existingPost;
    }

    const post = await db
      .insert(blog)
      .values({
        slug,
        title: title,
        published: true,
      })
      .returning();

    return post;
  } catch (error) {
    console.log("err", error);
    throw error;
  }
}

export async function likePost({ slug = "", title }: LikePost) {
  try {
    const post = await createPost(slug, title);
    console.log("pst", post);
    if (post) {
      const postId = post[0]?.id;
      const res = await db.insert(blogLikes).values({
        blogId: postId,
        userId: 1,
        clapCount: 10,
      });

      log(res);
    }
  } catch (error) {}
}
