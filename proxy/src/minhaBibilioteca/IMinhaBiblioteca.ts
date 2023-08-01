import Livros from "../enum/Livros";

export default interface IMinhaBiblioteca{
    meusLivros(): Livros[];
    livro(id: number): Livros;
}