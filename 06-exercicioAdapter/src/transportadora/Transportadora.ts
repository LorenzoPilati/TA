import ITransportadoraTransport from "./ITransportadoraTransport";

export default class Transportadora implements ITransportadoraTransport{
    send() {
        console.log("Trasportadora: Enviando pacote")
    }
    receive() {
        console.log("Trasportadora: Pacote recebido")
    }

}