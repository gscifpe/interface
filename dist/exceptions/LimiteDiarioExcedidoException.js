"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimiteDiarioExcedidoException = void 0;
const ErroSaque_1 = require("./ErroSaque");
class LimiteDiarioExcedidoException extends ErroSaque_1.ErroSaque {
    constructor() {
        super("Limite diário de saques excedido.");
    }
}
exports.LimiteDiarioExcedidoException = LimiteDiarioExcedidoException;
//# sourceMappingURL=LimiteDiarioExcedidoException.js.map