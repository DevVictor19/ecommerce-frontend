import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { api } from '@/lib/axios';
import { getCookieValue } from '@/lib/client-cookies';
import { parseToStringRecord } from '@/utils/parse-to-string-record';

import {
  CreateMyOrderResponse,
  FindAllMyOrdersRequest,
  FindAllMyOrdersResponse,
  Order,
} from './contracts';

export async function createMyOrder(): Promise<CreateMyOrderResponse> {
  const { data } = await api.post(API_ENDPOINT.CLIENT_ORDERS, undefined, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
  return data;
}

export async function findAllMyOrders(
  params?: FindAllMyOrdersRequest,
): Promise<FindAllMyOrdersResponse> {
  const { data } = await api.get(API_ENDPOINT.CLIENT_ORDERS, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
    params: params && new URLSearchParams(parseToStringRecord(params)),
  });
  return data;
}

export async function findOrderById(orderId: string): Promise<Order> {
  const { data } = await api.get(`${API_ENDPOINT.ORDERS}/${orderId}`, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
  return data;
}

export async function cancelMyOrder(orderId: string) {
  await api.delete(`${API_ENDPOINT.CLIENT_ORDERS}/${orderId}`, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
  });
}
