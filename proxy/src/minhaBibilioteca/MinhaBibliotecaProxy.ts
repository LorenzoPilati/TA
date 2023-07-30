import Livros from "../enum/Livros";
import IMinhaBiblioteca from "./IMinhaBiblioteca";

export default class MinhaBibliotecaProxy implements IMinhaBiblioteca{
    private service: IMinhaBiblioteca;
    private listaLivros: Livros[];
    private livroCache: Livros;
    private reset: boolean;

    constructor(service: IMinhaBiblioteca){
        this.service = service;
        this.reset = false;
    }
    meusLivros() : Livros[]{
        if(this.listaLivros == null || this.reset){
            this.listaLivros = this.service.meusLivros();
            this.reset = false;
        }
        console.log("Meus Livros:")
        this.listaLivros.forEach(livro => {
            console.log(livro)
        });
        console.log();
        return this.listaLivros;
    }

    livro(id: number): Livros {
        if(this.livroCache == null || this.reset){
            this.livroCache = this.service.livro(id);
            this.reset = false;
        }
        console.log("Livro Selecionada: " + this.livroCache);
        console.log();
        return this.livroCache;
    }

    dowloadLivro(id: number): Livros {
        if(this.livroCache == null || this.reset)
            this.livroCache = this.service.dowloadLivro(id);
        this.reset = true;
        console.log("Dowload do livro: " + this.livroCache);
        console.log();
        return this.livroCache;
    }

}