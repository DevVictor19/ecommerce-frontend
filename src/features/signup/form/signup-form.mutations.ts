import { useMutation } from '@tanstack/react-query';

import { signup } from '@/services/auth/auth.service';

export function useSignupFormMutation() {
  return useMutation({ mutationFn: signup });
}
