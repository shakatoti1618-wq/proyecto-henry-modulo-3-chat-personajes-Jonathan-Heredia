import { getCharacterResponse } from "./ai.js";

const conversations = {};

export function renderChat(container, character, renderCharacters) {

    let currentImage = character.image;

    const backgrounds = {
    goku: "./src/images/templo1.png",
    kratos: "./src/images/olimpo.png",
    "master-chief": "./src/images/halo.png"
};

    const conversation =
    conversations[character.id] || [];

    conversations[character.id] =
    conversation;

    container.innerHTML = `
<div
    class="chat-background"
    style="
        background-image: url('${backgrounds[character.id]}');
    "
>

    <div class="chat-container">

        <div class="chat-overlay">

            <button id="back-button">
                ← Volver
            </button>

            <button id="clear-chat-button">
                🗑️ Limpiar conversación
            </button>

            <h2>${character.name}</h2>

            <img
                id="character-image"
                class="chat-character-image"
                src="${currentImage}"
                alt="${character.name}"
            >

            <div class="transformations">

                ${Object.entries(character.forms)
                    .map(([key, form]) => `
                        <button
                            class="form-button"
                            data-form="${key}"
                        >
                            ${form.title}
                        </button>
                    `)
                    .join("")}

            </div>

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

    </div>

</div>
`;

    const backButton = document.querySelector("#back-button");

    const clearButton =
    document.querySelector("#clear-chat-button");

    const messageInput = document.querySelector("#message-input");

    const sendButton = document.querySelector("#send-button");

    messageInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        sendButton.click();

    }

});

    const messages = document.querySelector(".messages");

    const characterImage =
        document.querySelector("#character-image");

    const formButtons =
        document.querySelectorAll(".form-button");

    function scrollToBottom() {
        messages.scrollTop = messages.scrollHeight;
}

    conversation.forEach(message => {

    if (message.role === "user") {
        messages.innerHTML += `
            <p class="user-message">
                <strong>Tú:</strong> ${message.content}
            </p>
        `;
    }

    if (message.role === "assistant") {
        messages.innerHTML += `
            <p class="assistant-message">
                <strong>${character.name}:</strong> ${message.content}
            </p>
        `;
    }

});

    scrollToBottom();

    backButton.addEventListener("click", () => {
        renderCharacters();
    });

    clearButton.addEventListener("click", () => {

    conversations[character.id] = [];

    messages.innerHTML = `
        <p>${character.greeting}</p>
    `;
});

    formButtons.forEach(button => {

    button.addEventListener("click", () => {

        const form =
            character.forms[
                button.dataset.form
            ];

        characterImage.src =
            form.image;

    });

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
        <p class="user-message">
            <strong>Tú:</strong> ${userMessage}
        </p>
    `;

        scrollToBottom();

    const loadingMessage = document.createElement("p");

    loadingMessage.innerHTML = `
    <strong>${character.name}:</strong> está pensando...
    `;

    messages.appendChild(loadingMessage);

    try {

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
        <p class="assistant-message">
            <strong>${character.name}:</strong> ${response}
        </p>
    `;

        scrollToBottom();

}  catch (error) {

    loadingMessage.remove();

    messageInput.value = "";

    console.error(error);

    let errorMessage =
        "Lo siento, tuve un problema al responder.";

    if (character.id === "goku") {

        errorMessage =
            "¡Ups! Parece que algo interrumpió mi entrenamiento. ¡Intenta otra vez!";

    }

    if (character.id === "kratos") {

        errorMessage =
            "Algo ha fallado. Vuelve a intentarlo.";

    }

    if (character.id === "master-chief") {

        errorMessage =
            "Error de comunicación. Reintentando misión.";

    }

    messages.innerHTML += `
        <p class="assistant-message">
            <strong>${character.name}:</strong>
            ${errorMessage}
        </p>
    `;

    scrollToBottom();
}
});
}