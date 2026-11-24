"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const ValorInvalidoException_1 = require("./exceptions/ValorInvalidoException");
const ContaBloqueadaException_1 = require("./exceptions/ContaBloqueadaException");
const SaldoInsuficienteException_1 = require("./exceptions/SaldoInsuficienteException");
const LimiteDiarioExcedidoException_1 = require("./exceptions/LimiteDiarioExcedidoException");
const ErroSaque_1 = require("./exceptions/ErroSaque");
class Conta {
    numero;
    agencia;
    dataAbertura;
    limiteDiario;
    cliente;
    saldo;
    bloqueada = false;
    saquesHoje = 0;
    constructor(numero, agencia, dataAbertura, saldoInicial, limiteDiario, cliente) {
        this.numero = numero;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.limiteDiario = limiteDiario;
        this.cliente = cliente;
        this.saldo = saldoInicial;
        cliente.adicionarConta(this);
    }
    consultarSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) {
            throw new Error("Valor inválido para depósito.");
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
    }
    sacar(valor) {
        try {
            if (!Number.isFinite(valor) || valor <= 0) {
                throw new ValorInvalidoException_1.ValorInvalidoException();
            }
            if (this.bloqueada) {
                throw new ContaBloqueadaException_1.ContaBloqueadaException();
            }
            if (valor > this.saldo) {
                throw new SaldoInsuficienteException_1.SaldoInsuficienteException(valor - this.saldo);
            }
            if (this.saquesHoje + valor > this.limiteDiario) {
                throw new LimiteDiarioExcedidoException_1.LimiteDiarioExcedidoException();
            }
            this.saldo -= valor;
            this.saquesHoje += valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        }
        catch (erro) {
            if (erro instanceof ErroSaque_1.ErroSaque) {
                this.cliente.notificar(erro.message);
            }
            throw erro;
        }
    }
    bloquear() {
        this.bloqueada = true;
    }
    desbloquear() {
        this.bloqueada = false;
    }
}
exports.Conta = Conta;
//# sourceMappingURL=Conta.js.map