import { useProductForm } from './product-form.hook';
import { ProductFormSchema } from './product-form.schema';

type UseProductFormViewModel = {
  values?: ProductFormSchema;
  onSubmit: (formData: ProductFormSchema) => void;
};

export function useProductFormViewModel({
  values,
  onSubmit,
}: UseProductFormViewModel) {
  const { errors, handleSubmit, register, reset } = useProductForm({ values });

  const submit = (formData: ProductFormSchema) => {
    onSubmit(formData);
    reset();
  };

  const submitHandler = handleSubmit(submit);

  return {
    errors,
    register,
    submitHandler,
  };
}
