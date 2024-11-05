'use client';

import Link from 'next/link';

import { APP_ROUTE } from '@/enums/app-routes.enum';

import { useAvatarModel } from './avatar.model';

export default function Avatar() {
  const { logout } = useAvatarModel();

  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-circle" tabIndex={0}>
        <div className="avatar placeholder">
          <div className="bg-secondary text-neutral-content w-10 rounded-full">
            <span>AV</span>
          </div>
        </div>
      </button>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link className="justify-between" href={APP_ROUTE.ORDERS}>
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
      </ul>
    </div>
  );
}
