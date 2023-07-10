import IConsole from "./IConsole";

export default class XBox implements IConsole{

    constructor(){
        console.log("XBox: Configurando console");
        this.configureGame();
    }

    configureGame(): void {
        console.log("XBox: Configurando jogo");
        this.authToken();
    }
    authToken(): void {
        console.log("XBox: Jogo validado");
    }
}