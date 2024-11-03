import { useRouter } from 'next/navigation';

import { APP_ROUTE } from '@/enums/app-routes.enum';
import { executeWithToastFeedback } from '@/lib/toast';
import { useFindMyCart } from '@/models/cart.model';
import { useCreateMyOrder } from '@/models/orders.model';

export function useCheckoutViewModel() {
  const { push } = useRouter();

  const {
    data: cart,
    isLoading: isLoadingCart,
    isError: isErrorCart,
  } = useFindMyCart();

  const {
    mutateAsync,
    isPending: isPendingCreateOrder,
    isSuccess: isSuccessCreateOrder,
  } = useCreateMyOrder();

  const handleCreateOrder = async () => {
    const result = await executeWithToastFeedback({
      callback: () => mutateAsync(),
      genericSuccess: 'Order created! You are about to be redirected...',
      genericError: 'Could not finish order',
      config: {
        autoClose: 2000,
      },
    });

    if (result) {
      setTimeout(() => push(`${APP_ROUTE.ORDERS}/${result.id}/payment`), 2000);
    }
  };

  return {
    cart,
    isLoadingCart,
    isErrorCart,
    handleCreateOrder,
    isPendingCreateOrder,
    isSuccessCreateOrder,
  };
}
