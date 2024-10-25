import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { SignupSchema, signupSchema } from './signup-form.schema';

export function useSignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  return {
    register,
    handleSubmit,
    reset,
    setError,
    errors,
  };
}
