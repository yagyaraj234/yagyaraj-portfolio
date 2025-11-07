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
      <div className="flex justify-center gap-2 items-center mt-8 mb-4 dark:text-zinc-600 text-zinc-700 text-xs">
        <h3>Written by Yagyaraj </h3> <hr />
        <p>Published on {new Date().toLocaleDateString()}</p>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return [
    { slug: "what-is-ppr-in-nextjs" },
    { slug: "hello" },
    { slug: "whats-new-in-nextjs16" },
  ];
}

export const dynamicParams = false;
