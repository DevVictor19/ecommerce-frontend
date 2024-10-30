import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { api } from '@/lib/axios';
import { getCookieValue } from '@/lib/client-cookies';

import {
  AddProductToMyCartRequest,
  FindMyCartResponse,
  RemoveProductFromMyCartRequest,
} from './contracts';

export async function findMyCart(): Promise<FindMyCartResponse> {
  const { data } = await api.get(API_ENDPOINT.CLIENT_CARTS, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
  return data;
}

export async function addProductToMyCart({
  productId,
  quantity,
}: AddProductToMyCartRequest): Promise<void> {
  await api.post(
    `${API_ENDPOINT.CLIENT_CARTS}/products/${productId}?quantity=${quantity}`,
    undefined,
    {
      headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
    },
  );
}

export async function removeProductFromMyCart({
  productId,
  quantity,
}: RemoveProductFromMyCartRequest): Promise<void> {
  await api.delete(
    `${API_ENDPOINT.CLIENT_CARTS}/products/${productId}?quantity=${quantity}`,
    {
      headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
    },
  );
}

export async function clearMyCart(): Promise<void> {
  await api.delete(API_ENDPOINT.CLIENT_CARTS, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
}
