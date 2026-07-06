export function isValidMessage(message) {

    return message.trim().length > 0;

}

export function limitConversation(messages, limit = 20) {

    return messages.slice(-limit);

}

export function getCharacterError(characterId) {

    if (characterId === "goku") {
        return "¡Ups! Parece que algo interrumpió mi entrenamiento.";
    }

    if (characterId === "kratos") {
        return "Algo ha fallado. Vuelve a intentarlo.";
    }

    if (characterId === "master-chief") {
        return "Error de comunicación. Reintentando misión.";
    }

    return "Error al responder.";
}