import { useMutation } from '@tanstack/react-query';

import { login } from '@/services/auth';

export function useLoginFormMutation() {
  return useMutation({ mutationFn: login });
}
