import { Order, PAYMENT_STATUS } from '@/services/orders/contracts';
import { cn } from '@/utils/cn';
import { formatDateString } from '@/utils/format-date';
import { formatPrice } from '@/utils/format-price';

import CardProductsList from '../card-products-list/card-products-list';
import PaidActions from '../paid-actions/paid-actions';
import WaitingForPaymentActions from '../waiting-for-payment-actions/waiting-for-payment-actions';

type OrderCardProps = {
  order: Order;
  index: number;
};

export default function OrderCard({ order, index }: OrderCardProps) {
  const isWaitingForPayment = order.status === PAYMENT_STATUS.WAITING_PAYMENT;
  const isPaid = order.status === PAYMENT_STATUS.PAID;

  return (
    <div className="card bg-base-100 relative w-full max-w-96 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">Order {index + 1}</h2>
        <h3 className="text-lg">
          <span className="font-medium">Total:</span> $
          {formatPrice(order.cart.totalPrice)}
        </h3>
        <h4>
          <span className="font-medium">Products Quantity:</span>{' '}
          {order.cart.productsQuantity}
        </h4>
        <h5>
          <span className="font-medium">Created At:</span>{' '}
          {formatDateString(order.createdAt)}
        </h5>
        {isPaid && (
          <h6>
            <span className="font-medium">Paid At:</span>{' '}
            {formatDateString(order.payment!.createdAt)}
          </h6>
        )}
        <p
          className={cn('badge absolute right-4', {
            'badge-warning': isWaitingForPayment,
            'badge-success': isPaid,
          })}
        >
          {isWaitingForPayment && 'Waiting for Payment'}
          {isPaid && 'Paid'}
        </p>
        <div className="divider">Products</div>
        <CardProductsList products={order.cart.products} />
        {isPaid && <PaidActions payment={order.payment!} />}
        {isWaitingForPayment && <WaitingForPaymentActions orderId={order.id} />}
      </div>
    </div>
  );
}
