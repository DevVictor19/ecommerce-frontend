import { Cart } from '@/services/cart/contracts';

import CartActions from '../cart-actions/cart-actions';
import CartDisplay from '../cart-display/cart-display';
import CartProductsList from '../cart-products-list/cart-products-list';

type CartContentProps = {
  cart: Cart | undefined;
  drawerId: string;
};

export default function CartContent({ cart, drawerId }: CartContentProps) {
  return (
    <div className="bg-base-200 text-base-content min-h-full w-80 p-4">
      <h1 className="text-2xl font-medium">Shopping Cart</h1>
      <div className="divider"></div>
      <h2 className="mb-2 font-medium">Products: </h2>
      {cart?.products ? (
        <CartProductsList products={cart.products} />
      ) : (
        <div className="h-80">
          <p>No products yet...</p>
        </div>
      )}
      <div className="divider"></div>
      <CartDisplay
        productsQuantity={cart?.productsQuantity ?? 0}
        totalPrice={cart?.totalPrice ?? 0}
      />
      <CartActions drawerId={drawerId} disableCheckout={!cart} />
    </div>
  );
}
