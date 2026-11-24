import { Conta } from "./Conta";
import { Notificador } from "./Notificador";
export declare class Cliente {
    nome: string;
    private cpf;
    private endereco;
    private renda;
    private notificador;
    private contas;
    constructor(nome: string, cpf: string, endereco: string, renda: number, notificador: Notificador);
    adicionarConta(conta: Conta): void;
    trocarNotificador(notificador: Notificador): void;
    notificar(mensagem: string): void;
    listarContas(): Conta[];
}
//# sourceMappingURL=Cliente.d.ts.map