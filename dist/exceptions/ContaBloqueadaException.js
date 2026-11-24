"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBloqueadaException = void 0;
const ErroSaque_1 = require("./ErroSaque");
class ContaBloqueadaException extends ErroSaque_1.ErroSaque {
    constructor() {
        super("A conta está bloqueada.");
    }
}
exports.ContaBloqueadaException = ContaBloqueadaException;
//# sourceMappingURL=ContaBloqueadaException.js.map