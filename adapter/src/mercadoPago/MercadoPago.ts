import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
    private _token: Token;

    authToken(): Token {
        return new Token();
    }
    mercadoPagoPayment(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token);
        console.log("Enviando pagamento via Mercado Pago.");
    }
    mercadoPagoReceive(): void {
        this._token = this.authToken();
        console.log("Token: " + this._token.token);
        console.log("Recebendo pagamento via Mercado Pago.");
    }

}