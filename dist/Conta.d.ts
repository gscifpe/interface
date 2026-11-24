import { Cliente } from "./Cliente";
export declare class Conta {
    private numero;
    private agencia;
    private dataAbertura;
    private limiteDiario;
    private cliente;
    private saldo;
    private bloqueada;
    private saquesHoje;
    constructor(numero: string, agencia: string, dataAbertura: Date, saldoInicial: number, limiteDiario: number, cliente: Cliente);
    consultarSaldo(): number;
    depositar(valor: number): void;
    sacar(valor: number): void;
    bloquear(): void;
    desbloquear(): void;
}
//# sourceMappingURL=Conta.d.ts.map