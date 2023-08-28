import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contatos';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  contato: Contato;
  indice: number

  public nome: string;
  public telefone: number;
  public email: string;
  public edicao: boolean = true;

  constructor(private alertController: AlertController,  private router: Router, private actRoute: ActivatedRoute, private contatoService: ContatoService) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
        this.indice = parametros["indice"];
        this.contato = this.contatoService.obterPorIndice(this.indice);
      }
    });
    this.nome = this.contato.nome ;
    this.telefone = this.contato.telefone;
    this.email = this.contato.email;
  }
  
  editar(){
    if(this.nome && this.telefone){
      let novo: Contato = new Contato(this.nome, this.telefone);
      novo.email = this.email;
      this.contatoService.editar(this.indice, novo);
      this.presentAlert("Sucesso","Contato Salvo!");
      this.router.navigate(['/home']);
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

  async confirmAlert(){
    const alert = await this.alertController.create({
      header: 'Agenda de Contados',
      subHeader: 'ATENÇÃO',
      message: 'Deseja mesmo excluir o contato?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'EXCLUIR',
        role: 'exlcuir',
        cssClass: 'ion-color-danger',
        handler: () => {
          this.excluir();
        }
      }
      ],
    });
    await alert.present();
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  excluir(){
    this.contatoService.excluir(this.indice);
    this.router.navigate(['/home']);
  }

  voltar(){
    this.router.navigate(["/home"]);
  }

}
