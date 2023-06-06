import IVehicle from "./interface/IVehicle";

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: Iniciando Entrega...");
    }
    
    getCargo(): void {
        console.log("Bicicleta: Encomenda Retirada!")
    }

}