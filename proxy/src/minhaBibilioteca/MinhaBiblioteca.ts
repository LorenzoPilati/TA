import Livros from "../enum/Livros";
import IMinhaBiblioteca from "./IMinhaBiblioteca";

export default class MinhaBiblioteca implements IMinhaBiblioteca{

    meusLivros(): Livros[] {
        let livros: Livros[] = Object.values(Livros);
        console.log("Puxando da Api...");
        return livros;
    }

    livro(id: number): Livros{
        let livros: Livros[] = Object.values(Livros);
        console.log("Puxando da Api...");
        return livros[id-1];
    }
}