import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{

    constructor(private _builder: IBuilder){}

    constructFrango(){
        this._builder.setSanduicheType(SanduicheType.MEDIO);
        this._builder.setBread(Bread.ITALIANO_BRANCO);
        this._builder.setProtein(new Protein("Frango", 70));
        this._builder.setSalad(Salad.TOMATE);
        this._builder.addSauces(new Sauce("Ketchup"));
        this._builder.addSauces(new Sauce("Mostarda"));
    }

    constructBacon(){
        this._builder.setSanduicheType(SanduicheType.GRANDE);
        this._builder.setBread(Bread.NOVE_GRAOS);
        this._builder.setProtein(new Protein("Bacon", 30));
        this._builder.setSalad(Salad.ALFACE);
        this._builder.addSauces(new Sauce("MolhoDeAlho"));
    }
    
    constructSteak(){
        this._builder.setSanduicheType(SanduicheType.PEQUENO);
        this._builder.setBread(Bread.PARMESAO_E_OREGANO);
        this._builder.setProtein(new Protein("Steak", 60));
        this._builder.setSalad(Salad.PEPINO);
        this._builder.addSauces(new Sauce("Ketchup"));
        this._builder.addSauces(new Sauce("Mostarda"));
        this._builder.addSauces(new Sauce("Maionese"));
    }
}