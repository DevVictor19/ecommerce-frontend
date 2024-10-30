import { useFindMyCart } from '@/models/cart.model';

export function useCartButtonViewModel() {
  const { data } = useFindMyCart();

  return {
    productsQuantity: data?.productsQuantity ?? 0,
  };
}
