import { Page } from '@/types/page';

export type Product = {
  id: string;
  price: number;
  name: string;
  description: string;
  photoUrl: string;
  stockQuantity: number;
  createdAt: string;
};

export type FindAllProductsParams = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
  sortBy: keyof Product;
  name: string;
};

export type FindAllProductsRequest = Partial<FindAllProductsParams>;

export type FindAllProductsResponse = Page<Product>;

export type FindProductByIdRequest = { id: string };

export type FindProductByIdResponse = Product;
