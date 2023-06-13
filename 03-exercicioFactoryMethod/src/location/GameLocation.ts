import Location from "./Location";
import Game from "./item/Game";
import Item from "./item/interface/IItem";

export default class GameLocation extends Location{
    
    protected createItem(): Item {
        return new Game();
    }

}