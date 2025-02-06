import LatestPost from "./_components/latest-post";

export function generateMetadata() {
  return {
    title: "Blog",
    description: " A list of all the blog's I've written.",
  };
}

export default function BlogPage() {
  return (
    <>
      <div className="px-2 text-2xl font-semibold   ">Blog</div>
      <p className="px-2 mt-4 text-sm">
        Welcome to my blog space, where I share my journey as a passionate
        frontend developer. Here, I document my experiences with React, Next.js,
        and modern web technologies, along with insights from my projects and
        problem-solving adventures.
      </p>
      <LatestPost />
    </>
  );
}
