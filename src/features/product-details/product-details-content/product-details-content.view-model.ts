import { useQuantityDisplay } from '../quantity-display/quantity-display.hook';

export function useProductDetailsContentViewModel(initialTotal: number) {
  const { handleDecrement, handleIncrement, quantity, total } =
    useQuantityDisplay(initialTotal);

  return {
    handleDecrement,
    handleIncrement,
    quantity,
    total,
  };
}
