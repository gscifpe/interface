"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoException = void 0;
const ErroSaque_1 = require("./ErroSaque");
class ValorInvalidoException extends ErroSaque_1.ErroSaque {
    constructor() {
        super("Valor inválido para saque.");
    }
}
exports.ValorInvalidoException = ValorInvalidoException;
//# sourceMappingURL=ValorInvalidoException.js.map