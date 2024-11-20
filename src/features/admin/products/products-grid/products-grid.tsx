import DataGridWithPagination from '@/components/data-display/DataGridWithPagination';
import { Product } from '@/services/products/contracts';

import DeleteProductModal from '../delete-product-modal/delete-product-modal';
import ProductGridRow from '../product-grid-row/product-grid-row';
import { useProductsGridModelView } from './products-grid.model-view';

type ProductsGridProps = {
  isError: boolean;
  isLoading: boolean;
  products: Product[] | undefined;
  page?: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
  onChangePage: (page: number) => void;
  onChangeSize: (size: number) => void;
};

const columns = [
  'Product',
  'Name',
  'Price',
  'Stock Qnt',
  'Photo URL',
  'Description',
  'Created At',
  'Actions',
];

export default function ProductsGrid({
  isError,
  isLoading,
  products,
  page,
  onChangePage,
  onChangeSize,
}: ProductsGridProps) {
  const {
    deleteModalId,
    isPendingDeleteProduct,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleDeleteProduct,
  } = useProductsGridModelView();

  return (
    <>
      <DeleteProductModal
        isLoading={isPendingDeleteProduct}
        modalId={deleteModalId}
        onClose={handleCloseDeleteModal}
        onSubmit={handleDeleteProduct}
      />
      <DataGridWithPagination
        isError={isError}
        isLoading={isLoading}
        columns={columns}
        data={products}
        onChangePage={onChangePage}
        onChangeSize={onChangeSize}
        render={(row, index) => (
          <ProductGridRow
            key={row.id}
            index={index}
            product={row}
            onOpenDeleteModal={handleOpenDeleteModal}
          />
        )}
        page={page}
      />
    </>
  );
}
