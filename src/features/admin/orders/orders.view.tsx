'use client';

import FiltersButton, {
  FilterButtonOption,
} from '@/components/ui/FiltersButton';
import { OrderPaginationFilter } from '@/hooks/orders-pagination.hook';

import { useOrdersViewModel } from './orders.view-model';
import OrdersGrid from './orders-grid/orders-grid';

const options: FilterButtonOption<OrderPaginationFilter>[] = [
  { value: 'new-orders', label: 'Recently Created' },
  { value: 'old-orders', label: 'Oldest' },
  { value: 'paid', label: 'Paid' },
  { value: 'pending', label: 'Waiting for Payment' },
];

export default function OrdersView() {
  const {
    currentFilter,
    data,
    handleChangeFilter,
    handleChangePage,
    handleChangeSize,
    isError,
    isLoading,
  } = useOrdersViewModel();

  return (
    <section className="p-8">
      <div className="flex justify-end">
        <FiltersButton
          className="dropdown-end mb-6"
          currentFilter={currentFilter}
          onSelect={handleChangeFilter}
          options={options}
        />
      </div>
      <OrdersGrid
        isError={isError}
        isLoading={isLoading}
        orders={data?.content}
        page={data?.page}
        onChangePage={handleChangePage}
        onChangeSize={handleChangeSize}
      />
    </section>
  );
}
