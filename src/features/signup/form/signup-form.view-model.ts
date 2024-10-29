import { useRouter } from 'next/navigation';

import { APP_ROUTE } from '@/enums/app-routes.enum';
import { useSignupMutation } from '@/models/auth.model';

import { useSignupForm } from './signup-form.hook';
import { SignupSchema } from './signup-form.schema';

export function useSignupFormViewModel() {
  const { push } = useRouter();

  const { mutateAsync, isPending } = useSignupMutation();

  const { errors, register, handleSubmit, reset, setError } = useSignupForm();

  const submitHandler = handleSubmit(async (formData: SignupSchema) => {
    const error = await mutateAsync(formData);

    if (error) {
      setError('username', { message: error.message });
      setError('email', { message: error.message });
      setError('password', { message: error.message });
      return;
    }

    reset();

    push(APP_ROUTE.HOME);
  });

  return {
    errors,
    isPending,
    register,
    submitHandler,
  };
}
