import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    getOrder(): void {
        this.showDesciption();
        this.showKg();
        console.log("Comida Pronta!");
    }
    showDesciption(): void {
        console.log("Comida: Cachorro quente paulista");
    }
    showKg(): void {
        console.log("Comida: 430g");
    }
    
}