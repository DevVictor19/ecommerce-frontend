'use client';

import { ShoppingCart } from 'react-feather';

import { useCartButtonViewModel } from './cart-button.view-model';

export default function CartButton() {
  const { productsQuantity } = useCartButtonViewModel();

  return (
    <button className="btn btn-ghost btn-circle" type="button">
      <div className="indicator">
        <ShoppingCart className="place-items-center" size={20} />
        <span className="badge badge-sm indicator-item">
          {productsQuantity}
        </span>
      </div>
    </button>
  );
}
