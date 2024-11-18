import { useEffect, useState } from 'react';

import { useLogout } from '@/hooks/logout.hook';
import { JwtPayload } from '@/lib/auth';
import { getCookieValue } from '@/lib/client-cookies';
import { parseJWT } from '@/utils/parse-jwt';

export function useAvatarViewModel() {
  const logout = useLogout();

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
