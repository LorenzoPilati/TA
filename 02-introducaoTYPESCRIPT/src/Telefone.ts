class Telefone {
    
    _ddd : string;
    _numero : number;
    _tipo : string;


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