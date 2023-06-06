export class Produto {

    _codigo : number;
    _descricao : string;
    _valor : number;

    
    public get codigo() : number {
        return this._codigo;
    }

    public set codigo(codigo : number) {
        this._codigo = codigo;
    }


    public get descricao() : string {
        return this._descricao;
    }

    public set descricao(descricao : string) {
        this._descricao = descricao;
    }


    public get valor() : number {
        return this._valor;
    }

    public set valor(valor : number) {
        this._valor = valor;
    }
}