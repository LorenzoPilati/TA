import IDrink from "../../snacks/drink/interfaces/IDrink";
import IFood from "../../snacks/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}