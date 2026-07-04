import { characters } from "./characters.js";

const container = document.querySelector("#characters-container");

container.innerHTML = characters
    .map(character => `
    <div class="character-card">
        <h2>${character.name}</h2>
        <p>${character.description}</p>

        <button data-id="${character.id}">
            Seleccionar
        </button>
    </div>
`)
.join("");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedId = button.dataset.id;

        const character = characters.find(
            character => character.id === selectedId
        );

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
    });
});