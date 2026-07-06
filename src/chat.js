import { getCharacterResponse } from "./ai.js";

const conversations = {};

export function renderChat(container, character, renderCharacters) {
    const conversation =
    conversations[character.id] || [];

    conversations[character.id] =
    conversation;

    container.innerHTML = `
        <div class="chat-container">

            <button id="back-button">
                ← Volver
            </button>

            <h2>${character.name}</h2>

            <div class="messages">
                <p>${character.greeting}</p>
            </div>

            <input
                id="message-input"
                type="text"
                placeholder="Escribe un mensaje..."
            >

            <button id="send-button">
                Enviar
            </button>

        </div>
    `;

    const backButton = document.querySelector("#back-button");

    const messageInput = document.querySelector("#message-input");

    const sendButton = document.querySelector("#send-button");

    const messages = document.querySelector(".messages");

    conversation.forEach(message => {

    if (message.role === "user") {
        messages.innerHTML += `
            <p><strong>Tú:</strong> ${message.content}</p>
        `;
    }

    if (message.role === "assistant") {
        messages.innerHTML += `
            <p><strong>${character.name}:</strong> ${message.content}</p>
        `;
    }

});

    backButton.addEventListener("click", () => {
        renderCharacters();
    });

    sendButton.addEventListener("click", async () => {

    if (messageInput.value.trim() === "") {
        return;
    }

    const userMessage = messageInput.value;

    conversation.push({
        role: "user",
        content: userMessage
    });

    messages.innerHTML += `
        <p><strong>Tú:</strong> ${userMessage}</p>
    `;

    const loadingMessage = document.createElement("p");

    loadingMessage.innerHTML = `
    <strong>${character.name}:</strong> está pensando...
    `;

    messages.appendChild(loadingMessage);

    const response =
        await getCharacterResponse(
    character,
    conversation
);
    
    loadingMessage.remove();

    messageInput.value = "";

    conversation.push({
        role: "assistant",
        content: response
    });

    messages.innerHTML += `
        <p><strong>${character.name}:</strong> ${response}</p>
    `;

});
}