import Transport from "./Transport";
import Motorcycle from "./vehicle/Motorcycle";
import IVehicle from "./vehicle/interface/IVehicle";

export default class MotorcycleTransport extends Transport{
    
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }

}