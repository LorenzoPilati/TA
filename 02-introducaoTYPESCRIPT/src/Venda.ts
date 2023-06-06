import {Cliente} from "./Cliente";
import {Produto} from "./Produto";
export class Venda {

    _codigo : number;
    _data : number;
    _cliente : Cliente;
    _produto : Produto[];


    public get codigo() : number {
        return this._codigo;
    }

    public set codigo(codigo : number) {
        this._codigo = codigo;
    }


    public get data() : number {
        return this._data
    }

    public set data(data : number) {
        this._data = data;
    }

    
    public get cliente() : Cliente {
        return this._cliente;
    }

    public set cliente(cliente : Cliente) {
        this._cliente = cliente;
    }

    
    public get produto() : Produto[] {
        return this._produto;
    }

    public set produto(produto : Produto[]) {
        this._produto = produto;
    }
}