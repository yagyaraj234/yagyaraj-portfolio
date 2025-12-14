import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { SYSTEM_PROMPT } from "./constant";

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  const { text } = await generateText({
    model: google("gemini-2.0-flash-exp"),
    system: SYSTEM_PROMPT,
    prompt: query,
  });

  return NextResponse.json({ text });
}
