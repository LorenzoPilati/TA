import ICorreiosTransport from "./ICorreiosTransport";

export default class Correios implements ICorreiosTransport{
    sendCorreios() {
        console.log("Correios: Enviando pacote");
    }
    receiveCorreios() {
        console.log("Correios: Pacote recebido");
    }

}