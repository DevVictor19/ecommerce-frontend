import { useQuery } from '@tanstack/react-query';

import { API_ENDPOINT } from '@/enums/api-endpoints.enum';
import { FindAllProductsRequest } from '@/services/products/contracts';
import { findAllProducts } from '@/services/products/products.service';

export function useFindAllProductsQuery(params?: FindAllProductsRequest) {
  return useQuery({
    queryFn: () => findAllProducts(params),
    queryKey: [`${API_ENDPOINT.PRODUCTS}`, { params }],
  });
}
