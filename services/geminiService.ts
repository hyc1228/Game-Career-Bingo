import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const generateDeepDive = async (question: string, seedContext: string): Promise<string> => {
  if (!aiClient) {
    console.warn("Gemini API Key not found.");
    return "";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are an expert Game Design Mentor and Life Coach who speaks in video game metaphors.
      
      Context: Two users are playing a co-op Bingo game to know each other better.
      The current question is: "${question}"
      Room Seed: "${seedContext}"

      Task: Provide a "Deep Dive" follow-up. This should be a profound, specific insight or a challenging follow-up question that bridges game design concepts with personal growth/career advice.

      Style:
      - Use RPG/Dev terminology (mechanics, loops, balancing, mana, grinding, endgame).
      - Be concise (max 2 sentences).
      - Make it feel like an "Unlockable Secret" or "Mentor's Wisdom".
    `;

    const response = await aiClient.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text?.trim() || "";
  } catch (error: any) {
    // Gracefully handle Rate Limits (429)
    if (error.status === 429 || (error.message && error.message.includes('429'))) {
        console.warn("Gemini API Rate Limit (429) hit. Using offline fallback hint.");
        return ""; // Returning empty string triggers the fallbackHint in UI
    }
    
    console.error("Error generating hint:", error);
    return "";
  }
};