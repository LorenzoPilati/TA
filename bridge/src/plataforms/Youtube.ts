import IPlataform from "./IPlataform";

export default class Youtube implements IPlataform{
    
    constructor(){
        console.log("Youtube: Configurando Plataforma!");
        this.configureRMTP();
    }

    configureRMTP(): void {
        console.log("Youtube: Configurando o Broadcasting");
        this.authToken();
    }
    authToken(): void {
        console.log("Youtube: Autorizando a Plataforma");
    }

}