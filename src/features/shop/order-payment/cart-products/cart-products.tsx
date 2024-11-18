import { Cart } from '@/services/cart/contracts';
import { formatPrice } from '@/utils/format-price';

import CartList from '../cart-list/cart-list';

type CartProductsProps = {
  cart: Cart;
};

export default function CartProducts({ cart }: CartProductsProps) {
  return (
    <div className="flex flex-col items-center rounded-md border p-4 shadow-lg">
      <div className="divider">
        <p className="mb-2 text-xl font-medium">Cart Products</p>
      </div>
      <CartList products={cart.products} />
      <div className="divider"></div>
      <h1 className="text-2xl">
        <span className="font-bold">Total:</span> $
        {formatPrice(cart.totalPrice)}
      </h1>
      <h2>
        <span className="font-bold">Products Quantity:</span>{' '}
        {cart.productsQuantity}
      </h2>
    </div>
  );
}
