import { CartProduct } from '@/services/cart/contracts';
import { formatPrice } from '@/utils/format-price';

type CardProductsListProps = {
  products: CartProduct[];
};

export default function CardProductsList({ products }: CardProductsListProps) {
  return (
    <ul className="h-24 overflow-y-auto">
      {products.map((p) => (
        <li key={p.id}>
          <span className="font-medium">${formatPrice(p.price)}</span> -{' '}
          {p.name} - <span className="font-medium">x{p.inCartQuantity}</span>
        </li>
      ))}
    </ul>
  );
}
