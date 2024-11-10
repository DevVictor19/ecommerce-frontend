import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { payWithCreditCard } from '@/services/payments/payments.service';

export function usePayWithCreditCard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: payWithCreditCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_ORDERS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.PRODUCTS] });
    },
  });
}
