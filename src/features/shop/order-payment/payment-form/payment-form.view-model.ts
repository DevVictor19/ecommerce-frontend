import { SelectOption } from '@/components/inputs/Select';
import { formatPrice } from '@/utils/format-price';

import { usePaymentForm } from './payment-form.hook';

function createParcelOptions(totalPrice: number): SelectOption[] {
  const options: SelectOption[] = [];

  for (let i = 1; i <= 12; i++) {
    const parcelValue = totalPrice / i; // cents
    const label = `${i}x - $${formatPrice(parcelValue)}`;
    options.push({ value: i, label });
  }

  return options;
}

export function usePaymentFormViewModel(totalPrice: number) {
  const { errors, handleSubmit, register } = usePaymentForm();
  const options = createParcelOptions(totalPrice);

  return {
    errors,
    handleSubmit,
    register,
    options,
  };
}
