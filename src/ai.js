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
            conversation
        })
    });

    const data = await response.json();

    return data.response;
}