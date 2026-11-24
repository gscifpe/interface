import { ErroSaque } from "./ErroSaque";

export class LimiteDiarioExcedidoException extends ErroSaque {
    constructor() {
        super("Limite diário de saques excedido.");
    }
}