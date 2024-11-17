import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { JwtPayload } from '@/lib/auth';
import { deleteCookie, getCookieValue } from '@/lib/client-cookies';
import { parseJWT } from '@/utils/parse-jwt';

export function useAvatarViewModel() {
  const queryClient = useQueryClient();
  const { refresh } = useRouter();

  const logout = () => {
    deleteCookie('authToken');
    queryClient.clear();
    refresh();
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = getCookieValue('authToken');

    if (!token) return;

    const payload = parseJWT<JwtPayload>(token);

    if (payload?.roles.includes('ADMIN')) {
      setIsAdmin(true);
    }
  }, []);

  return {
    logout,
    isAdmin,
  };
}
