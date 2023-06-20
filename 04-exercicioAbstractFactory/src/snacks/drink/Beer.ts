import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    getOrder(): void {
        this.showDesciption();
        this.showMl();
        console.log("Bebida pronta!");
    }
    showDesciption(): void {
        console.log("Bebida: Cerveja Latão");
    }
    showMl(): void {
        console.log("Bebida: 473 Ml");
    }
}