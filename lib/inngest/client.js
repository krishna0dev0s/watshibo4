import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "watshibo", // Unique app ID
  name: "watshibo",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});