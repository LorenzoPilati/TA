import Client from "./clients/Client";
import LimeFactory from "./factories/LimeFactory";
import NiniNineFactory from "./factories/NiniNineFactory";
import UberFactory from "./factories/UberFactory";
import ITransportFactory from "./factories/interfaces/ITransportFactory";
import Company from "./vehicles/conts/Company";

const currentCompany = Company.LIME;
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

const client = new Client(factory);
client.startRoute();