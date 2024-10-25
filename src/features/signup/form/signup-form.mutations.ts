import { useMutation } from '@tanstack/react-query';

import { signup } from '@/services/auth';

export function useSignupFormMutation() {
  return useMutation({ mutationFn: signup });
}
