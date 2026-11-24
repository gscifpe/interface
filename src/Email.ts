import { Notificador } from "./Notificador"
import { Cliente } from "./Cliente"

export class Email implements Notificador{
    enviar(mensagem:string, cliente:Cliente):void {
        console.log(`[Email para ${cliente.nome}]: ${mensagem}`)
    }
}