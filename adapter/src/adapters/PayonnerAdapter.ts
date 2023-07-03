import Payonner from "../payonner/Payonner";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment{
    private _token: Token;

    constructor(private _payonner: Payonner){
        console.log("Adaptando Payonner no PayPal");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this._payonner.sendPayment();
    }
    paypalReceive(): void {
        return this._payonner.receiveReceive();
    }

}