import Select from '@/components/inputs/Select';
import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/ui/Button';

import { PayWithCreditCardSchema } from './payment-form.schema';
import { usePaymentFormViewModel } from './payment-form.view-model';

type PaymentFormProps = {
  isPending: boolean;
  totalPrice: number;
  onSubmit: (formData: PayWithCreditCardSchema) => void;
};

export default function PaymentForm({
  isPending,
  totalPrice,
  onSubmit,
}: PaymentFormProps) {
  const { errors, handleSubmit, options, register } =
    usePaymentFormViewModel(totalPrice);

  return (
    <div>
      <form
        className="mb-4 grid grid-cols-12 gap-x-4 gap-y-2"
        id="payment-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          className="col-span-12"
          id="document"
          label="Document:"
          {...register('document')}
          error={!!errors.document}
          errorMessage={errors.document?.message}
        />
        <Select
          className="col-span-12"
          id="parcels"
          label="Parcels:"
          {...register('parcels')}
          error={!!errors.parcels}
          errorMessage={errors.parcels?.message}
          options={options}
        />
        <div className="divider col-span-12 font-bold">Card</div>
        <TextInput
          className="col-span-12"
          id="number"
          label="Number:"
          {...register('card.number')}
          error={!!errors.card?.number}
          errorMessage={errors.card?.number?.message}
        />
        <TextInput
          className="col-span-12"
          id="holderName"
          label="Holder Name:"
          {...register('card.holderName')}
          error={!!errors.card?.holderName}
          errorMessage={errors.card?.holderName?.message}
        />
        <TextInput
          className="col-span-4"
          id="expiryYear"
          label="Expiry Year:"
          {...register('card.expiryYear')}
          error={!!errors.card?.expiryYear}
          errorMessage={errors.card?.expiryYear?.message}
        />
        <TextInput
          className="col-span-4"
          id="expiryMonth"
          label="Expiry Month:"
          {...register('card.expiryMonth')}
          error={!!errors.card?.expiryMonth}
          errorMessage={errors.card?.expiryMonth?.message}
        />
        <TextInput
          className="col-span-4"
          id="ccv"
          label="CCV:"
          {...register('card.ccv')}
          error={!!errors.card?.ccv}
          errorMessage={errors.card?.ccv?.message}
        />
      </form>
      <Button
        className="btn btn-secondary btn-block col-span-4"
        form="payment-form"
        type="submit"
        label="Pay Now!"
        isLoading={isPending}
        disabled={isPending}
      />
    </div>
  );
}
