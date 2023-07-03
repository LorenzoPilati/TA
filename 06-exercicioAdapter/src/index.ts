import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreiosTransport from "./correios/ICorreiosTransport";
import Transportadora from "./transportadora/Transportadora";

const cliente1: ICorreiosTransport = new Correios();
const cliente2: ICorreiosTransport = new TransportadoraAdapter(new Transportadora);

cliente1.sendCorreios();
cliente1.receiveCorreios();

cliente2.sendCorreios();
cliente2.receiveCorreios();