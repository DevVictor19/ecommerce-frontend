import { useState } from 'react';

import { useFindAllProducts } from '@/models/products.model';
import { FindAllProductsParams } from '@/services/products/contracts';

import { FilterKind } from './filter-option/filter-option';

export function useShopViewModel() {
  const [currentFilter, setCurrentFilter] =
    useState<FilterKind>('new-products');

  const [params, setParams] = useState<Partial<FindAllProductsParams>>({
    page: 0,
  });

  const { data, isError, isLoading } = useFindAllProducts(params);

  const handleChangePage = (newPage: number) => {
    setParams((prev) => ({ ...prev, page: newPage }));
  };

  const handleChangeSearch = (value: string) => {
    setParams((prev) => ({ ...prev, name: value }));
  };

  const handleChangeFilter = (filterKind: FilterKind) => {
    switch (filterKind) {
      case 'new-products':
        setParams((prev) => ({ ...prev, sortBy: 'createdAt', sort: 'ASC' }));
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
    }
  };

  return {
    currentFilter,
    data,
    isError,
    isLoading,
    handleChangePage,
    handleChangeSearch,
    handleChangeFilter,
  };
}
