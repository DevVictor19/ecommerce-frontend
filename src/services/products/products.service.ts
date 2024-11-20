import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { api } from '@/lib/axios';
import { getCookieValue } from '@/lib/client-cookies';
import { parseToStringRecord } from '@/utils/parse-to-string-record';

import {
  CreateProductRequest,
  EditProductRequest,
  FindAllProductsRequest,
  FindAllProductsResponse,
  FindProductByIdResponse,
} from './contracts';

export async function findAllProducts(
  params?: FindAllProductsRequest,
): Promise<FindAllProductsResponse> {
  const { data } = await api.get(API_ENDPOINT.PRODUCTS, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
    params: params && new URLSearchParams(parseToStringRecord(params)),
  });
  return data;
}

export async function findProductById(
  productId: string,
): Promise<FindProductByIdResponse> {
  const { data } = await api.get(`${API_ENDPOINT.PRODUCTS}/${productId}`, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
  return data;
}

export async function createProduct(payload: CreateProductRequest) {
  await api.post(API_ENDPOINT.PRODUCTS, payload, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
}

export async function deleteProduct(productId: string) {
  await api.delete(`${API_ENDPOINT.PRODUCTS}/${productId}`, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
}

export async function editProduct({ payload, productId }: EditProductRequest) {
  await api.put(`${API_ENDPOINT.PRODUCTS}/${productId}`, payload, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
}
