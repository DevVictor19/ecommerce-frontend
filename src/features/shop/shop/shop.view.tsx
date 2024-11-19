'use client';

import Pagination from '@/components/navigation/Pagination';
import { ProductPaginationFilter } from '@/hooks/products-pagination.hook';

import FiltersButton, {
  FilterButtonOption,
} from '../../../components/ui/FiltersButton';
import SearchBar from '../../../components/ui/SearchBar';
import ProductsGrid from './products-grid/products-grid';
import { useShopViewModel } from './shop.view-model';

const options: FilterButtonOption<ProductPaginationFilter>[] = [
  { value: 'new-products', label: 'New Products' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'cheapest', label: 'Cheapest' },
  { value: 'most-expansive', label: 'Most Expensive' },
];

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
          className="dropdown-end"
          currentFilter={currentFilter}
          onSelect={handleChangeFilter}
          options={options}
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
