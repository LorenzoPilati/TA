import {Cliente} from "./Cliente";
import {Produto} from "./Produto";
export class Venda {

    private _codigo : number;
    private _data : number;
    private _cliente : Cliente;
    private _produto : Produto[];


    public constructor(codigo : number, data : number, cliente : Cliente, produto : Produto[]){
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produto = produto
    }


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


    calcularTotal() : number {
        var soma : number = 0;
        
        for (const produto of this._produto)
            soma += produto.valor;
        
        return soma;
    }
}