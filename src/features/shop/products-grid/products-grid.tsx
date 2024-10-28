import AlertInfo from '@/components/feedback/AlertInfo';
import CardSkeleton from '@/components/feedback/CardSkeleton';
import { FindAllProductsResponse } from '@/services/products/contracts';

import ProductCard from '../product-card/product-card';

type ProductsGridProps = {
  data: FindAllProductsResponse | undefined;
  isLoading: boolean;
  isError: boolean;
};

export default function ProductsGrid({
  data,
  isLoading,
  isError,
}: ProductsGridProps) {
  if (isError) {
    return (
      <section className="p-6">
        <AlertInfo message="Something went wrong. Please, try again later..." />
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="bg-base-100 grid grid-cols-1 justify-items-center gap-y-24 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </section>
    );
  }

  return (
    <section className="bg-base-100 grid grid-cols-1 justify-items-center gap-y-24 md:grid-cols-2 xl:grid-cols-3">
      {data?.content.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
