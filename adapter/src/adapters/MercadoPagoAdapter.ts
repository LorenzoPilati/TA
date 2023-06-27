import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    private _token: Token;

    constructor(private _mercadoPago: MercadoPago){
        console.log("Adaptando Mercado Pago no PayPal");
    };

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this._mercadoPago.mercadoPagoPayment();
    }
    paypalReceive(): void {
        return this._mercadoPago.mercadoPagoReceive();
    }

}