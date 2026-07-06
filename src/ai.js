export async function getCharacterResponse(
    character,
    conversation
) {

    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            systemPrompt: character.systemPrompt,
            conversation,
            temperature: character.temperature
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error || "Error del servidor"
        );
    }

    return data.response;
}