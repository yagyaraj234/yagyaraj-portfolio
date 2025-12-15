import { NextRequest, NextResponse } from "next/server";
import {
  generateText,
  convertToModelMessages,
  streamText,
  UIMessage,
} from "ai";
import { google } from "@ai-sdk/google";
import { SYSTEM_PROMPT } from "./constant";

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
