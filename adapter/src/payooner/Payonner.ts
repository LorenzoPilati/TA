
import IPayonnerPayment from "./IPayonnerPayment";
import Token from "../utils/Token";


export default class Payonner implements IPayonnerPayment{
    private _token: Token;

    authToken(): Token {
        return new Token();
    }

    sendPayment(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token);
        console.log("Enviando pagamento via Payonner.");
    }

    receiveReceive(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token);
        console.log("Recebendo pagamento via Payonner.");
    }

}