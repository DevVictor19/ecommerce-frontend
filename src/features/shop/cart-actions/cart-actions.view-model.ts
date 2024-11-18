import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { APP_ROUTE } from '@/enums/app-routes.enum';

export function useCartActionsViewModel() {
  const { push } = useRouter();
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleCheckout = () => {
    push(APP_ROUTE.SHOP_CHECKOUT);
    labelRef.current?.click();
  };

  return {
    labelRef,
    handleCheckout,
  };
}
