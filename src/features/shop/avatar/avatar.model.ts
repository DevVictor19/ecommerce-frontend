import { useRouter } from 'next/navigation';

import { deleteCookie } from '@/lib/client-cookies';

export function useAvatarModel() {
  const { refresh } = useRouter();

  const logout = () => {
    deleteCookie('authToken');
    refresh();
  };

  return {
    logout,
  };
}
