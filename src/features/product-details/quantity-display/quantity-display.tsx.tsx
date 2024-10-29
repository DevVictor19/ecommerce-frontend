import { formatPrice } from '@/utils/format-price';

type QuantityDisplayProps = {
  total: number;
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

export default function QuantityDisplay({
  total,
  quantity,
  onDecrement,
  onIncrement,
}: QuantityDisplayProps) {
  return (
    <div className="mb-8 flex items-baseline gap-10">
      <div>
        <p className="mb-4">Quantity:</p>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-square"
            type="button"
            onClick={onDecrement}
          >
            -
          </button>
          <div className="flex size-11 items-center justify-center rounded-sm border">
            {quantity}
          </div>
          <button
            className="btn btn-square"
            type="button"
            onClick={onIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="mb-8">
        <p className="mb-4">Total:</p>
        <h3 className="text-xl md:text-3xl">$ {formatPrice(total)} </h3>
      </div>
    </div>
  );
}
