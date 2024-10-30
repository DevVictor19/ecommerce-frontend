import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import {
  addProductToMyCart,
  clearMyCart,
  findMyCart,
  removeProductFromMyCart,
} from '@/services/cart/cart.service';

export function useFindMyCart() {
  return useQuery({
    queryFn: findMyCart,
    queryKey: [API_ENDPOINT.CLIENT_CARTS],
  });
}

export function useAddProductToMyCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProductToMyCart,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_CARTS] }),
  });
}

export function useRemoveProductFromMyCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeProductFromMyCart,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_CARTS] }),
  });
}

export function useClearMyCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: clearMyCart,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.CLIENT_CARTS] }),
  });
}
