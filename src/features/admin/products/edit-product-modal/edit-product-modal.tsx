import AlertInfo from '@/components/feedback/AlertInfo';
import Button from '@/components/ui/Button';

import ProductForm from '../product-form/product-form';
import { ProductFormSchema } from '../product-form/product-form.schema';

type EditProductModalProps = {
  modalId: string;
  formId: string;
  values?: ProductFormSchema;
  isLoading: boolean;
  isError: boolean;
  onClose: () => void;
  onSubmit: (formData: ProductFormSchema) => void;
};

export default function EditProductModal({
  modalId,
  formId,
  values,
  isLoading,
  isError,
  onClose,
  onSubmit,
}: EditProductModalProps) {
  const showContent = !isLoading && !isError;

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Delete Product</h3>
        {isLoading && (
          <div className="flex min-h-28 items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {isError && (
          <AlertInfo message="Could not fetch product data, try again later..." />
        )}
        {showContent && (
          <ProductForm
            formId={formId}
            onSubmit={onSubmit}
            defaultValues={values}
            values={values}
          />
        )}
        <div className="modal-action">
          <button className="btn" onClick={onClose} type="button">
            Close
          </button>
          <Button
            className="btn btn-primary"
            type="submit"
            label="Confirm"
            form={formId}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </div>
      </div>
    </dialog>
  );
}
