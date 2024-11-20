import Button from '@/components/ui/Button';

type DeleteProductModalProps = {
  modalId: string;
  isLoading: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export default function DeleteProductModal({
  modalId,
  isLoading,
  onClose,
  onSubmit,
}: DeleteProductModalProps) {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Delete Product</h3>
        {isLoading ? (
          <div className="flex min-h-28 items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <p className="py-4">
            This action will remove all product data, do you want to continue?
          </p>
        )}
        <div className="modal-action">
          <button className="btn" onClick={onClose} type="button">
            Close
          </button>
          <Button
            className="btn btn-primary"
            onClick={onSubmit}
            type="button"
            label="Confirm"
            disabled={isLoading}
            isLoading={isLoading}
          />
        </div>
      </div>
    </dialog>
  );
}
