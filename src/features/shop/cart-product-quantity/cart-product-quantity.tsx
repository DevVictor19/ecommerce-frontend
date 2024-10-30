type CartProductQuantityProps = {
  onDecrement: () => void;
  onIncrement: () => void;
};

export default function CartProductQuantity({
  onDecrement,
  onIncrement,
}: CartProductQuantityProps) {
  return (
    <div className="flex items-center gap-1">
      <button
        className="btn btn-secondary btn-xs btn-square"
        type="button"
        onClick={onDecrement}
      >
        -
      </button>
      <button
        className="btn btn-secondary btn-xs btn-square"
        type="button"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}
