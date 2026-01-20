
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

// Helper function to call the Gemini API with conversation history.
export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    // Initialize GoogleGenAI with the required named parameter and direct process.env.API_KEY access.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Generate content using the recommended gemini-3-flash-preview model for Q&A tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.8,
        // maxOutputTokens is omitted to avoid blocking responses; thinkingBudget not required for basic text tasks.
      },
    });

    // Access the .text property directly to extract the string output.
    return response.text || "I'm having a bit of engine trouble. Could you repeat that?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Disconnected from the ECU. Please try again later.";
  }
};
