import { ToastOptions } from 'react-toastify';

import { executeWithToastFeedback } from '@/lib/toast';
import {
  useAddProductToMyCart,
  useRemoveProductFromMyCart,
} from '@/models/cart.model';

const config: ToastOptions = {
  autoClose: 2000,
  position: 'top-left',
};

export default function useCartProductViewModel(
  productId: string,
  inCartQuantity: number,
) {
  const { mutateAsync: addProduct } = useAddProductToMyCart();
  const { mutateAsync: removeProduct } = useRemoveProductFromMyCart();

  const handleIncrement = () => {
    executeWithToastFeedback({
      callback: () => addProduct({ productId, quantity: 1 }),
      genericError: 'Could not add 1 unit',
      genericSuccess: 'Added 1 unit',
      config,
    });
  };

  const handleDecrement = () => {
    executeWithToastFeedback({
      callback: () => removeProduct({ productId, quantity: 1 }),
      genericError: 'Could not remove 1 unit',
      genericSuccess: 'Removed 1 unit',
      config,
    });
  };

  const handleRemove = () => {
    executeWithToastFeedback({
      callback: () => removeProduct({ productId, quantity: inCartQuantity }),
      genericError: 'Could not remove product',
      genericSuccess: 'Product removed',
      config,
    });
  };

  return {
    handleIncrement,
    handleDecrement,
    handleRemove,
  };
}
