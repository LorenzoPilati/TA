import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle {
    
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando o Trajeto...");
    }

    getCargo(): void {
        console.log("Carro: Passageiros embarcados");
    }

}