"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteException = void 0;
const ErroSaque_1 = require("./ErroSaque");
class SaldoInsuficienteException extends ErroSaque_1.ErroSaque {
    falta;
    constructor(falta) {
        super(`Saldo insuficiente. Faltam R$ ${falta.toFixed(2)}.`);
        this.falta = falta;
    }
}
exports.SaldoInsuficienteException = SaldoInsuficienteException;
//# sourceMappingURL=SaldoInsuficienteException.js.map