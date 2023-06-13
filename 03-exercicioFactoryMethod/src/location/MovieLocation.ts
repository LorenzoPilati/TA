import Location from "./Location";
import Movie from "./item/Movie";
import Item from "./item/interface/IItem";

export default class MovieLocation extends Location{
    
    protected createItem(): Item {
        return new Movie();
    }
    
}