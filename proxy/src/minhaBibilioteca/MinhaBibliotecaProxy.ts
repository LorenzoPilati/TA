import Livros from "../enum/Livros";
import IMinhaBiblioteca from "./IMinhaBiblioteca";

export default class MinhaBibliotecaProxy implements IMinhaBiblioteca{
    private service: IMinhaBiblioteca;
    private idCache: number;
    private listaLivros: Livros[];
    private livroCache: Livros;

    constructor(service: IMinhaBiblioteca){
        this.service = service;
    }

    meusLivros() : Livros[]{
        if(this.listaLivros == null){
            this.listaLivros = this.service.meusLivros();
        }
        return this.listaLivros;
    }

    livro(id: number): Livros {
        if(this.livroCache == null || this.idCache != id){
            this.idCache = id;
            this.livroCache = this.service.livro(id);
        }
        return this.livroCache;
    }

}