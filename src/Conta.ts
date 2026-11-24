import { Cliente } from "./Cliente";

import { ValorInvalidoException } from "./exceptions/ValorInvalidoException";
import { ContaBloqueadaException } from "./exceptions/ContaBloqueadaException";
import { SaldoInsuficienteException } from "./exceptions/SaldoInsuficienteException";
import { LimiteDiarioExcedidoException } from "./exceptions/LimiteDiarioExcedidoException";
import { ErroSaque } from "./exceptions/ErroSaque";

export class Conta {
    private saldo: number;
    private bloqueada: boolean = false;
    private saquesHoje: number = 0;

    constructor(
        private numero: string,
        private agencia: string,
        private dataAbertura: Date,
        saldoInicial: number,
        private limiteDiario: number,
        private cliente: Cliente
    ) {
        this.saldo = saldoInicial;

        cliente.adicionarConta(this);
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        if (!Number.isFinite(valor) || valor <= 0) {
            throw new Error("Valor inválido para depósito.");
        }

        this.saldo += valor;

        console.log(
            `Depósito de R$ ${valor.toFixed(2)} realizado.`
        );
    }

    sacar(valor: number): void {
        try {
            
            if (!Number.isFinite(valor) || valor <= 0) {
                throw new ValorInvalidoException();
            }

            
            if (this.bloqueada) {
                throw new ContaBloqueadaException();
            }

            
            if (valor > this.saldo) {
                throw new SaldoInsuficienteException(
                    valor - this.saldo
                );
            }

            
            if (this.saquesHoje + valor > this.limiteDiario) {
                throw new LimiteDiarioExcedidoException();
            }

            
            this.saldo -= valor;
            this.saquesHoje += valor;

            console.log(
                `Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`
            );

        } catch (erro) {
            if (erro instanceof ErroSaque) {
                this.cliente.notificar(erro.message);
            }

            throw erro;
        }
    }

    bloquear(): void {
        this.bloqueada = true;
    }

    desbloquear(): void {
        this.bloqueada = false;
    }
}