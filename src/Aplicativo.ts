import { Notificador } from "./Notificador"
import { Cliente } from "./Cliente"

export class Aplicativo implements Notificador{
    enviar(mensagem:string, cliente:Cliente):void {
        console.log(`[APP para ${cliente.nome}]: ${mensagem}`)
    }
}