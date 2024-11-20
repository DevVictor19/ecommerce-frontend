import { useState } from 'react';

import {
  FindAllOrdersParams,
  PAYMENT_STATUS,
} from '@/services/orders/contracts';

export type OrderPaginationFilter =
  | 'new-orders'
  | 'old-orders'
  | 'paid'
  | 'pending';

type UseOrdersPaginationProps = {
  page?: number;
  size?: number;
};

export function useOrdersPagination(initialConfig?: UseOrdersPaginationProps) {
  const [currentFilter, setCurrentFilter] =
    useState<OrderPaginationFilter>('new-orders');

  const [params, setParams] = useState<Partial<FindAllOrdersParams>>({
    page: initialConfig?.page ?? 0,
    size: initialConfig?.size ?? 10,
    sortBy: 'createdAt',
    sort: 'DESC',
  });

  const handleChangePage = (newPage: number) => {
    setParams((prev) => ({ ...prev, page: newPage }));
  };

  const handleChangeSize = (size: number) => {
    setParams((prev) => ({ ...prev, size }));
  };

  const handleChangeFilter = (
    ProductPaginationFilter: OrderPaginationFilter,
  ) => {
    switch (ProductPaginationFilter) {
      case 'new-orders':
        setParams((prev) => ({
          sortBy: 'createdAt',
          sort: 'DESC',
          page: prev.page,
          size: prev.size,
        }));
        setCurrentFilter('new-orders');
        break;

      case 'old-orders':
        setParams((prev) => ({
          sortBy: 'createdAt',
          sort: 'ASC',
          page: prev.page,
          size: prev.size,
        }));
        setCurrentFilter('old-orders');
        break;

      case 'paid':
        setParams((prev) => ({
          ...prev,
          sortBy: 'createdAt',
          sort: 'DESC',
          status: PAYMENT_STATUS.PAID,
        }));
        setCurrentFilter('paid');
        break;

      case 'pending':
        setParams((prev) => ({
          ...prev,
          sortBy: 'createdAt',
          sort: 'DESC',
          status: PAYMENT_STATUS.WAITING_PAYMENT,
        }));
        setCurrentFilter('pending');
        break;
    }
  };

  return {
    params,
    currentFilter,
    handleChangePage,
    handleChangeFilter,
    handleChangeSize,
  };
}
