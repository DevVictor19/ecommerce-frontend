'use client';

import Link from 'next/link';
import { CheckCircle, Info, Truck } from 'react-feather';

import Pagination from '@/components/navigation/Pagination';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import Tabs, { TabLabel } from '../../../components/navigation/Tabs';
import { useOrdersViewModel } from './orders.view-model';
import OrdersGrid from './orders-grid/orders-grid';

const tabLabel: TabLabel[] = [
  { icon: <Info size={18} />, label: 'Waiting for Payment' },
  { icon: <CheckCircle size={18} />, label: 'Paid' },
  { icon: <Truck size={18} />, label: 'On your Way' },
];

export default function OrdersView() {
  const {
    currentIndex,
    data,
    handleChangePage,
    handleChangeTab,
    isError,
    isLoading,
  } = useOrdersViewModel();

  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col p-6">
      <div className="h-60">
        <Link className="btn btn-outline mb-16" href={APP_ROUTE.SHOP}>
          Back to Shop
        </Link>
        <div className="divider w-full">
          <h1 className="text-2xl font-medium sm:text-3xl">My Orders</h1>
        </div>
      </div>
      <Tabs
        className="flex-1"
        currentTabIndex={currentIndex}
        onChangeTab={handleChangeTab}
        tabLabel={tabLabel}
        tabs={[
          <OrdersGrid
            key={1}
            data={data}
            isError={isError}
            isLoading={isLoading}
          />,
          <OrdersGrid
            key={2}
            data={data}
            isError={isError}
            isLoading={isLoading}
          />,
        ]}
      />
      <div className="mt-8 flex w-full justify-center">
        {data && (
          <Pagination
            currentPage={data.page.number}
            totalPages={data.page.totalPages}
            onChangePage={handleChangePage}
          />
        )}
      </div>
    </main>
  );
}
