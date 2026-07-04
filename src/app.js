import { renderChat } from "./chat.js";
import { characters } from "./characters.js";

const container = document.querySelector("#characters-container");

function renderCharacters() {
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

            renderChat(container, character, renderCharacters);
        });
    });
}

renderCharacters();