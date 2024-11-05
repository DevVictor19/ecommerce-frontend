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

export type FindProductByIdRequest = { id: string };

export type FindProductByIdResponse = Product;
