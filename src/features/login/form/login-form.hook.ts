import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { LoginSchema, loginSchema } from './login-form.schema';

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  return {
    register,
    handleSubmit,
    reset,
    setError,
    errors,
  };
}
