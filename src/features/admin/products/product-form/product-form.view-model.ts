import { useProductForm } from './product-form.hook';
import { ProductFormSchema } from './product-form.schema';

type UseProductFormViewModel = {
  values?: ProductFormSchema;
  defaultValues?: Partial<ProductFormSchema>;
  onSubmit: (formData: ProductFormSchema) => void;
};

export function useProductFormViewModel({
  values,
  defaultValues,
  onSubmit,
}: UseProductFormViewModel) {
  const { errors, handleSubmit, register, reset } = useProductForm({
    values,
    defaultValues,
  });

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
