export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [
    { slug: "what-is-ppr-in-nextjs" },
    { slug: "hello" },
    { slug: "whats-new-in-nextjs16" },
  ];
}

export const dynamicParams = false;
