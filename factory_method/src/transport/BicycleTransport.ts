import Transport from "./Transport";
import Bicycle from "./vehicle/Bicycle";
import IVehicle from "./vehicle/interface/IVehicle";

export default class BicycleTransport extends Transport{

    protected createTransport(): IVehicle {
        return new Bicycle();
    }

}