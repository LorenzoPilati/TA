import IMinhaBiblioteca from "./minhaBibilioteca/IMinhaBiblioteca";
import MinhaBiblioteca from "./minhaBibilioteca/MinhaBiblioteca";
import MinhaBibliotecaProxy from "./minhaBibilioteca/MinhaBibliotecaProxy";

const minhaBibliotecaProxy: IMinhaBiblioteca = new MinhaBibliotecaProxy(new MinhaBiblioteca);

minhaBibliotecaProxy.meusLivros();
minhaBibliotecaProxy.livro(1);
minhaBibliotecaProxy.livro(2);
minhaBibliotecaProxy.dowloadLivro(1);
minhaBibliotecaProxy.livro(2);