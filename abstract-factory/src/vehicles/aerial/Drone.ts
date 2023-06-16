import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{

    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Drone: Encomenda retiradas! Ligando helices!");
    }
    checkWind(): void {
        console.log("Drone: ventos a 22 km/h, tudo ok!");
    }

}