import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("❌ Gemini API key not set in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const chatSession = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
}).startChat();
