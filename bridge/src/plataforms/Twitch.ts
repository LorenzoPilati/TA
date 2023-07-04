import IPlataform from "./IPlataform";

export default class Twitch implements IPlataform{

    constructor(){
        console.log("Twitch: Configurando Plataforma!");
        this.configureRMTP();
    }

    configureRMTP(): void {
        console.log("Twitch: Configurando o Broadcasting");
        this.authToken();
    }
    authToken(): void {
        console.log("Twitch: Autorizando a Plataforma");
    }

}