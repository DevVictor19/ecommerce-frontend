import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { FindAllMyOrdersRequest } from '@/services/orders/contracts';
import {
  cancelMyOrder,
  createMyOrder,
  findAllMyOrders,
} from '@/services/orders/orders.service';

export function useCreateMyOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMyOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_ORDERS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_CARTS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.PRODUCTS] });
    },
  });
}

export function useFindAllMyOrders(params?: FindAllMyOrdersRequest) {
  return useQuery({
    queryFn: () => findAllMyOrders(params),
    queryKey: [API_ENDPOINT.CLIENT_ORDERS, { params }],
  });
}

export function useCancelMyOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelMyOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_ORDERS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.PRODUCTS] });
    },
  });
}
