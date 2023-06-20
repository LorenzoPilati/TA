import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    getOrder(): void {
        this.showDesciption();
        this.showMl();
        console.log("Bebida pronta!");
    }
    showDesciption(): void {
        console.log("Bebida: Refrigerante de Cola");
    }
    showMl(): void {
        console.log("Bebida: 350 Ml");
    }
}