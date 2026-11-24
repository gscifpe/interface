import { ErroSaque } from "./ErroSaque";

export class ValorInvalidoException extends ErroSaque {
    constructor() {
        super("Valor inválido para saque.");
    }
}