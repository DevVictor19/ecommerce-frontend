'use client';

import { Plus } from 'react-feather';

import FiltersButton, {
  FilterButtonOption,
} from '@/components/ui/FiltersButton';
import SearchBar from '@/components/ui/SearchBar';
import { ProductPaginationFilter } from '@/hooks/products-pagination.hook';

import { useProductsViewModel } from './products.view-model';
import ProductsGrid from './products-grid/products-grid';

const options: FilterButtonOption<ProductPaginationFilter>[] = [
  { value: 'new-products', label: 'Created recently' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'cheapest', label: 'Cheapest' },
  { value: 'most-expansive', label: 'Most Expensive' },
  { value: 'bigger-stock-quantity', label: 'Bigger Stock Qnt' },
  { value: 'lower-stock-quantity', label: 'Lower Stock Qnt' },
];

export default function ProductsView() {
  const {
    currentFilter,
    data,
    handleChangeFilter,
    handleChangePage,
    handleChangeSize,
    handleChangeSearch,
    isError,
    isLoading,
  } = useProductsViewModel();

  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <button className="btn btn-secondary" type="button">
          Add Product <Plus />{' '}
        </button>
        <div className="mb-8 flex items-center gap-4">
          <SearchBar onSearch={handleChangeSearch} />
          <FiltersButton
            className="dropdown-end"
            currentFilter={currentFilter}
            onSelect={handleChangeFilter}
            options={options}
          />
        </div>
      </div>
      <ProductsGrid
        isError={isError}
        isLoading={isLoading}
        products={data?.content}
        page={data?.page}
        onChangePage={handleChangePage}
        onChangeSize={handleChangeSize}
      />
    </section>
  );
}
