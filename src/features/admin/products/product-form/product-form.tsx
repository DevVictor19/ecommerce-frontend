import TextInput from '@/components/inputs/TextInput';

import { ProductFormSchema } from './product-form.schema';
import { useProductFormViewModel } from './product-form.view-model';

type ProductFormProps = {
  values?: ProductFormSchema;
  formId: string;
  onSubmit: (formData: ProductFormSchema) => void;
};

export default function ProductForm({
  values,
  formId,
  onSubmit,
}: ProductFormProps) {
  const { errors, submitHandler, register } = useProductFormViewModel({
    values,
    onSubmit,
  });

  return (
    <form
      className="grid grid-cols-12 gap-x-4 gap-y-2"
      onSubmit={submitHandler}
      id={formId}
    >
      <TextInput
        className="col-span-12"
        id="name"
        label="Name:"
        {...register('name')}
        error={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <TextInput
        className="col-span-12"
        id="description"
        label="Description:"
        {...register('description')}
        error={!!errors.description}
        errorMessage={errors.description?.message}
      />
      <TextInput
        className="col-span-6"
        id="price"
        label="Price:"
        {...register('price')}
        error={!!errors.price}
        errorMessage={errors.price?.message}
      />
      <TextInput
        className="col-span-6"
        id="stockQuantity"
        label="Stock Qnt:"
        {...register('stockQuantity')}
        error={!!errors.stockQuantity}
        errorMessage={errors.stockQuantity?.message}
      />
      <TextInput
        className="col-span-12"
        id="photoUrl"
        label="Photo URL:"
        {...register('photoUrl')}
        error={!!errors.photoUrl}
        errorMessage={errors.photoUrl?.message}
      />
    </form>
  );
}
