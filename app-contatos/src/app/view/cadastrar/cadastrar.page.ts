import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contatos';
import { ContatoService } from 'src/app/model/service/contato.service';
import { FirebaseService } from 'src/app/model/service/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome!: string;
  public telefone!: number;
  public email!: string;
  public lista_contatos: Contato[] = [];


  constructor(private alertController: AlertController, private router: Router, private firebase: FirebaseService) { }

  ngOnInit() {
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let novo : Contato = new Contato(this.nome, this.telefone);
      novo.email = this.email;
      this.firebase.create(novo);
      this.presentAlert("Sucesso", "Contato Salvo!");
      this.router.navigate(["/home"]);
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

  voltar(){
    this.router.navigate(["/home"]);
  }
}
