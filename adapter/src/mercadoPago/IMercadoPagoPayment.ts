import Token from "../utils/Token";

export default interface IMercadoPagoPayment{
    authToken(): Token;
    mercadoPagoPayment(): void;
    mercadoPagoReceive(): void;
}