import { useState } from 'react';

import { FindAllProductsParams } from '@/services/products/contracts';

export type ProductPaginationFilter =
  | 'new-products'
  | 'alphabetical'
  | 'cheapest'
  | 'most-expansive'
  | 'lower-stock-quantity'
  | 'bigger-stock-quantity';

type UseProductsPaginationProps = {
  page?: number;
  size?: number;
};

export function useProductsPagination(
  initialConfig?: UseProductsPaginationProps,
) {
  const [currentFilter, setCurrentFilter] =
    useState<ProductPaginationFilter>('new-products');

  const [params, setParams] = useState<Partial<FindAllProductsParams>>({
    page: initialConfig?.page ?? 0,
    size: initialConfig?.size ?? 10,
    sortBy: 'createdAt',
    sort: 'DESC',
  });

  const handleChangePage = (newPage: number) => {
    setParams((prev) => ({ ...prev, page: newPage }));
  };

  const handleChangeSearch = (value: string) => {
    setParams((prev) => ({ ...prev, name: value }));
  };

  const handleChangeSize = (size: number) => {
    setParams((prev) => ({ ...prev, size }));
  };

  const handleChangeFilter = (
    ProductPaginationFilter: ProductPaginationFilter,
  ) => {
    switch (ProductPaginationFilter) {
      case 'new-products':
        setParams((prev) => ({ ...prev, sortBy: 'createdAt', sort: 'DESC' }));
        setCurrentFilter('new-products');
        break;

      case 'alphabetical':
        setParams((prev) => ({ ...prev, sortBy: 'name', sort: 'ASC' }));
        setCurrentFilter('alphabetical');
        break;

      case 'cheapest':
        setParams((prev) => ({ ...prev, sortBy: 'price', sort: 'ASC' }));
        setCurrentFilter('cheapest');
        break;

      case 'most-expansive':
        setParams((prev) => ({ ...prev, sortBy: 'price', sort: 'DESC' }));
        setCurrentFilter('most-expansive');
        break;

      case 'bigger-stock-quantity':
        setParams((prev) => ({
          ...prev,
          sortBy: 'stockQuantity',
          sort: 'DESC',
        }));
        setCurrentFilter('bigger-stock-quantity');
        break;

      case 'lower-stock-quantity':
        setParams((prev) => ({
          ...prev,
          sortBy: 'stockQuantity',
          sort: 'ASC',
        }));
        setCurrentFilter('lower-stock-quantity');
        break;
    }
  };

  return {
    params,
    currentFilter,
    handleChangePage,
    handleChangeSearch,
    handleChangeFilter,
    handleChangeSize,
  };
}
