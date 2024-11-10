import { useMutation } from '@tanstack/react-query';

import { login, signup } from '@/services/auth/auth.service';

export function useLogin() {
  return useMutation({ mutationFn: login });
}

export function useSignup() {
  return useMutation({ mutationFn: signup });
}
