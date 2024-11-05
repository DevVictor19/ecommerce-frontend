import { useState } from 'react';

import { useFindAllMyOrders } from '@/models/orders.model';
import {
  FindAllMyOrdersParams,
  PAYMENT_STATUS,
} from '@/services/orders/contracts';

import { useTabs } from '../../components/navigation/Tabs/tabs.hook';

export function useOrdersViewModel() {
  const [params, setParams] = useState<Partial<FindAllMyOrdersParams>>({
    page: 0,
    status: PAYMENT_STATUS.WAITING_PAYMENT,
  });

  const { currentIndex, handleChangeIndex } = useTabs();

  const { data, isLoading, isError } = useFindAllMyOrders(params);

  const handleChangePage = (newPage: number) => {
    setParams((prev) => ({ ...prev, page: newPage }));
  };

  const handleChangeTab = (index: number) => {
    switch (index) {
      case 0:
        handleChangeIndex(0);

        setParams((prev) => ({
          ...prev,
          page: 0,
          status: PAYMENT_STATUS.WAITING_PAYMENT,
        }));
        break;

      case 1:
        handleChangeIndex(1);

        setParams((prev) => ({
          ...prev,
          page: 0,
          status: PAYMENT_STATUS.PAID,
        }));

        break;

      default:
        break;
    }
  };

  return {
    currentIndex,
    data,
    isLoading,
    isError,
    handleChangePage,
    handleChangeTab,
  };
}
