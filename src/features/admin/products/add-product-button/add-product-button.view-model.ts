import { useId } from 'react';

import { executeWithToastFeedback } from '@/lib/toast';
import { useCreateProduct } from '@/models/products.model';

import { ProductFormSchema } from '../product-form/product-form.schema';

export function useAddProductButtonViewModel() {
  const modalId = useId();
  const formId = useId();

  const handleOpenModal = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.getElementById(modalId) as any).showModal(); // daisy ui specific
  };

  const handleCloseModal = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.getElementById(modalId) as any).close(); // daisy ui specific
  };

  const { mutateAsync, isPending } = useCreateProduct();

  const handleSubmit = async (formData: ProductFormSchema) => {
    await executeWithToastFeedback({
      callback: () =>
        mutateAsync({
          ...formData,
          price: Number(formData.price) * 100,
          stockQuantity: Number(formData.stockQuantity),
        }),
      genericError: 'Unable to create product',
      genericSuccess: 'Product created successfully',
    });

    handleCloseModal();
  };

  return {
    formId,
    handleCloseModal,
    handleOpenModal,
    handleSubmit,
    isPending,
    modalId,
  };
}
