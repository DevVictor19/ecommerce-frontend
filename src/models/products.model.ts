import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { FindAllProductsRequest } from '@/services/products/contracts';
import {
  createProduct,
  deleteProduct,
  findAllProducts,
  findProductById,
} from '@/services/products/products.service';

export function useFindAllProducts(params?: FindAllProductsRequest) {
  return useQuery({
    queryFn: () => findAllProducts(params),
    queryKey: [API_ENDPOINT.PRODUCTS, { params }],
  });
}

export function useFindProductById(productId: string) {
  return useQuery({
    queryFn: () => findProductById(productId),
    queryKey: [API_ENDPOINT.PRODUCTS, productId],
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.PRODUCTS] });
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINT.PRODUCTS] });
    },
  });
}
