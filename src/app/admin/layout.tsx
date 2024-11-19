import { ReactNode } from 'react';

import Header from '@/features/admin/admin/header/header';
import SideBar from '@/features/admin/admin/sidebar/sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="h-[calc(100vh-64px)] overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
