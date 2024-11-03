export enum PAYMENT_METHOD {
  CREDIT_CARD = 'CREDIT_CARD',
}

export type Payment = {
  id: string;
  price: number;
  method: keyof typeof PAYMENT_METHOD;
  parcels: number;
  createdAt: string;
};
