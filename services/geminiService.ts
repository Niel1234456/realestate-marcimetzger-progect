import { GoogleGenAI, Type } from "@google/genai";
import { WorkoutRequest, GeneratedWorkout } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutRoutine = async (request: WorkoutRequest): Promise<GeneratedWorkout> => {
  const prompt = `
    Create a ${request.intensity} ${request.type} workout routine that lasts exactly ${request.duration} minutes.
    The user has the following equipment: ${request.equipment || "None (Bodyweight only)"}.
    
    Return a structured JSON response with a catchy title, a brief description, a list of exercises (with name, brief instructions, and duration/reps), and a cool-down tip.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            exercises: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  instructions: { type: Type.STRING },
                  durationOrReps: { type: Type.STRING }
                }
              }
            },
            coolDown: { type: Type.STRING }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedWorkout;
    }
    
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Error generating workout:", error);
    throw error;
  }
};
