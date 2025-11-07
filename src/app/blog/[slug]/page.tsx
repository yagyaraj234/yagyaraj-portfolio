import { blogData } from "./data";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <Post />

      <div className="flex flex-col text-sm font-normal text-zinc-600 mt-4">
        <p>Written by Yagyaraj </p>
        <p>Published on {new Date().toLocaleDateString()}</p>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return blogData.map((slug) => ({ slug }));
}

export const dynamicParams = false;
