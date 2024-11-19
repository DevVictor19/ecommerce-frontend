import { ReactNode } from 'react';

import AlertInfo from '@/components/feedback/AlertInfo';

import DataGrid from '../DataGrid';
import DataGridPagination from '../DataGridPagination';

type DataGridWithPaginationProps<T> = {
  className?: string;
  isError: boolean;
  isLoading: boolean;
  data: T[] | undefined;
  columns: string[];
  page?: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
  render: (row: T, index: number) => ReactNode;
  onChangePage: (page: number) => void;
  onChangeSize: (size: number) => void;
};

export default function DataGridWithPagination<T>({
  className,
  isError,
  isLoading,
  data,
  columns,
  page,
  render,
  onChangePage,
  onChangeSize,
}: DataGridWithPaginationProps<T>) {
  if (isError) {
    return (
      <AlertInfo message="Something went wrong. Please, try again later..." />
    );
  }

  return (
    <div className={className}>
      <DataGrid
        className="h-96"
        isLoading={isLoading}
        data={data}
        columns={columns}
        render={render}
      />
      <DataGridPagination
        page={page}
        onChangePage={onChangePage}
        onChangeSize={onChangeSize}
      />
    </div>
  );
}
