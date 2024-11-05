'use client';

import Pagination from '@/components/navigation/Pagination';

import FiltersButton from './filters-button/filters-button';
import ProductsGrid from './products-grid/products-grid';
import SearchBar from './search-bar/search-bar';
import { useShopViewModel } from './shop.view-model';

export default function ShopView() {
  const {
    currentFilter,
    data,
    handleChangeFilter,
    handleChangePage,
    handleChangeSearch,
    isError,
    isLoading,
  } = useShopViewModel();

  return (
    <div className="pb-16 pt-8">
      <div className="mb-10 flex items-center justify-center gap-4 px-5">
        <SearchBar onSearch={handleChangeSearch} />
        <FiltersButton
          currentFilter={currentFilter}
          onSelect={handleChangeFilter}
        />
      </div>
      <ProductsGrid data={data} isError={isError} isLoading={isLoading} />
      <div className="mt-8 flex w-full justify-center">
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
