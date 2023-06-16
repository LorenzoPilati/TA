import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Helicoptero: Passageiros embarcados! Ligando helices!");
    }
    checkWind(): void {
        console.log("Helicoptero: ventos a 22 km/h, tudo ok!");
    }

}