import { Edit2, Trash2 } from 'react-feather';

import { Product } from '@/services/products/contracts';
import { formatLocaleDateString } from '@/utils/format-date';
import { formatPrice } from '@/utils/format-price';

type ProductGridRowProps = {
  product: Product;
  index: number;
  onOpenDeleteModal: (productId: string) => void;
  onOpenEditModal: (productId: string) => void;
};

export default function ProductGridRow({
  product,
  index,
  onOpenDeleteModal,
  onOpenEditModal,
}: ProductGridRowProps) {
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
      <td>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-circle btn-xs"
            type="button"
            onClick={() => onOpenEditModal(product.id)}
          >
            <Edit2 className="text-warning font-bold" size={16} />
          </button>
          <button
            className="btn btn-circle btn-xs"
            type="button"
            onClick={() => onOpenDeleteModal(product.id)}
          >
            <Trash2 className="text-error" size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}
