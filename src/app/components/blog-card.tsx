import { useRouter } from "next/router";
export const BlogCard = ({ title, description, image, link }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };
  return (
    <div
      className="flex  gap-4 p-4 rounded-md bg-white dark:bg-zinc-800 shadow-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2">
        <div>{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};
