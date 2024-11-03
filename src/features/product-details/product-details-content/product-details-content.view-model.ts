import { AxiosError, isAxiosError } from 'axios';
import { toast } from 'react-toastify';

import { useAddProductToMyCart } from '@/models/cart.model';
import { Product } from '@/services/products/contracts';

import { useQuantityDisplay } from '../quantity-display/quantity-display.hook';

export function useProductDetailsContentViewModel(product: Product) {
  const { handleDecrement, handleIncrement, handleReset, quantity, total } =
    useQuantityDisplay(product.price);

  const { mutateAsync, isPending } = useAddProductToMyCart();

  const handleAddProductToCart = async () => {
    try {
      await mutateAsync({ productId: product.id, quantity });

      toast.success(`${quantity} product(s) have been added to the cart`, {
        position: 'top-left',
      });
    } catch (err) {
      if (isAxiosError(err)) {
        const { message } = err.response?.data as AxiosError<{
          message: string;
        }>;

        toast.error(message, {
          position: 'top-left',
        });
        return;
      }

      toast.error('Unable to add products to cart', {
        position: 'top-left',
      });
    } finally {
      handleReset();
    }
  };

  return {
    handleAddProductToCart,
    handleDecrement,
    handleIncrement,
    quantity,
    total,
    isPending,
  };
}
