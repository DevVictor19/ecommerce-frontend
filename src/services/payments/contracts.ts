export enum PAYMENT_METHOD {
  CREDIT_CARD = 'CREDIT_CARD',
}

export type Card = {
  number: string;
  expiryMonth: string;
  holderName: string;
  expiryYear: string;
  ccv: string;
};

export type Payment = {
  id: string;
  price: number;
  method: keyof typeof PAYMENT_METHOD;
  parcels: number;
  createdAt: string;
};

export type PayWithCreditCardRequest = {
  orderId: string;
  body: {
    document: string;
    parcels: number;
    card: Card;
  };
};
