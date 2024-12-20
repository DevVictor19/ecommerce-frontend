import { Page } from '@/types/page';
import { Params } from '@/types/params';

export type Product = {
  id: string;
  price: number;
  name: string;
  description: string;
  photoUrl: string;
  stockQuantity: number;
  createdAt: string;
};

export type FindAllProductsParams = Params<Product> & {
  name: string;
};

export type FindAllProductsRequest = Partial<FindAllProductsParams>;

export type FindAllProductsResponse = Page<Product>;

export type FindProductByIdResponse = Product;

export type CreateProductRequest = {
  price: number;
  name: string;
  description: string;
  photoUrl: string;
  stockQuantity: number;
};

export type EditProductRequest = {
  productId: string;
  payload: {
    price: number;
    name: string;
    description: string;
    photoUrl: string;
    stockQuantity: number;
  };
};
