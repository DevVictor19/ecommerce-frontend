import { ShoppingBag } from 'react-feather';

import Avatar from '../avatar/avatar';
import CartButton from '../cart-button/cart-button';

export default function Header() {
  return (
    <header className="navbar bg-base-100 px-6 drop-shadow-md">
      <div className="flex flex-1 items-center gap-3">
        <div>
          <ShoppingBag />
        </div>
        <h1 className="font-semibold">E-commerce</h1>
      </div>
      <div className="flex items-center gap-2">
        <CartButton />
        <Avatar />
      </div>
    </header>
  );
}
