import DataGridWithPagination from '@/components/data-display/DataGridWithPagination';
import { Order, PAYMENT_STATUS } from '@/services/orders/contracts';
import { cn } from '@/utils/cn';
import { formatLocaleDateString } from '@/utils/format-date';
import {
  formatPaymentMethodEnum,
  formatPaymentStatusEnum,
} from '@/utils/format-enum';
import { formatPrice } from '@/utils/format-price';

type OrdersGridProps = {
  isError: boolean;
  isLoading: boolean;
  orders: Order[] | undefined;
  page?: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
  onChangePage: (page: number) => void;
  onChangeSize: (size: number) => void;
};

const columns = [
  'Order',
  'Status',
  'Payed At',
  'Payment Method',
  'Cart Total',
  'Cart Products',
  'Created At',
];

export default function OrdersGrid({
  isError,
  isLoading,
  orders,
  page,
  onChangePage,
  onChangeSize,
}: OrdersGridProps) {
  return (
    <DataGridWithPagination
      isError={isError}
      isLoading={isLoading}
      columns={columns}
      data={orders}
      onChangePage={onChangePage}
      onChangeSize={onChangeSize}
      render={(row, index) => (
        <OrdersGridRow key={row.id} index={index} order={row} />
      )}
      page={page}
    />
  );
}

type OrdersGridRowProps = {
  order: Order;
  index: number;
};

function OrdersGridRow({ order, index }: OrdersGridRowProps) {
  const isWaitingForPayment = order.status === PAYMENT_STATUS.WAITING_PAYMENT;
  const isPaid = order.status === PAYMENT_STATUS.PAID;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <span
          className={cn('badge', {
            'badge-warning': isWaitingForPayment,
            'badge-success': isPaid,
          })}
        >
          {formatPaymentStatusEnum(order.status)}
        </span>
      </td>
      <td>
        {order.payment
          ? formatLocaleDateString(order.payment.createdAt)
          : 'Not Paid'}
      </td>
      <td>
        {order.payment ? (
          <span className="badge badge-secondary">
            {formatPaymentMethodEnum(order.payment.method)}
          </span>
        ) : (
          'Not Paid'
        )}
      </td>
      <td>
        <span className="badge badge-success">
          ${formatPrice(order.cart.totalPrice)}
        </span>
      </td>
      <td>{order.cart.productsQuantity}</td>
      <td className="whitespace-nowrap">
        {formatLocaleDateString(order.createdAt)}
      </td>
    </tr>
  );
}
