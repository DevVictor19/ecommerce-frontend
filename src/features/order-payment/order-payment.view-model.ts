import { useParams, useRouter } from 'next/navigation';

import { APP_ROUTE } from '@/enums/app-routes.enum';
import { executeWithToastFeedback } from '@/lib/toast';
import { useFindOrderById } from '@/models/orders.model';
import { usePayWithCreditCard } from '@/models/payments.model';

import { PayWithCreditCardSchema } from './payment-form/payment-form.schema';

export function useOrderPaymentViewModel() {
  const { id } = useParams<{ id: string }>();
  const { push } = useRouter();

  const {
    data: order,
    isLoading: isLoadingOrder,
    isError: isErrorOrder,
  } = useFindOrderById(id);

  const {
    mutateAsync,
    isPending: isPendingPayWithCreditCard,
    isSuccess: isSuccessPayWithCreditCard,
  } = usePayWithCreditCard();

  const handleSubmit = async (formData: PayWithCreditCardSchema) => {
    const { error } = await executeWithToastFeedback({
      callback: () => mutateAsync({ orderId: id, body: formData }),
      genericError: 'Unable to make payment',
      genericSuccess:
        'Payment made successfully, you are about to be redirected...',
      config: {
        autoClose: 4000,
      },
    });

    if (!error) {
      setTimeout(() => push(APP_ROUTE.ORDERS), 4000);
    }
  };

  return {
    order,
    isLoadingOrder,
    isErrorOrder,
    handleSubmit,
    isPendingPayWithCreditCard,
    isSuccessPayWithCreditCard,
  };
}
