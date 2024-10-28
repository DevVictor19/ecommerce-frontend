import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { api } from '@/lib/axios';
import { getCookieValue } from '@/lib/client-cookies';
import { parseToStringRecord } from '@/utils/parse-to-string-record';

import { FindAllProductsRequest, FindAllProductsResponse } from './contracts';

export async function findAllProducts(
  params?: FindAllProductsRequest,
): Promise<FindAllProductsResponse> {
  const { data } = await api.get(API_ENDPOINT.PRODUCTS, {
    headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
    params: params && new URLSearchParams(parseToStringRecord(params)),
  });
  return data;
}
