import { useState } from 'react';

export function useQuantityDisplay(initialTotal: number) {
  const [total, setTotal] = useState(initialTotal);
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity === 1) return;

    setTotal((prev) => prev - initialTotal);
    setQuantity((prev) => prev - 1);
  };

  const handleIncrement = () => {
    if (quantity === 100) return;

    setTotal((prev) => prev + initialTotal);
    setQuantity((prev) => prev + 1);
  };

  const handleReset = () => {
    setTotal(initialTotal);
    setQuantity(1);
  };

  return {
    total,
    quantity,
    handleDecrement,
    handleIncrement,
    handleReset,
  };
}
