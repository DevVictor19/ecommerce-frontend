import { executeWithToastFeedback } from '@/lib/toast';
import { useCancelMyOrder } from '@/models/orders.model';

export function useWaitingForPaymentActionsViewModel() {
  const { mutateAsync, isPending } = useCancelMyOrder();

  const handleCancelOrder = (orderId: string) => {
    executeWithToastFeedback({
      callback: () => mutateAsync(orderId),
      genericError: 'Was not possible to cancel order',
      genericSuccess: 'Order canceled',
    });
  };

  return {
    handleCancelOrder,
    isPending,
  };
}
