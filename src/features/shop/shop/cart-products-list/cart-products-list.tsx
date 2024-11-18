import type { CartProduct as TCartProduct } from '@/services/cart/contracts';

import CartProduct from '../cart-product/cart-product';

type CartProductsListProps = {
  products: TCartProduct[];
};

export default function CartProductsList({ products }: CartProductsListProps) {
  return (
    <ul className="flex h-80 flex-col gap-2 overflow-y-auto">
      {products.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </ul>
  );
}
