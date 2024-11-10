import Link from 'next/link';
import { ShoppingBag } from 'react-feather';

import { APP_ROUTE } from '@/enums/app-routes.enum';

import Avatar from '../avatar/avatar';
import CartButton from '../cart-button/cart-button';

export default function Header() {
  return (
    <header className="navbar bg-base-100 relative z-10 px-6 drop-shadow-md">
      <Link className="flex flex-1 items-center gap-3" href={APP_ROUTE.SHOP}>
        <div>
          <ShoppingBag />
        </div>
        <h1 className="font-semibold">E-commerce</h1>
      </Link>
      <div className="flex items-center gap-2">
        <CartButton />
        <Avatar />
      </div>
    </header>
  );
}
