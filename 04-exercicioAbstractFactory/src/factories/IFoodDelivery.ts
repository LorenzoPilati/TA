import SoftDrink from "../snacks/drink/SoftDrink";
import IDrink from "../snacks/drink/interfaces/IDrink";
import HotDog from "../snacks/food/HotDog";
import IFood from "../snacks/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
    
}