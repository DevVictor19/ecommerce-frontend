import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { APP_ROUTE } from '@/enums/app-routes.enum';
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
    try {
      const { id } = await mutateAsync();

      toast.success('Order created! You are about to be redirected...', {
        autoClose: 2000,
      });

      setTimeout(() => push(`${APP_ROUTE.ORDERS}/${id}/payment`), 2000);
    } catch {
      toast.error('Could not finish order');
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
