import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    getOrder(): void {
        this.showDesciption();
        this.showKg();
        console.log("Comida Pronta!");
    }
    showDesciption(): void {
        console.log("Comida: Hemburguer de Frango");
    }
    showKg(): void {
        console.log("Comida: 220g");
    }
}