import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import {
  FindAllMyOrdersRequest,
  FindAllOrdersRequest,
} from '@/services/orders/contracts';
import {
  cancelMyOrder,
  createMyOrder,
  findAllMyOrders,
  findAllOrders,
  findOrderById,
} from '@/services/orders/orders.service';

export function useCreateMyOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMyOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.ORDERS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_ORDERS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_CARTS] });
    },
  });
}

export function useFindAllMyOrders(params?: FindAllMyOrdersRequest) {
  return useQuery({
    queryFn: () => findAllMyOrders(params),
    queryKey: [API_ENDPOINT.CLIENT_ORDERS, { params }],
  });
}

export function useFindOrderById(orderId: string) {
  return useQuery({
    queryFn: () => findOrderById(orderId),
    queryKey: [API_ENDPOINT.ORDERS, orderId],
  });
}

export function useCancelMyOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelMyOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.ORDERS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_ORDERS] });
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.PRODUCTS] });
    },
  });
}

export function useFindAllOrders(params?: FindAllOrdersRequest) {
  return useQuery({
    queryFn: () => findAllOrders(params),
    queryKey: [API_ENDPOINT.ORDERS, { params }],
  });
}
