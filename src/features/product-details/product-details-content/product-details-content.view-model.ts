import { executeWithToastFeedback } from '@/lib/toast';
import { useAddProductToMyCart } from '@/models/cart.model';
import { Product } from '@/services/products/contracts';

import { useQuantityDisplay } from '../quantity-display/quantity-display.hook';

export function useProductDetailsContentViewModel(product: Product) {
  const { handleDecrement, handleIncrement, handleReset, quantity, total } =
    useQuantityDisplay(product.price);

  const { mutateAsync, isPending } = useAddProductToMyCart();

  const handleAddProductToCart = async () => {
    await executeWithToastFeedback({
      callback: () => mutateAsync({ productId: product.id, quantity }),
      genericError: 'Unable to add products to cart',
      genericSuccess: `${quantity} product(s) have been added to the cart`,
      config: {
        position: 'top-left',
      },
    });

    handleReset();
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
