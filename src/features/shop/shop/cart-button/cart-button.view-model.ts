import { useId } from 'react';

import { useFindMyCart } from '@/models/cart.model';

export function useCartButtonViewModel() {
  const drawerId = useId();
  const { data } = useFindMyCart();

  return {
    drawerId,
    data,
  };
}
