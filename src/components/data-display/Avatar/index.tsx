import { ReactNode } from 'react';

type AvatarProps = {
  children: ReactNode;
  userInitials: string;
};

export default function Avatar({ children, userInitials }: AvatarProps) {
  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-circle" tabIndex={0}>
        <div className="avatar placeholder">
          <div className="bg-secondary text-neutral-content w-10 rounded-full">
            <span>{userInitials}</span>
          </div>
        </div>
      </button>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {children}
      </ul>
    </div>
  );
}
