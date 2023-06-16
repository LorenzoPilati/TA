import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        console.log("Transporte via Lime");
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        console.log("Transporte via Lime");
        return new Drone();
    }

}