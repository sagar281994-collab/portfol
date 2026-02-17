
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface TalentAdviceResponse {
  text: string;
  sources: { title: string; uri: string }[];
}

export const getTalentAdvice = async (query: string): Promise<TalentAdviceResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are an AI-powered Talent Acquisition Assistant for Alex Vance, an elite AI/ML recruiter. 
        Your goal is to provide authoritative, data-driven insights on the AI talent market.
        Always maintain a professional, visionary, 'Tech Noir' tone.
        If users ask about salaries, hiring trends, or specific companies, use your search tools to provide current data.
        Keep responses concise (3-4 sentences).`,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "The talent network is currently recalibrating. Please try again soon.";
    
    // Extract grounding chunks for sources
    const sources: { title: string; uri: string }[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.web && chunk.web.uri) {
          sources.push({
            title: chunk.web.title || "Market Source",
            uri: chunk.web.uri
          });
        }
      });
    }

    // Remove duplicates
    const uniqueSources = Array.from(new Set(sources.map(s => s.uri)))
      .map(uri => sources.find(s => s.uri === uri)!);

    return { text, sources: uniqueSources };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { 
      text: "The global talent grid is experiencing a momentary sync issue. Connect with Alex directly for urgent high-end sourcing needs.",
      sources: []
    };
  }
};
