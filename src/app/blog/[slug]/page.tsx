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
  return [
    { slug: "what-is-ppr-in-nextjs" },
    { slug: "hello" },
    { slug: "whats-new-in-nextjs16" },
  ];
}

export const dynamicParams = false;
