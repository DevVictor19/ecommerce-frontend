'use client';

import AlertInfo from '@/components/feedback/AlertInfo';
import LoadingScreen from '@/components/feedback/LoadingScreen';

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
    return <LoadingScreen />;
  }

  return <ProductDetailsContent product={data} />;
}
