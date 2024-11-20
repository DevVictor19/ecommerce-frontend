import Image from 'next/image';

import { CartProduct } from '@/services/cart/contracts';
import { formatPrice } from '@/utils/format-price';

type CartListProps = {
  products: CartProduct[];
};

export default function CartList({ products }: CartListProps) {
  return (
    <ul className="flex h-80 w-full flex-col gap-2 overflow-y-auto">
      {products.map((p) => (
        <li className="border" key={p.id}>
          <div className="flex h-28 gap-2">
            <figure className="relative h-full w-1/3 shrink-0 md:w-1/4">
              <Image src={p.photoUrl} fill alt={p.description} />
            </figure>
            <div className="overflow-hidden whitespace-nowrap">
              <h1 className="text-lg font-bold">{p.name}</h1>
              <h2>Price: ${formatPrice(p.price)}</h2>
              <h3>Quantity: {p.inCartQuantity}</h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
