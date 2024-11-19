import { Page } from '@/types/page';
import { Params } from '@/types/params';

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

export type FindAllMyOrdersParams = Params<Order> & {
  status: keyof typeof PAYMENT_STATUS;
};

export type FindAllMyOrdersRequest = Partial<FindAllMyOrdersParams>;

export type FindAllMyOrdersResponse = Page<Order>;

export type FindAllOrdersParams = Params<Order> & {
  status: keyof typeof PAYMENT_STATUS;
};

export type FindAllOrdersRequest = Partial<FindAllMyOrdersParams>;

export type FindAllOrdersResponse = Page<Order>;
