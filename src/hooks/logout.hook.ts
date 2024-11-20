import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { deleteCookie } from '@/lib/client-cookies';

export function useLogout() {
  const queryClient = useQueryClient();
  const { refresh } = useRouter();

  const logout = () => {
    deleteCookie('authToken');
    queryClient.clear();
    refresh();
  };

  return logout;
}
