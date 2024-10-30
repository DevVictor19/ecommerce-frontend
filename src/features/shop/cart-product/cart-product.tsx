import Image from 'next/image';
import { X } from 'react-feather';

import type { CartProduct } from '@/services/cart/contracts';
import { formatPrice } from '@/utils/format-price';

import CartProductQuantity from '../cart-product-quantity/cart-product-quantity';
import useCartProductViewModel from './cart-product.view-model';

type CartProductProps = {
  product: CartProduct;
};

export default function CartProduct({ product }: CartProductProps) {
  const { handleDecrement, handleIncrement, handleRemove } =
    useCartProductViewModel(product.id, product.inCartQuantity);

  return (
    <li className="flex h-28 shrink-0 gap-2 rounded-sm border-2 p-1">
      <figure className="relative h-full w-1/3 shrink-0">
        <Image
          className="object-fill"
          fill
          alt={product.description}
          src={product.photoUrl}
        />
      </figure>
      <article>
        <h1 className="w-[180px] truncate font-semibold">{product.name}</h1>
        <h2 className="text-sm">Price: ${formatPrice(product.price)}</h2>
        <h3 className="mb-2 text-sm">Qnt: {product.inCartQuantity}</h3>
        <div className="flex items-center justify-between">
          <CartProductQuantity
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
          <button
            className="btn btn-xs btn-circle btn-secondary mr-2"
            type="button"
            onClick={handleRemove}
          >
            <X size={16} />
          </button>
        </div>
      </article>
    </li>
  );
}
