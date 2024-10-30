import { toast } from 'react-toastify';

import {
  useAddProductToMyCart,
  useRemoveProductFromMyCart,
} from '@/models/cart.model';

const autoClose = 2000;
const position = 'top-left';

export default function useCartProductViewModel(
  productId: string,
  inCartQuantity: number,
) {
  const { mutateAsync: addProduct } = useAddProductToMyCart();
  const { mutateAsync: removeProduct } = useRemoveProductFromMyCart();

  const handleIncrement = async () => {
    try {
      await addProduct({ productId, quantity: 1 });

      toast.success('Added 1 unit.', {
        position,
        autoClose,
      });
    } catch {
      toast.error('Could not add 1 unit.', {
        position,
      });
    }
  };

  const handleDecrement = async () => {
    try {
      await removeProduct({ productId, quantity: 1 });

      toast.success('Removed 1 unit.', {
        position,
        autoClose,
      });
    } catch {
      toast.error('Could not remove 1 unit.', {
        position,
      });
    }
  };

  const handleRemove = async () => {
    try {
      await removeProduct({ productId, quantity: inCartQuantity });

      toast.success('Product removed.', {
        position,
        autoClose,
      });
    } catch {
      toast.error('Could not remove product.', {
        position,
      });
    }
  };

  return {
    handleIncrement,
    handleDecrement,
    handleRemove,
  };
}
