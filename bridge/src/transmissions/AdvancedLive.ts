import IPlataform from "../plataforms/IPlataform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(protected plataform: IPlataform){
        super(plataform);
    }

    subtitles(){
        console.log("Legendas Atividades na Transmissão");
    }

    comments(){
        console.log("Comentarios Liberados.");
    }
}