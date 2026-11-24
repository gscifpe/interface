import { Notificador } from "./Notificador"
import { Cliente } from "./Cliente"

export class WhatsApp implements Notificador{
    enviar(mensagem:string, cliente:Cliente):void {
        console.log(`[WhatsApp para ${cliente.nome}]: ${mensagem}`)
    }
}