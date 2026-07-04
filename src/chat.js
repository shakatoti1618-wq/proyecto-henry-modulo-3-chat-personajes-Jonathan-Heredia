export function renderChat(container, character, renderCharacters) {
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
                type="text"
                placeholder="Escribe un mensaje..."
            >

            <button>
                Enviar
            </button>

        </div>
    `;

    const backButton = document.querySelector("#back-button");

    backButton.addEventListener("click", () => {
        renderCharacters();
    });
}