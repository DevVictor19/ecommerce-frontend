import { useProductsPagination } from '@/hooks/products-pagination.hook';
import { useFindAllProducts } from '@/models/products.model';

export function useProductsViewModel() {
  const {
    currentFilter,
    handleChangeFilter,
    handleChangePage,
    handleChangeSearch,
    handleChangeSize,
    params,
  } = useProductsPagination();

  const { data, isError, isLoading } = useFindAllProducts(params);

  return {
    currentFilter,
    data,
    isError,
    isLoading,
    handleChangePage,
    handleChangeSearch,
    handleChangeFilter,
    handleChangeSize,
  };
}
