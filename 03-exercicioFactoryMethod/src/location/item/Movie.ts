import IItem from "./interface/IItem";

export default class Movie implements IItem{
    
    start(): void {
        this.getDescription();
        console.log("Alugando Filme")
    }
    
    getDescription(): void {
        console.log("Senhor dos Aneis: As Duas Torres\nFilme de Aventura");
    }

}