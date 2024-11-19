import { useOrdersPagination } from '@/hooks/orders-pagination.hook';
import { useFindAllOrders } from '@/models/orders.model';

export function useOrdersViewModel() {
  const {
    currentFilter,
    handleChangeFilter,
    handleChangePage,
    handleChangeSize,
    params,
  } = useOrdersPagination();

  const { data, isLoading, isError } = useFindAllOrders(params);

  return {
    currentFilter,
    data,
    isError,
    isLoading,
    handleChangePage,
    handleChangeFilter,
    handleChangeSize,
  };
}
