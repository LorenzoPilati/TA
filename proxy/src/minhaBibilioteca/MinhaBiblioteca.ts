import Livros from "../enum/Livros";
import IMinhaBiblioteca from "./IMinhaBiblioteca";

export default class MinhaBiblioteca implements IMinhaBiblioteca{

    meusLivros(): Livros[] {
        let livros: Livros[] = Object.values(Livros);
        return livros;
    }

    livro(id: number): Livros{
        let livros: Livros[] = Object.values(Livros);
        return livros[id-1];
    }

    dowloadLivro(id: number): Livros{
        let livros: Livros[] = Object.values(Livros);
        return livros[id-1];
    }
}