import 'react-toastify/dist/ReactToastify.min.css';

import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '@/features/shop/shop/header/header';

type ShopLayoutProps = {
  children: ReactNode;
};

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <ToastContainer />
    </>
  );
}
