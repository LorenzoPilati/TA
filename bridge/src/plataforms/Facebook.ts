import IPlataform from "./IPlataform";

export default class Facebook implements IPlataform{

    constructor(){
        console.log("Facebook: Configurando Plataforma!");
        this.configureRMTP();
    }

    configureRMTP(): void {
        console.log("Facebook: Configurando o Broadcasting");
        this.authToken();
    }
    authToken(): void {
        console.log("Facebook: Autorizando a Plataforma");
    }

}