import { useId, useMemo, useState } from 'react';

import { executeWithToastFeedback } from '@/lib/toast';
import { useEditProduct, useFindProductById } from '@/models/products.model';

import { ProductFormSchema } from '../product-form/product-form.schema';

export function useEditProductModal() {
  const [selectedProductId, setSelectedProductId] = useState<string>();
  const formId = useId();
  const editModalId = useId();

  const {
    data: product,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
  } = useFindProductById(selectedProductId!, selectedProductId !== undefined);

  const formValues = useMemo<ProductFormSchema | undefined>(() => {
    if (!product) return undefined;

    return {
      ...product,
      price: product.price.toString(),
      stockQuantity: product.stockQuantity.toString(),
    };
  }, [product]);

  const handleOpenEditModal = (productId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.getElementById(editModalId) as any).showModal();
    setSelectedProductId(productId);
  };

  const handleCloseEditModal = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.getElementById(editModalId) as any).close();
  };

  const { mutateAsync: editProduct, isPending: isPendingProduct } =
    useEditProduct();

  const handleEditProduct = async (formData: ProductFormSchema) => {
    if (!selectedProductId) return;

    await executeWithToastFeedback({
      callback: () =>
        editProduct({
          productId: selectedProductId,
          payload: {
            ...formData,
            price: Number(formData.price) * 100,
            stockQuantity: Number(formData.stockQuantity),
          },
        }),
      genericError: 'Unable to edit product',
      genericSuccess: 'Product edited successfully',
    });

    handleCloseEditModal();
  };

  const isLoadingEditModal = isLoadingProduct || isPendingProduct;
  const isErrorEditModal = isErrorProduct;

  return {
    formId,
    editModalId,
    formValues,
    handleOpenEditModal,
    handleCloseEditModal,
    handleEditProduct,
    isLoadingEditModal,
    isErrorEditModal,
  };
}
