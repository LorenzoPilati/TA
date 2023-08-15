import { Injectable } from '@angular/core';
import Contato from '../entities/Contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  public lista_contatos: Contato[] = [];

  constructor() {
    let c1: Contato = new Contato("Lorenzo Pilati", 984050998);
    let c2: Contato = new Contato("Alberto Pilati", 999999223);
    let c3: Contato = new Contato("Pedro Pilati", 929299299);
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
  }

  cadastrar(contato : Contato){
    this.lista_contatos.push(contato);
  }

  obterTodos() : Contato[]{
    return this.lista_contatos;
  }

  obterPorIndice(indice : number) : Contato{
    return this.lista_contatos[indice];
  }
}
