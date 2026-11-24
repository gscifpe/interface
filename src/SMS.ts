import { Notificador } from "./Notificador"
import { Cliente } from "./Cliente"

export class SMS implements Notificador{
    enviar(mensagem:string, cliente:Cliente):void {
        console.log(`[SMS para ${cliente.nome}]: ${mensagem}`)
    }
}