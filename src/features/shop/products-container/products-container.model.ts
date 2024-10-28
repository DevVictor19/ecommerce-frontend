import { useState } from 'react';

import { useFindAllProductsQuery } from '@/data/products';

export function useProductsContainerModel() {
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
