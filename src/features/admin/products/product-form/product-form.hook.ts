import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { currencyMask, numberMask } from '@/utils/masks';

import { ProductFormSchema, productFormSchema } from './product-form.schema';

type UseProductFormProps = {
  values?: ProductFormSchema;
};

export function useProductForm({ values }: UseProductFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<ProductFormSchema>({
    resolver: zodResolver(productFormSchema),
    values,
    defaultValues: {
      description: '',
      name: '',
      photoUrl: '',
      price: '',
      stockQuantity: '',
    },
  });

  const price = watch('price');
  const stockQuantity = watch('stockQuantity');

  useEffect(() => {
    setValue('price', currencyMask(price));
  }, [price, setValue]);

  useEffect(() => {
    setValue('stockQuantity', numberMask(stockQuantity));
  }, [stockQuantity, setValue]);

  return {
    register,
    errors,
    handleSubmit,
    reset,
  };
}
