export function renderChat(container, character, renderCharacters) {
    let conversation = [];
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

    backButton.addEventListener("click", () => {
        renderCharacters();
    });

    sendButton.addEventListener("click", () => {

    if (messageInput.value.trim() === "") {
        return;
    }

    const userMessage = messageInput.value;

    conversation.push({
    role: "user",
    content: userMessage
});

    messages.innerHTML += `
    <p><strong>Tú:</strong> ${userMessage}</p>`;

    messageInput.value = "";

    let response = "";

    if (character.id === "goku") {
    response = "¡Genial! ¿Quieres entrenar conmigo?";
}

    if (character.id === "kratos") {
    response = "Habla, guerrero.";
}

    if (character.id === "master-chief") {
    response = "Espero tus órdenes.";
}

    conversation.push({
    role: "assistant",
    content: response
});

    messages.innerHTML += `
    <p><strong>${character.name}:</strong> ${response}</p>`;

});
}