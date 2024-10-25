import { useRouter } from 'next/navigation';

import { APP_ROUTE } from '@/enums/app-routes.enum';

import { useSignupForm } from './signup-form.hook';
import { useSignupFormMutation } from './signup-form.mutations';
import { SignupSchema } from './signup-form.schema';

export function useSignupFormModel() {
  const { push } = useRouter();

  const { mutateAsync, isLoading } = useSignupFormMutation();

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
    isLoading,
    register,
    submitHandler,
  };
}
