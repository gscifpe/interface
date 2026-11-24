import { ErroSaque } from "./ErroSaque";

export class SaldoInsuficienteException extends ErroSaque {
    constructor(public falta: number) {
        super(`Saldo insuficiente. Faltam R$ ${falta.toFixed(2)}.`);
    }
}