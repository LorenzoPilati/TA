import IItem from "./interface/IItem";

export default class Game implements IItem{
    
    start(): void {
        this.getDescription();
        console.log("Alugando jogo");
    }
    
    getDescription(): void {
        console.log("Call of Duty Black Ops II\nJogo de Acao");
    }

}