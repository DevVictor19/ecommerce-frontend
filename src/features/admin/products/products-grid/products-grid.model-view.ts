import { useDeleteProductModal } from '../delete-product-modal/delete-product-modal.hook';
import { useEditProductModal } from '../edit-product-modal/edit-product-modal.hook';

export function useProductsGridModelView() {
  return {
    ...useDeleteProductModal(),
    ...useEditProductModal(),
  };
}
