import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
    try {
        const { systemPrompt, conversation } = req.body;

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        const history = conversation
            .map(message =>
                `${message.role}: ${message.content}`
            )
            .join("\n");

        const prompt = `
${systemPrompt}

Conversación:

${history}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        return res.status(200).json({
            response: response.text
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Error al generar respuesta"
        });
    }
}