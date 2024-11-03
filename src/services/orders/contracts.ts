import { Cart } from '../cart/contracts';
import { Payment } from '../payments/contracts';

export enum PAYMENT_STATUS {
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  PAID = 'PAID',
}

export type Order = {
  id: string;
  status: keyof typeof PAYMENT_STATUS;
  cart: Cart;
  payment: Payment | null;
  createdAt: string;
};

export type CreateMyOrderResponse = Order;
