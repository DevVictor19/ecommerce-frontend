type CartActionsProps = {
  drawerId: string;
  disableCheckout: boolean;
};

export default function CartActions({
  drawerId,
  disableCheckout,
}: CartActionsProps) {
  return (
    <div className="mt-10 flex flex-col gap-2">
      <label
        className="btn btn-block btn-outline btn-secondary"
        htmlFor={drawerId}
      >
        Keep Shopping
      </label>
      <button
        className="btn btn-block btn-primary"
        type="button"
        disabled={disableCheckout}
      >
        Checkout
      </button>
    </div>
  );
}
