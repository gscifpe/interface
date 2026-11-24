"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    enviar(mensagem, cliente) {
        console.log(`[Email para ${cliente.nome}]: ${mensagem}`);
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map