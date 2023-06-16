import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NiniNineFactory implements ITransportFactory{
    
    createTransportVehicle(): ILandVehicle {
        console.log("Transporte via 99");
        return new Motorcycle;
    }
    
    createTransportAircraft(): IAircraft {
        console.log("Transporte via 99");
        return new Helicopter;
    }

}