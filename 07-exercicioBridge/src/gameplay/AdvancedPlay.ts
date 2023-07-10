import IConsole from "../console/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    
    constructor(protected consol: IConsole){
        super(consol);
    }

    challenge(){
        console.log("Novo desfio...");
    }
}