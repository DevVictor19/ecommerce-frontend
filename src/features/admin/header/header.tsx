'use client';

import { Bell } from 'react-feather';

import Avatar from '@/components/data-display/Avatar';

import { useHeaderViewModel } from './header.view-model';

export default function Header() {
  const { logout } = useHeaderViewModel();

  return (
    <header className="navbar bg-base-100 relative z-10 px-6 drop-shadow-md">
      <div className="ml-auto flex items-center gap-2">
        <button className="btn btn-circle btn-ghost" type="button">
          <div className="indicator">
            <Bell className="place-items-center" size={20} />
            <span className="badge badge-sm indicator-item badge-error">0</span>
          </div>
        </button>
        <Avatar userInitials="AV">
          <li>
            <a>Settings</a>
          </li>
          <li onClick={logout}>
            <a>Logout</a>
          </li>
        </Avatar>
      </div>
    </header>
  );
}
