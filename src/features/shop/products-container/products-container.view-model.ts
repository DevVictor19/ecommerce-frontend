import { useState } from 'react';

import { useFindAllProductsQuery } from '@/models/products.model';

export function useProductsContainerViewModel() {
  const [page, setPage] = useState(0);

  const { data, isError, isLoading } = useFindAllProductsQuery({ page });

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
