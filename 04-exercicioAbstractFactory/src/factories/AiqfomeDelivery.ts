import Beer from "../snacks/drink/Beer";
import IDrink from "../snacks/drink/interfaces/IDrink";
import Hamburger from "../snacks/food/Hamburger";
import IFood from "../snacks/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburger();
    }

}