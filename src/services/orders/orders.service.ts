import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { api } from '@/lib/axios';
import { getCookieValue } from '@/lib/client-cookies';

import { CreateMyOrderResponse } from './contracts';

export async function createMyOrder(): Promise<CreateMyOrderResponse> {
  const { data } = await api.post(API_ENDPOINT.CLIENT_ORDERS, undefined, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
  return data;
}
