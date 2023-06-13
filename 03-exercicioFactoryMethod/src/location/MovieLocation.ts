import Location from "./Location";
import Movie from "./item/Movie";
import IItem from "./item/interface/IItem";

export default class MovieLocation extends Location{
    
    protected createItem(): IItem {
        return new Movie();
    }
    
}