import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { api } from '@/lib/axios';
import { getCookieValue } from '@/lib/client-cookies';

import { PayWithCreditCardRequest } from './contracts';

export async function payWithCreditCard({
  body,
  orderId,
}: PayWithCreditCardRequest): Promise<void> {
  await api.post(
    `${API_ENDPOINT.CREDIT_CARD_PAYMENTS}/orders/${orderId}`,
    body,
    {
      headers: { Authorization: `Bearer ${getCookieValue('authToken')}` },
    },
  );
}
