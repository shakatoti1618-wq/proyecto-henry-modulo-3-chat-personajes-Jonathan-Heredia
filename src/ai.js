export async function getCharacterResponse(character) {

    if (character.id === "goku") {
        return "¡Genial! ¿Quieres entrenar conmigo?";
    }

    if (character.id === "kratos") {
        return "Habla, guerrero.";
    }

    if (character.id === "master-chief") {
        return "Espero tus órdenes.";
    }
}