import { ReactNode } from 'react';

import Header from '@/features/shop/shop/header/header';

type ShopLayoutProps = {
  children: ReactNode;
};

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
