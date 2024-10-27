import { useMutation } from '@tanstack/react-query';

import { login, signup } from '@/services/auth/auth.service';

export function useLoginMutation() {
  return useMutation({ mutationFn: login });
}

export function useSignupMutation() {
  return useMutation({ mutationFn: signup });
}
