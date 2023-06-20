import ITransportFactory from "../factories/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory, landVehicle: string, airVehicle: string){
        this.vehicle = factory.createTransportVehicle(landVehicle);
        this.aircraft = factory.createTransportAircraft(airVehicle);
    }

    startRoute(){
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}