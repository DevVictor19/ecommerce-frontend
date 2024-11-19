import DataGridWithPagination from '@/components/data-display/DataGridWithPagination';
import { Product } from '@/services/products/contracts';
import { formatLocaleDateString } from '@/utils/format-date';
import { formatPrice } from '@/utils/format-price';

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
];

export default function ProductsGrid({
  isError,
  isLoading,
  products,
  page,
  onChangePage,
  onChangeSize,
}: ProductsGridProps) {
  return (
    <DataGridWithPagination
      isError={isError}
      isLoading={isLoading}
      columns={columns}
      data={products}
      onChangePage={onChangePage}
      onChangeSize={onChangeSize}
      render={(row, index) => (
        <ProductGridRow key={row.id} index={index} product={row} />
      )}
      page={page}
    />
  );
}

type ProductGridRowProps = {
  product: Product;
  index: number;
};

function ProductGridRow({ product, index }: ProductGridRowProps) {
  return (
    <tr className="hover">
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>
        <span className="badge badge-success">
          ${formatPrice(product.price)}
        </span>
      </td>
      <td>
        <span className="badge badge-error">{product.stockQuantity}</span>
      </td>
      <td>
        <a
          className="text-primary whitespace-nowrap underline"
          href={product.photoUrl}
          target="_blank"
        >
          Product Photo
        </a>
      </td>
      <td>{product.description}</td>
      <td className="whitespace-nowrap">
        {formatLocaleDateString(product.createdAt)}
      </td>
    </tr>
  );
}
