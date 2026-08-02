import "dotenv/config";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

const { text } = await generateText({
  model: google("gemini-2.0-flash"),
  prompt: "Reply with only: Hello",
});

console.log(text);