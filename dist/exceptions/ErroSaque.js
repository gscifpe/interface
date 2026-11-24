"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErroSaque = void 0;
class ErroSaque extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = new.target.name;
    }
}
exports.ErroSaque = ErroSaque;
//# sourceMappingURL=ErroSaque.js.map