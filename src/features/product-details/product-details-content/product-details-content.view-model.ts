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

      toast.success(`${quantity} product(s) have been added to the cart`);
    } catch {
      toast.error('Unable to add products to cart');
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
