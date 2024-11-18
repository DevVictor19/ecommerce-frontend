import { Payment } from '@/services/payments/contracts';
import { formatPaymentMethodEnum } from '@/utils/format-payment-method-enum';
import { formatPrice } from '@/utils/format-price';

import { usePaidActionsViewModel } from './paid-actions.view-model';

type PaidActionsProps = {
  payment: Payment;
};

export default function PaidActions({ payment }: PaidActionsProps) {
  const { handleOpenModal, modalId } = usePaidActionsViewModel();

  return (
    <div className="card-actions justify-end">
      <button
        onClick={handleOpenModal}
        className="btn btn-secondary"
        type="button"
      >
        See Payment
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h1 className="text-xl font-bold">Order Payment</h1>
          <div className="divider"></div>
          <div className="flex flex-col gap-2 text-lg">
            <p>
              <span className="font-semibold">Total Price:</span> $
              {formatPrice(payment.price)}
            </p>
            <p>
              <span className="font-semibold">Payment Method:</span>{' '}
              <span className="badge badge-secondary badge-lg font-bold">
                {formatPaymentMethodEnum(payment.method)}
              </span>
            </p>
            <p>
              <span className="font-semibold">Parcels:</span> {payment.parcels}
            </p>
            <p>
              <span className="font-semibold">Parcel Price:</span> $
              {formatPrice(payment.price / payment.parcels)}
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
