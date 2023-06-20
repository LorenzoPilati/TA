import Client from "./clients/Client";
import LimeFactory from "./factories/LimeFactory";
import NiniNineFactory from "./factories/NiniNineFactory";
import UberFactory from "./factories/UberFactory";
import ITransportFactory from "./factories/interfaces/ITransportFactory";
import AirVehicle from "./vehicles/conts/AirVehicle";
import Company from "./vehicles/conts/Company";
import LandVehicle from "./vehicles/conts/LandVehicle";

const currentCompany = Company.LIME;
const currentLandVehicle = LandVehicle.CAR
const currentAirVechicle = AirVehicle.AIRPLANE
let factory! : ITransportFactory;
switch(currentCompany){
    case Company.UBER:
        factory = new UberFactory();
        break
    case Company.NINENINE:
        factory = new NiniNineFactory();
        break
    case Company.LIME:
        factory = new LimeFactory();
        break
    default :
        console.log("Companhia nao Definida!");
}

const client = new Client(factory, currentLandVehicle, currentAirVechicle);
client.startRoute();