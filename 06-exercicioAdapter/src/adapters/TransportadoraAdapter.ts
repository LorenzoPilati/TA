import ICorreiosTransport from "../correios/ICorreiosTransport";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreiosTransport{

    constructor(private _transportadora: Transportadora){
        console.log("Adapter Transportadora nos Correios");
    }

    sendCorreios() {
        return this._transportadora.send();
    }

    receiveCorreios() {
        return this._transportadora.receive();
    }

}