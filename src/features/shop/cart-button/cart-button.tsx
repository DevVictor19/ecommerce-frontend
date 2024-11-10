'use client';

import { ShoppingCart } from 'react-feather';

import CartContent from '../cart-content/cart-content';
import { useCartButtonViewModel } from './cart-button.view-model';

export default function CartButton() {
  const { data, drawerId } = useCartButtonViewModel();

  return (
    <div className="drawer drawer-end">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor={drawerId}
          className="btn btn-ghost btn-circle drawer-button"
        >
          <div className="indicator">
            <ShoppingCart className="place-items-center" size={20} />
            <span className="badge badge-sm indicator-item">
              {data?.productsQuantity ?? 0}
            </span>
          </div>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <CartContent cart={data} drawerId={drawerId} />
      </div>
    </div>
  );
}
