import Link from 'next/link';

import Button from '@/components/ui/Button';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import { useWaitingForPaymentActionsViewModel } from './waiting-for-payment-actions.view-model';

type WaitingForPaymentActionsProps = {
  orderId: string;
};

export default function WaitingForPaymentActions({
  orderId,
}: WaitingForPaymentActionsProps) {
  const { handleCancelOrder, isPending } =
    useWaitingForPaymentActionsViewModel();

  return (
    <div className="card-actions justify-end">
      <Button
        className="btn btn-error btn-outline"
        type="button"
        label="Cancel"
        isLoading={isPending}
        disabled={isPending}
        onClick={() => handleCancelOrder(orderId)}
      />
      <Link
        className="btn btn-secondary"
        href={`${APP_ROUTE.ORDERS}/${orderId}/payment`}
      >
        Pay Now!
      </Link>
    </div>
  );
}
