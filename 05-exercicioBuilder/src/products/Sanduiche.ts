import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{

    private _sanduicheType: SanduicheType;
    private _bread: Bread;
    private _protein: Protein;
    private _salad: Salad;
    private _sauces: Sauce[] = [];

    get sanduicheType(): SanduicheType{
        return this._sanduicheType;
    }

    set sanduicheType(sanduicheType: SanduicheType){
        this._sanduicheType = sanduicheType;
    }

    get bread(): Bread{
        return this._bread;
    }

    set bread(bread: Bread){
        this._bread = bread;
    }

    get protein(): Protein{
        return this._protein;
    }

    set protein(protein: Protein){
        this._protein = protein;
    }

    get salad(): Salad{
        return this._salad;
    }

    set salad(salad: Salad){
        this._salad = salad;
    }

    get sauces(): Sauce[]{
        return this._sauces;
    }

    set sauces(sauces: Sauce[]){
        this._sauces = sauces;
    }

    addSauces(sauce: Sauce){
        this._sauces.push(sauce);
    }
}