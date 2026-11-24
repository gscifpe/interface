import { Cliente } from './Cliente'

export interface Notificador {
    enviar(mensagem:string, cliente:Cliente):void
}