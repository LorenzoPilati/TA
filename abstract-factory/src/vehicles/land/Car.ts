import ILandVehicle from "./interfaces/ILandVehicle";


export default class Car implements ILandVehicle {
    
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando o Trajeto...");
    }

    getCargo(): void {
        console.log("Carro: Passageiros embarcados");
    }

}