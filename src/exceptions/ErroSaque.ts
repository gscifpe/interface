export abstract class ErroSaque extends Error{
    constructor(mensagem:string){
        super(mensagem)
        this.name = new.target.name
    }
}