import Client from "./clients/Client";
import AiqfomeDelivery from "./factories/AiqfomeDelivery";
import IFoodDelivery from "./factories/IFoodDelivery";
import IDeliveryFactory from "./factories/interfaces/IDeliveryFactory";
import Company from "./snacks/conts/Company";

let factory!: IDeliveryFactory;

const currentCompany = Company.AIQFOME
switch(currentCompany){
    case "AIQFOME":
        factory = new AiqfomeDelivery();
        break;
    case "IFOOD":
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Compania nao encontrada");
}

const cliente = new Client(factory);
cliente.startDelivery();