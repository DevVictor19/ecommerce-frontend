import { formatPrice } from '@/utils/format-price';

type CartDisplayProps = {
  productsQuantity: number;
  totalPrice: number;
};

export default function CartDisplay({
  productsQuantity,
  totalPrice,
}: CartDisplayProps) {
  return (
    <div>
      <h3 className="mb-1 text-xl font-semibold">
        Total: <span className="opacity-60">${formatPrice(totalPrice)}</span>
      </h3>
      <h4 className="text-sm font-medium">
        Products Quantity:{' '}
        <span className="opacity-60">{productsQuantity}</span>
      </h4>
    </div>
  );
}
