import Image from 'next/image';

import { CartProduct } from '@/services/cart/contracts';
import { formatPrice } from '@/utils/format-price';

type CheckoutProductProps = {
  product: CartProduct;
};

export default function CheckoutProduct({ product }: CheckoutProductProps) {
  return (
    <li className="flex h-40 shrink-0 gap-2 rounded-sm border p-1">
      <figure className="relative h-full w-1/3 shrink-0">
        <Image
          className="object-fill"
          fill
          alt={product.description}
          src={product.photoUrl}
        />
      </figure>
      <article>
        <h1 className="text-base font-semibold md:text-2xl">{product.name}</h1>
        <h2 className="text-sm font-medium md:text-base">
          Price: ${formatPrice(product.price)}
        </h2>
        <h3 className="mb-2 text-sm md:text-base">
          Qnt: {product.inCartQuantity}
        </h3>
      </article>
    </li>
  );
}
