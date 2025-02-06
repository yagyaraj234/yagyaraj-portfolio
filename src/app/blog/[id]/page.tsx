import { getBlogPosts } from "../utils";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const posts = getBlogPosts().find((post) => post.slug === params.id);

  if (!posts) {
    return null;
  }
  return {
    title: posts.metadata.title,
    description: posts.metadata.description,
    openGraph: {
      title: posts.metadata.title,
      description: posts.metadata.description,
      images: [
        {
          url: posts.metadata.image,
          width: 1200,
          height: 630,
          alt: posts.metadata.title,
        },
      ],
    },
  };
}
export default async function BlogPage({ params }: { params: { id: string } }) {
  const posts = getBlogPosts().filter((post) => post.slug === params.id);
  return <div>{posts[0].metadata.title}</div>;
}
