import { PAYMENT_STATUS } from '@/services/orders/contracts';
import { PAYMENT_METHOD } from '@/services/payments/contracts';

export function formatPaymentMethodEnum(value: keyof typeof PAYMENT_METHOD) {
  switch (value) {
    case 'CREDIT_CARD':
      return 'Credit Card';
  }
}

export function formatPaymentStatusEnum(value: keyof typeof PAYMENT_STATUS) {
  switch (value) {
    case 'PAID':
      return 'Paid';
    case 'WAITING_PAYMENT':
      return 'Waiting for Payment';
  }
}
