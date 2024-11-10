import { PAYMENT_METHOD } from '@/services/payments/contracts';

export function formatPaymentMethodEnum(value: keyof typeof PAYMENT_METHOD) {
  switch (value) {
    case 'CREDIT_CARD':
      return 'Credit Card';
  }
}
