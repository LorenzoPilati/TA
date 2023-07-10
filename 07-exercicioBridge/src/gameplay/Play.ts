import IConsole from "../console/IConsole";
import IGameplay from "./IGameplay";

export default class Play implements IGameplay{

    constructor(private _consol: IConsole){};

    playing(): void {
        console.log("Iniciando jogo");
    }
    result(): void {
        console.log("************ JOGANDO ************");
    }
}