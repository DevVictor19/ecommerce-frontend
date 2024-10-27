import { useRouter } from 'next/navigation';

import { useLoginMutation } from '@/data/auth';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import { useLoginForm } from './login-form.hook';
import { LoginSchema } from './login-form.schema';

export function useLoginFormModel() {
  const { push } = useRouter();

  const { mutateAsync, isPending } = useLoginMutation();

  const { errors, register, handleSubmit, reset, setError } = useLoginForm();

  const submitHandler = handleSubmit(async (formData: LoginSchema) => {
    const error = await mutateAsync(formData);

    if (error) {
      setError('email', { message: error.message });
      setError('password', { message: error.message });
      return;
    }

    reset();
    push(APP_ROUTE.SHOP);
  });

  return {
    errors,
    isPending,
    register,
    submitHandler,
  };
}
