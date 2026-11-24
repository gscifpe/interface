import { Conta } from "./Conta";
import { Notificador } from "./Notificador";

export class Cliente {
    private contas: Conta[] = [];

    constructor(
        public nome: string,
        private cpf: string,
        private endereco: string,
        private renda: number,
        private notificador: Notificador
    ) {}

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    trocarNotificador(notificador: Notificador): void {
        this.notificador = notificador;
    }

    notificar(mensagem: string): void {
        this.notificador.enviar(mensagem, this);
    }

    listarContas(): Conta[] {
        return [...this.contas];
    }
}