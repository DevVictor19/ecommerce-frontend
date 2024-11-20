import { useCartActionsViewModel } from './cart-actions.view-model';

type CartActionsProps = {
  drawerId: string;
  disableCheckout: boolean;
};

export default function CartActions({
  drawerId,
  disableCheckout,
}: CartActionsProps) {
  const { handleCheckout, labelRef } = useCartActionsViewModel();

  return (
    <div className="mt-10 flex flex-col gap-2">
      <label
        className="btn btn-block btn-outline btn-secondary"
        htmlFor={drawerId}
        ref={labelRef}
      >
        Keep Shopping
      </label>
      <button
        className="btn btn-block btn-primary"
        type="button"
        disabled={disableCheckout}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}
