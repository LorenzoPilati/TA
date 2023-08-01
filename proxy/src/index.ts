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

console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(1));
console.log();
console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(1));
console.log();

console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(2));
console.log();

console.log("Livro Selecionada: " + minhaBibliotecaProxy.livro(3));
console.log();