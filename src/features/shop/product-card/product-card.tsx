/* eslint-disable @next/next/no-img-element */
import { Product } from '@/services/products/contracts';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { description, name, photoUrl, price } = product;

  return (
    <article className="card card-compact bg-base-100 max-h-[400px] w-96 shadow-xl">
      <figure className="relative h-48">
        <img
          className="w-full object-center"
          src={photoUrl}
          alt={description}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">
          <h3 className="font-medium">$ {(price / 100).toFixed(2)}</h3>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-outline" type="button">
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
