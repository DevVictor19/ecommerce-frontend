import { useState } from 'react';

import { useFindAllProducts } from '@/models/products.model';

export function useProductsContainerViewModel() {
  const [page, setPage] = useState(0);

  const { data, isError, isLoading } = useFindAllProducts({ page });

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return {
    data,
    isError,
    isLoading,
    handleChangePage,
  };
}
