import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  cardNumberMask,
  ccvMask,
  documentMask,
  expiryMonthMask,
  expiryYearMask,
} from '@/utils/masks';

import {
  PayWithCreditCardSchema,
  payWithCreditCardSchema,
} from './payment-form.schema';

export function usePaymentForm() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<PayWithCreditCardSchema>({
    resolver: zodResolver(payWithCreditCardSchema),
    defaultValues: {
      document: '',
      card: {
        ccv: '',
        expiryMonth: '',
        expiryYear: '',
        holderName: '',
        number: '',
      },
    },
  });

  const document = watch('document');
  const cardNumber = watch('card.number');
  const expiryYear = watch('card.expiryYear');
  const expiryMonth = watch('card.expiryMonth');
  const ccv = watch('card.ccv');

  useEffect(() => {
    setValue('document', documentMask(document));
  }, [document, setValue]);

  useEffect(() => {
    setValue('card.number', cardNumberMask(cardNumber));
  }, [cardNumber, setValue]);

  useEffect(() => {
    setValue('card.expiryYear', expiryYearMask(expiryYear));
  }, [expiryYear, setValue]);

  useEffect(() => {
    setValue('card.expiryMonth', expiryMonthMask(expiryMonth));
  }, [expiryMonth, setValue]);

  useEffect(() => {
    setValue('card.ccv', ccvMask(ccv));
  }, [ccv, setValue]);

  return {
    register,
    errors,
    handleSubmit,
  };
}
