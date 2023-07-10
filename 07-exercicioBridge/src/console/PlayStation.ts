import IConsole from "./IConsole";

export default class PlayStation implements IConsole{

    constructor(){
        console.log("PlaYstaion: Configurando console");
        this.configureGame();
    }

    configureGame(): void {
        console.log("PlayStaion: Configurando jogo");
        this.authToken();
    }
    authToken(): void {
        console.log("PlayStaion: Jogo validado");
    }
}