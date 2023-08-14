import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contatos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome!: string;
  public telefone!: number;
  public lista_contatos: Contato[] = [];

  constructor(private alertController: AlertController) {
    let c1: Contato = new Contato("Lorenzo Pilati", 984050998);
    let c2: Contato = new Contato("Alberto Pilati", 999999223);
    let c3: Contato = new Contato("Pedro Pilati", 929299299);
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
  }

  cadastrar(){
    if(this.nome && this.telefone){
      this.lista_contatos.push(new Contato(this.nome, this.telefone));
      this.presentAlert("Sucesso", "Contato Salvo!");
    }else{
      this.presentAlert("Erro", "Campos Obrigatorios");
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contados',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
