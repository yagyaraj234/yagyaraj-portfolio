import { Check, Copy, Pen, Pencil } from "lucide-react";
import { useState } from "react";

import { Streamdown } from "streamdown";

export default function UserMessage({ message }: { message: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="group relative flex-col items-end justify-end gap-2">
      <Streamdown className="dark:bg-zinc-900 bg-zinc-100 p-2 rounded-lg flex-end text-start sm:max-w-xl">
        {message}
      </Streamdown>
      <div className="group-hover:visible invisible mt-2 transition-all duration-500 ease-in-out">
        <div className="flex gap-4 items-center justify-end">
          {copied ? (
            <Check size={16} className="cursor-pointer" />
          ) : (
            <Copy size={16} className="cursor-pointer" onClick={copy} />
          )}
          <Pencil size={16} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
