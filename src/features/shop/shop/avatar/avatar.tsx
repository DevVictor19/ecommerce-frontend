'use client';

import Link from 'next/link';

import Avatar from '@/components/data-display/Avatar';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import { useAvatarViewModel } from './avatar.view-model';

export default function ShopAvatar() {
  const { logout, isAdmin } = useAvatarViewModel();

  return (
    <Avatar userInitials="AV">
      {isAdmin && (
        <li>
          <Link className="justify-between" href={APP_ROUTE.ADMIN}>
            Admin Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link className="justify-between" href={APP_ROUTE.SHOP_ORDERS}>
          Orders
          <span className="badge">New</span>
        </Link>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li onClick={logout}>
        <a>Logout</a>
      </li>
    </Avatar>
  );
}
