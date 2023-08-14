export default class Contato{
    private _nome: string;
    private _telefone: number;

    constructor(nome: string, telefone: number){
        this._nome = nome;
        this._telefone = telefone;
    }

    get nome(): string{
        return this._nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    get telefone(): number{
        return this._telefone;
    }

    set telefone(telefone: number){
        this._telefone = telefone;
    }
}