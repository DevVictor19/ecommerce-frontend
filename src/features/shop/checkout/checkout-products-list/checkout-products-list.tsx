import { CartProduct } from '@/services/cart/contracts';

import CheckoutProduct from '../checkout-product/checkout-product';

type CheckoutProductsListProps = {
  products: CartProduct[];
};

export default function CheckoutProductsList({
  products,
}: CheckoutProductsListProps) {
  return (
    <ul className="flex h-96 w-full flex-col gap-2 overflow-y-auto md:h-[520px]">
      {products.map((product) => (
        <CheckoutProduct key={product.id} product={product} />
      ))}
    </ul>
  );
}
