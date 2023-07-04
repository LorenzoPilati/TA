import IPlataform from "../plataforms/IPlataform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission{

    constructor(private _plataform: IPlataform){}

    broadcasting(): void {
        console.log("Iniciando a Transmissão");
    }
    result(): void {
        console.log("************ NO AR ************");
    }

}