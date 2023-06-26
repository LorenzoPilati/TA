export default class Sauce{

    constructor(private _nome: string){}

    get nome(): string{
        return this._nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }
}