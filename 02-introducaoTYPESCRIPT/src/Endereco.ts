class Endereco{

    _rua : string;
    _numero : number;
    _cidade : string;
    _estado : string;

    
    public get rua() : string {
        return this._rua;
    }

    public set rua(rua : string) {
        this._rua = rua;
    }
    
    
    public get numero() : number {
        return this._numero;
    }

    public set numero(numero : number) {
        this._numero = numero;
    }

    
    public get cidade() : string {
        return this._cidade;
    }

    public set cidade(cidade : string) {
        this._cidade = cidade;
    }

    
    public get estado() : string {
        return this._estado;
    }

    public set estado(estado : string) {
        this._estado = estado;
    }
}