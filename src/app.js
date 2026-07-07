import { renderChat } from "./chat.js";
import { characters } from "./characters.js";

function normalizePath(path) {

    return path.length > 1
        ? path.replace(/\/$/, "")
        : path;
}
const container =
    document.querySelector("#characters-container");

function renderHome() {

    container.innerHTML = `
        <div class="home-view">

            <h2>Bienvenido al Chat de Personajes</h2>

            <p>
                Elige tu personaje favorito y
                conversa con él.
            </p>

            <button id="start-button">
                Empezar
            </button>

        </div>
    `;

    document
        .querySelector("#start-button")
        .addEventListener("click", () => {

            history.pushState(
                {},
                "",
                "/chat"
            );

            renderRoute();
        });
}

function renderAbout() {

    container.innerHTML = `
        <div class="about-view">

            <h2>Acerca del Proyecto</h2>

            <p>
                Chat de Personajes es una aplicación
                desarrollada como Proyecto Integrador
                del Módulo 3.
            </p>

            <br>

            <p>
                Permite conversar con personajes
                ficticios mediante inteligencia
                artificial utilizando Gemini AI.
            </p>

            <br>

            <h3>Tecnologías Utilizadas</h3>

            <ul>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Gemini AI</li>
                <li>Vercel Functions</li>
            </ul>

            <br>

            <h3>Características</h3>

            <ul>
                <li>Single Page Application (SPA)</li>
                <li>Diseño Responsive</li>
                <li>Historial de Conversación</li>
                <li>Múltiples Personajes</li>
                <li>Integración con Inteligencia Artificial</li>
            </ul>

            <br>

            <h3>Personajes Disponibles</h3>

            <ul>
                <li>🥋 Goku</li>
                <li>⚔️ Kratos</li>
                <li>🛡️ Jefe Maestro</li>
            </ul>

            <br>

            <button id="go-chat-button">
                Ir al Chat
            </button>

        </div>
    `;

    document
        .querySelector("#go-chat-button")
        .addEventListener("click", () => {

            history.pushState(
                {},
                "",
                "/chat"
            );

            renderRoute();
        });
}

function renderCharacters() {

    container.innerHTML = characters
        .map(character => `
            <div class="character-card">

                <img
                class="character-image"
                src="${character.image}"
                alt="${character.name}"
            >

            <h2>${character.name}</h2>

            <p>
                ${character.description}
            </p>

            <button
                data-id="${character.id}"
            >
        Seleccionar
    </button>

</div>

`)

    .join("");

    const buttons =
        document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedId =
                button.dataset.id;

            const character =
                characters.find(
                    character =>
                        character.id === selectedId
                );

            renderChat(
                container,
                character,
                renderCharacters
            );
        });
    });
}

function renderRoute() {

    const path =
        normalizePath(
            window.location.pathname
        );

    if (
        path === "/" ||
        path === "/home"
    ) {
        renderHome();
        return;
    }

    if (path === "/about") {
        renderAbout();
        return;
    }

    if (path === "/chat") {
        renderCharacters();
        return;
    }

    renderHome();
}

document
    .querySelector("#home-nav")
    .addEventListener("click", () => {

        history.pushState(
            {},
            "",
            "/home"
        );

        renderRoute();
    });

document
    .querySelector("#chat-nav")
    .addEventListener("click", () => {

        history.pushState(
            {},
            "",
            "/chat"
        );

        renderRoute();
    });

document
    .querySelector("#about-nav")
    .addEventListener("click", () => {

        history.pushState(
            {},
            "",
            "/about"
        );

        renderRoute();
    });

window.addEventListener(
    "popstate",
    renderRoute
);

renderRoute();