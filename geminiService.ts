
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function askSenseiAboutTechnique(techniqueName: string, japaneseName: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um mestre (Sensei) de Judô 8º Dan. Explique a técnica ${techniqueName} (${japaneseName}) com foco em biomecânica avançada para um candidato a faixa preta. Não use imagens, use descrições ricas.`,
    });
    return response.text;
  } catch (error) {
    return "O Sensei está em meditação. Tente novamente.";
  }
}

export async function askSenseiAboutTheme(theme: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um Sensei de Judô experiente. Gere uma aula aleatória e profunda sobre o tema: "${theme}". 
      A aula deve ser voltada para um candidato a FAIXA PRETA (Yudansha). 
      Se for sobre técnicas, fale de detalhes ocultos de pegada e quadril. 
      Se for filosofia, fale de Jigoro Kano e o impacto no mundo moderno.
      Responda em Português do Brasil com tom solene e educativo.`,
    });
    return response.text;
  } catch (error) {
    return "A conexão com o Dojo foi interrompida. Tente novamente.";
  }
}

export async function generateRandomTheoryQuestion() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Gere uma pergunta de múltipla escolha sobre a história ou filosofia do judô para um exame de faixa preta da CBJ. Retorne no formato JSON.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctAnswer: { type: Type.INTEGER },
            explanation: { type: Type.STRING }
          },
          required: ["question", "options", "correctAnswer", "explanation"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    return null;
  }
}
