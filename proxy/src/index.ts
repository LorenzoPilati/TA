import IMinhaBiblioteca from "./minhaBibilioteca/IMinhaBiblioteca";
import MinhaBiblioteca from "./minhaBibilioteca/MinhaBiblioteca";
import MinhaBibliotecaProxy from "./minhaBibilioteca/MinhaBibliotecaProxy";

const minhaBibliotecaProxy: IMinhaBiblioteca = new MinhaBibliotecaProxy(new MinhaBiblioteca);

let id: number = 1;

console.log("Meus Livros:")
minhaBibliotecaProxy.meusLivros().forEach(livro => {
    console.log(livro)
});
console.log();

console.log("Meus Livros:")
minhaBibliotecaProxy.meusLivros().forEach(livro => {
    console.log(livro)
});
console.log();

console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(id));
console.log();

console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(id));
console.log();

id = 2;

console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(id));
console.log();

id = 3

console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(id));
console.log();