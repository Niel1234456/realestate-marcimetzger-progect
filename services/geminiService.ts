
import { GoogleGenAI, Type } from "@google/genai";
import { RelocationRequest } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRelocationGuide = async (request: RelocationRequest) => {
  const prompt = `
    Generate a short, professional relocation guide for someone moving from ${request.currentCity} to ${request.movingTo}.
    Their timeframe is ${request.timeframe} and they care about: ${request.preferences}.
    Focus on the benefits of Pahrump, Nevada if that is the destination.
    Include 3 key steps for a smooth move.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful and professional real estate assistant for The Ridge Realty Group.",
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating guide:", error);
    throw error;
  }
};
