import Link from 'next/link';
import {
  BarChart2,
  CornerDownLeft,
  ShoppingBag,
  ShoppingCart,
  User,
} from 'react-feather';

import { APP_ROUTE } from '@/enums/app-routes.enum';

import { SideBarLink } from '../sibebar-link/sidebar-link';

export default function SideBar() {
  return (
    <aside className="bg-base-200 w-full max-w-80 shrink-0 border shadow-sm">
      <div className="flex h-16 items-center justify-between rounded-sm border-b p-4">
        <h1 className="text-lg font-medium">Dashboard</h1>
        <Link className="flex items-center gap-2 text-sm" href={APP_ROUTE.SHOP}>
          Back to Shop <CornerDownLeft size={16} />
        </Link>
      </div>
      <nav>
        <ul className="menu bg-base-200 rounded-box w-full">
          <li>
            <h2 className="menu-title">General</h2>
            <ul>
              <li>
                <SideBarLink
                  icon={<BarChart2 size={20} />}
                  href={APP_ROUTE.ADMIN}
                  label="Overview"
                />
              </li>
              <li>
                <SideBarLink
                  icon={<User size={20} />}
                  href={APP_ROUTE.ADMIN_USERS}
                  label="Users"
                />
              </li>
              <li>
                <SideBarLink
                  icon={<ShoppingBag size={20} />}
                  href={APP_ROUTE.ADMIN_PRODUCTS}
                  label="Products"
                />
              </li>
              <li>
                <SideBarLink
                  icon={<ShoppingCart size={20} />}
                  href={APP_ROUTE.ADMIN_ORDERS}
                  label="Orders"
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
