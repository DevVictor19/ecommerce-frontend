import Link from 'next/link';

import { APP_ROUTE } from '@/enums/app-routes.enum';
import { Order, PAYMENT_STATUS } from '@/services/orders/contracts';
import { cn } from '@/utils/cn';
import { formatDateString } from '@/utils/format-date';
import { formatPrice } from '@/utils/format-price';

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
        <ul className="h-24 overflow-y-auto">
          {order.cart.products.map((p) => (
            <li key={p.id}>
              {p.name} <span className="font-medium">x{p.inCartQuantity}</span>
            </li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          {isWaitingForPayment && (
            <Link
              className="btn btn-secondary btn-outline"
              href={`${APP_ROUTE.ORDERS}/${order.id}/payment`}
            >
              Finish Payment
            </Link>
          )}
          {isPaid && (
            <button className="btn btn-secondary btn-outline" type="button">
              See Payment
            </button>
          )}
          <button className="btn btn-secondary">See Cart</button>
        </div>
      </div>
    </div>
  );
}
