export default class Protein{

    constructor(private _nome: string, private _peso:number){}

    get nome(): string{
        return this._nome;
    }

    set nome(nome: string){
        this._nome = nome;
    }

    get peso(): number{
        return this._peso;
    }

    set peso(peso: number){
        this._peso = peso;
    }
}