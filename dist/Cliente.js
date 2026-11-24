"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    nome;
    cpf;
    endereco;
    renda;
    notificador;
    contas = [];
    constructor(nome, cpf, endereco, renda, notificador) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
        this.notificador = notificador;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    trocarNotificador(notificador) {
        this.notificador = notificador;
    }
    notificar(mensagem) {
        this.notificador.enviar(mensagem, this);
    }
    listarContas() {
        return [...this.contas];
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map