import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Aviao: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Aviao: Passageiros embarcados");    
    }
    checkWind(): void {
        console.log("Aviao: Ventos a 25 km/h, ventos ok");
    }

}