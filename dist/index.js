"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Conta_1 = require("./Conta");
const SMS_1 = require("./SMS");
const Email_1 = require("./Email");
const Aplicativo_1 = require("./Aplicativo");
const WhatsApp_1 = require("./WhatsApp");
const sms = new SMS_1.SMS();
const email = new Email_1.Email();
const app = new Aplicativo_1.Aplicativo();
const cliente1 = new Cliente_1.Cliente("João", "111.111.111-11", "Rua A", 2500, sms);
const cliente2 = new Cliente_1.Cliente("Maria", "222.222.222-22", "Rua B", 4000, email);
const conta1 = new Conta_1.Conta("001", "1234", new Date("2025-01-10"), 1000, 500, cliente1);
const conta2 = new Conta_1.Conta("002", "1234", new Date("2025-03-15"), 2000, 1000, cliente2);
console.log("\n--- VALOR INVÁLIDO ---");
try {
    conta1.sacar(-50);
}
catch (erro) {
    console.log(erro.message);
}
try {
    conta2.sacar(0);
}
catch (erro) {
    console.log(erro.message);
}
console.log("\n--- CONTA BLOQUEADA ---");
conta1.bloquear();
conta2.bloquear();
try {
    conta1.sacar(100);
}
catch (erro) {
    console.log(erro.message);
}
try {
    conta2.sacar(200);
}
catch (erro) {
    console.log(erro.message);
}
conta1.desbloquear();
conta2.desbloquear();
console.log("\n--- SALDO INSUFICIENTE ---");
try {
    conta1.sacar(1500);
}
catch (erro) {
    console.log(erro.message);
}
try {
    conta2.sacar(2500);
}
catch (erro) {
    console.log(erro.message);
}
console.log("\n--- LIMITE DIÁRIO ---");
try {
    conta1.sacar(400);
    conta1.sacar(200);
}
catch (erro) {
    console.log(erro.message);
}
try {
    conta2.sacar(800);
    conta2.sacar(300);
}
catch (erro) {
    console.log(erro.message);
}
console.log("\n--- SAQUES VÁLIDOS ---");
try {
    conta1.sacar(100);
}
catch (erro) {
    console.log(erro.message);
}
try {
    conta2.sacar(100);
}
catch (erro) {
    console.log(erro.message);
}
console.log("\n--- DEPÓSITOS ---");
conta1.depositar(300);
conta2.depositar(500);
console.log("\n--- CONSULTA DE SALDO ---");
console.log(`Saldo João: R$ ${conta1.consultarSaldo().toFixed(2)}`);
console.log(`Saldo Maria: R$ ${conta2.consultarSaldo().toFixed(2)}`);
console.log("\n--- TROCA DE NOTIFICADOR ---");
cliente1.trocarNotificador(app);
try {
    conta1.sacar(-10);
}
catch (erro) {
    console.log(erro.message);
}
const whatsapp = new WhatsApp_1.WhatsApp();
cliente2.trocarNotificador(whatsapp);
try {
    conta2.sacar(-20);
}
catch (erro) {
    console.log(erro.message);
}
//# sourceMappingURL=index.js.map