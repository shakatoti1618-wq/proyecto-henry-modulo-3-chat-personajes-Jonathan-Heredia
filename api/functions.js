import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {

    try {

        const {
            systemPrompt,
            conversation,
            temperature
        } = req.body;

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        const recentConversation =
            conversation.slice(-20);

        const history = recentConversation
        .map(message =>
        `${message.role}: ${message.content}`
    )
    .join("\n");

        const prompt = `
${systemPrompt}

Conversación:

${history}
`;

        const response =
            await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    temperature,
                    maxOutputTokens: 500
                }
            });

        return res.status(200).json({
            response: response.text
        });

    } catch (error) {

        console.error(error);

        if (error.status === 429) {
            return res.status(429).json({
                error:
                    "Límite de solicitudes alcanzado. Intenta nuevamente en unos minutos."
            });
        }

        return res.status(500).json({
            error: "Error al generar respuesta"
        });
    }
}