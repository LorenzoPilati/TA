import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IDrink from "../snacks/drink/interfaces/IDrink";
import IFood from "../snacks/food/interfaces/IFood";

export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(){
        this.drink.getOrder();
        this.food.getOrder();
    }
}