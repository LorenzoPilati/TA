export class Telefone {
    
    private _ddd : string;
    private _numero : number;
    private _tipo : string;


    public constructor(ddd : string, numero : number, tipo : string){
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }


    public get ddd() : string {
        return this._ddd;
    }

    public set ddd(ddd : string) {
        this._ddd = ddd;
    }


    public get numero() : number {
        return this._numero;
    }

    public set numero(numero : number) {
        this._numero = numero;
    }


    public get tipo() : string {
        return this._tipo;
    }

    public set tipo(tipo : string) {
        this._tipo = tipo;
    }
}