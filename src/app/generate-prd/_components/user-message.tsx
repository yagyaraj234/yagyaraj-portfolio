import { Streamdown } from "streamdown";

export default function UserMessage({ message }: { message: string }) {
  return (
    <Streamdown className="dark:bg-zinc-900 bg-zinc-100 px-2 py-1 rounded-lg flex-end text-end">
      {message}
    </Streamdown>
  );
}
