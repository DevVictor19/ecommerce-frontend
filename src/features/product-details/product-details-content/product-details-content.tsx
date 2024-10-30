import Image from 'next/image';
import Link from 'next/link.js';

import Button from '@/components/ui/Button';
import { APP_ROUTE } from '@/enums/app-routes.enum';
import { Product } from '@/services/products/contracts';
import { formatPrice } from '@/utils/format-price';

import QuantityDisplay from '../quantity-display/quantity-display.tsx';
import { useProductDetailsContentViewModel } from './product-details-content.view-model';

type ProductDetailsContentProps = {
  product: Product;
};

export default function ProductDetailsContent({
  product,
}: ProductDetailsContentProps) {
  const {
    handleAddProductToCart,
    handleDecrement,
    handleIncrement,
    quantity,
    total,
    isPending,
  } = useProductDetailsContentViewModel(product);

  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col p-6 md:flex-row">
      <figure className="relative min-h-96 flex-1">
        <Image
          className="object-cover"
          src={product.photoUrl}
          alt={product.description}
          fill
        />
      </figure>
      <article className="flex-1 p-6">
        <div className="flex flex-col">
          <h1 className="mb-2 text-2xl font-medium md:text-3xl">
            {product.name}
          </h1>
          <h2 className="text-lg opacity-80 md:text-xl">
            {product.description}
          </h2>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="text-xl md:text-3xl">
            $ {formatPrice(product.price)}{' '}
            <span className="text-base opacity-70 md:text-lg">
              Payment in full
            </span>
          </h3>
        </div>
        <div className="divider"></div>
        <QuantityDisplay
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          total={total}
          quantity={quantity}
        />
        <div className="divider"></div>
        <div className="flex items-center gap-4">
          <Link className="btn btn-outline" href={APP_ROUTE.SHOP}>
            Go Back
          </Link>
          <Button
            label="Add To Cart"
            type="button"
            onClick={handleAddProductToCart}
            disabled={isPending}
            isLoading={isPending}
          />
        </div>
      </article>
    </main>
  );
}
