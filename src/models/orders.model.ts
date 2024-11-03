import { useMutation, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { createMyOrder } from '@/services/orders/orders.service';

export function useCreateMyOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMyOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_CARTS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.PRODUCTS] });
    },
  });
}
