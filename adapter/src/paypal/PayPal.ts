import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private _token: Token;
    
    authToken(): Token {
        return new Token;
    }
    paypalPayment(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token);
        console.log("Enviando pagamento via PayPal.");
    }
    paypalReceive(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token);
        console.log("Recebendo pagamento via PayPal.");
    }

}