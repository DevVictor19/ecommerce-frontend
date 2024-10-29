import Image from 'next/image';
import Link from 'next/link';

import { APP_ROUTE } from '@/enums/app-routes.enum';
import { Product } from '@/services/products/contracts';
import { formatPrice } from '@/utils/format-price';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { description, name, photoUrl, price, id } = product;

  return (
    <article className="card card-compact bg-base-100 max-h-[400px] w-96 shadow-xl">
      <figure className="relative h-48">
        <Image className="object-cover" src={photoUrl} alt={description} fill />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">
          <h3 className="font-medium">$ {formatPrice(price)}</h3>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            className="btn btn-secondary btn-outline"
            href={`${APP_ROUTE.PRODUCT}/${id}`}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </article>
  );
}
