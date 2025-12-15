"use client";

import AI_Input_Search from "@/components/kokonutui/ai-input-search";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import { Streamdown } from "streamdown";
import UserMessage from "./_components/user-message";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, isLoading } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/generate",
    }),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim() !== "") {
      sendMessage({ text: input });
      setInput("");
    }
  }
  return (
    <div className="flex flex-col w-full  py-4 mx-auto stretch h-full scrollbar-thin scrollbar-none relative font-inter ">
      <div className="flex-1 overflow-y-auto  space-y-4 mb-40 ">
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            {/* {message.role === "user" ? "User: " : "AI: "} */}
            <br />
            <div
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case "text":
                    if (message.role === "user") {
                      return <UserMessage message={part.text} />;
                    }
                    return (
                      <Streamdown
                        key={`${message.id}-${i}`}
                        isAnimating={isLoading && message.role === "assistant"}
                      >
                        {part.text}
                      </Streamdown>
                    );
                }
              })}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 right-0 z-10"
      >
        <AI_Input_Search
          value={input}
          setValue={setInput}
          submit={handleSubmit}
        />
      </form>
    </div>
  );
}
