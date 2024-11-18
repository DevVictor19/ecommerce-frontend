import { ReactNode } from 'react';

import Header from '@/features/admin/header/header';
import SideBar from '@/features/admin/sidebar/sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex w-full flex-col">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
