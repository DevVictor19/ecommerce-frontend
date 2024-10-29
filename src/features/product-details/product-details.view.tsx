'use client';

import AlertInfo from '@/components/feedback/AlertInfo';

import { useProductDetailsViewModel } from './product-details.view-model';
import ProductDetailsContent from './product-details-content/product-details-content';

export default function ProductDetailsView() {
  const { data, isError, isLoading } = useProductDetailsViewModel();

  if (isError) {
    return (
      <div className="p-6">
        <AlertInfo message="Unable to fetch product data, please try again later..." />
      </div>
    );
  }

  if (!data || isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return <ProductDetailsContent product={data} />;
}
