import { ErroSaque } from "./ErroSaque";

export class ContaBloqueadaException extends ErroSaque {
    constructor() {
        super("A conta está bloqueada.");
    }
}