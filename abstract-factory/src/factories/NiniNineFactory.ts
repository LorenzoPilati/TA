import Airplane from "../vehicles/aerial/Airplane";
import Drone from "../vehicles/aerial/Drone";
import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Car from "../vehicles/land/Car";
import Motorcycle from "../vehicles/land/Motorcycle";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NiniNineFactory implements ITransportFactory{
    
    createTransportVehicle(land: string): ILandVehicle {
        console.log("Transporte via 99");
        switch(land){
            case "CAR":
                return new Car();
            case "MOTORCYCLE":
                return new Motorcycle()
            case "SCOOTER":
                return new Scooter();
            default:
                throw new Error("INVALIDO");
        }
    }
    
    createTransportAircraft(air: string): IAircraft {
        console.log("Transporte via 99");
        switch(air){
            case "AIRPLANE":
                return new Airplane();
            case "HELICOPTER":
                return new Helicopter()
            case "DRONE":
                return new Drone();
            default:
                throw new Error("INVALIDO");
        }
    }

}