import { useRouter } from 'next/navigation';

import { APP_ROUTE } from '@/enums/app-routes.enum';
import { useLogin } from '@/models/auth.model';

import { useLoginForm } from './login-form.hook';
import { LoginSchema } from './login-form.schema';

export function useLoginFormViewModel() {
  const { push } = useRouter();

  const { mutateAsync, isPending } = useLogin();

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
