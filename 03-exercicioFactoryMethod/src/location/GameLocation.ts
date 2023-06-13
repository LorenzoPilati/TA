import Location from "./Location";
import Game from "./item/Game";
import IItem from "./item/interface/IItem";

export default class GameLocation extends Location{
    
    protected createItem(): IItem {
        return new Game();
    }

}