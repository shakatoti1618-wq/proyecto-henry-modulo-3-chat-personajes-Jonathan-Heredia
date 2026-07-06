import { describe, it, expect } from "vitest";

import {
    isValidMessage,
    limitConversation,
    getCharacterError
} from "../src/utils.js";

describe("isValidMessage", () => {

    it("debe validar mensajes correctos", () => {

        expect(
            isValidMessage("Hola")
        ).toBe(true);

    });

    it("debe rechazar mensajes vacíos", () => {

        expect(
            isValidMessage("   ")
        ).toBe(false);

    });

});

describe("limitConversation", () => {

    it("debe limitar mensajes", () => {

        const messages =
            Array.from({ length: 30 });

        expect(
            limitConversation(messages).length
        ).toBe(20);

    });

});

describe("getCharacterError", () => {

    it("debe devolver error de Goku", () => {

        expect(
            getCharacterError("goku")
        ).toContain("entrenamiento");

    });

});