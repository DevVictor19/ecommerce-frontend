import { Plus } from 'react-feather';

import Button from '@/components/ui/Button';

import ProductForm from '../product-form/product-form';
import { useAddProductButtonViewModel } from './add-product-button.view-model';

export default function AddProductButton() {
  const {
    formId,
    handleCloseModal,
    handleOpenModal,
    handleSubmit,
    isPending,
    modalId,
  } = useAddProductButtonViewModel();

  return (
    <>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={handleOpenModal}
      >
        Add Product <Plus />{' '}
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <h3 className="mb-3 text-lg font-bold">Create New Product</h3>
          {isPending ? (
            <div className="flex min-h-28 items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <ProductForm formId={formId} onSubmit={handleSubmit} />
          )}
          <div className="modal-action">
            <button className="btn" type="button" onClick={handleCloseModal}>
              Close
            </button>
            <Button
              className="btn btn-primary"
              label="Submit"
              type="submit"
              form={formId}
              isLoading={isPending}
              disabled={isPending}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
