import { useLoginForm } from './login-form.hook';
import { useLoginFormMutation } from './login-form.mutations';
import { LoginSchema } from './login-form.schema';

export function useLoginFormModel() {
  const { mutateAsync, isLoading } = useLoginFormMutation();

  const { errors, register, handleSubmit, reset, setError } = useLoginForm();

  const submitHandler = handleSubmit(async (formData: LoginSchema) => {
    const error = await mutateAsync(formData);

    if (error) {
      setError('email', { message: error.message });
      setError('password', { message: error.message });
      return;
    }

    reset();
  });

  return {
    errors,
    isLoading,
    register,
    submitHandler,
  };
}
