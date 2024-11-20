import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type DataGridProps<T> = {
  className?: string;
  columns: string[];
  data: T[] | undefined;
  isLoading?: boolean;
  render: (row: T, index: number) => ReactNode;
};

export default function DataGrid<T>({
  className,
  columns,
  data,
  isLoading,
  render,
}: DataGridProps<T>) {
  return (
    <div
      className={cn(
        'relative overflow-scroll rounded-md border drop-shadow-sm',
        className,
      )}
    >
      <table className="table-pin-rows table">
        <thead>
          <tr>
            {columns.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array.from({ length: 10 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: columns.length }).map((_, colIndex) => (
                    <td key={colIndex}>
                      <div className="h-4 w-full animate-pulse rounded bg-gray-300"></div>
                    </td>
                  ))}
                </tr>
              ))
            : data?.map((row, index) => render(row, index))}
        </tbody>
      </table>
    </div>
  );
}
