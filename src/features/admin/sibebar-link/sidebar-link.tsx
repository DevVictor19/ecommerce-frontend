'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type SideBarLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export function SideBarLink({ href, label, icon }: SideBarLinkProps) {
  const pathname = usePathname();

  return (
    <Link className={cn(pathname === href && 'active')} href={href}>
      {icon}
      {label}
    </Link>
  );
}
