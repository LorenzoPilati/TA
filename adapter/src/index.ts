import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import Payonner from "./payooner/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

const payment: IPayPalPayment = new PayPal();
payment.paypalPayment();
payment.paypalReceive();

const payment2: IPayPalPayment = new PayonnerAdapter(new Payonner);
payment2.paypalPayment();
payment2.paypalReceive();

const payment3: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago);
payment3.paypalPayment();
payment3.paypalReceive();