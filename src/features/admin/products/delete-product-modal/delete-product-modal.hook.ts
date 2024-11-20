import { useId, useState } from 'react';

import { executeWithToastFeedback } from '@/lib/toast';
import { useDeleteProduct } from '@/models/products.model';

export function useDeleteProductModal() {
  const [selectedProductId, setSelectedProductId] = useState<string>();

  const deleteModalId = useId();

  const handleOpenDeleteModal = (productId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.getElementById(deleteModalId) as any).showModal();
    setSelectedProductId(productId);
  };

  const handleCloseDeleteModal = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document.getElementById(deleteModalId) as any).close();
  };

  const { mutateAsync: deleteProduct, isPending: isPendingDeleteProduct } =
    useDeleteProduct();

  const handleDeleteProduct = async () => {
    if (!selectedProductId) return;

    await executeWithToastFeedback({
      callback: () => deleteProduct(selectedProductId),
      genericError: 'Unable to delete product',
      genericSuccess: 'Product deleted successfully',
    });

    handleCloseDeleteModal();
  };

  return {
    deleteModalId,
    isPendingDeleteProduct,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteProduct,
  };
}
