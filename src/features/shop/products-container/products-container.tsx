'use client';

import Pagination from '@/components/navigation/Pagination';

import ProductsGrid from '../products-grid/products-grid';
import { useProductsContainerViewModel } from './products-container.view-model';

export default function ProductsContainer() {
  const { data, handleChangePage, isError, isLoading } =
    useProductsContainerViewModel();

  return (
    <div className="py-16">
      <ProductsGrid data={data} isError={isError} isLoading={isLoading} />
      <div className="mt-8 flex w-full justify-center ">
        {data && (
          <Pagination
            currentPage={data.page.number}
            totalPages={data.page.totalPages}
            onChangePage={handleChangePage}
          />
        )}
      </div>
    </div>
  );
}
