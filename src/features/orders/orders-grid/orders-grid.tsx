import AlertInfo from '@/components/feedback/AlertInfo';
import LoadingScreen from '@/components/feedback/LoadingScreen';
import { FindAllMyOrdersResponse } from '@/services/orders/contracts';

import OrderCard from '../order-card/order-card';

type OrdersGridProps = {
  data: FindAllMyOrdersResponse | undefined;
  isError: boolean;
  isLoading: boolean;
};

export default function OrdersGrid({
  data,
  isError,
  isLoading,
}: OrdersGridProps) {
  if (isError) {
    return (
      <div className="p-6">
        <AlertInfo message="Unable to fetch order data, please try again later..." />
      </div>
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!data) {
    return <div>No orders yet...</div>;
  }

  return (
    <section className="bg-base-100 grid grid-cols-1 justify-items-center gap-y-24 px-5 md:grid-cols-2 xl:grid-cols-3">
      {data.content.map((order, index) => (
        <OrderCard key={order.id} order={order} index={index} />
      ))}
    </section>
  );
}
