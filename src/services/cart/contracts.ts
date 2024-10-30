import { Product } from '../products/contracts';

export type Cart = {
  id: string;
  products: Omit<Product, 'createdAt'>[];
  productsQuantity: number;
  totalPrice: number;
  createdAt: string;
};

export type FindMyCartResponse = Cart | undefined;

export type AddProductToMyCartRequest = {
  productId: string;
  quantity: number;
};

export type RemoveProductFromMyCartRequest = {
  productId: string;
  quantity: number;
};
