import { useLogout } from '@/hooks/logout.hook';

export function useHeaderViewModel() {
  const logout = useLogout();

  return {
    logout,
  };
}
