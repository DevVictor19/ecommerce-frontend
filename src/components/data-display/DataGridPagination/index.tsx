import { ChangeEvent } from 'react';

type DataGridPaginationProps = {
  page?: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
  onChangePage: (page: number) => void;
  onChangeSize: (size: number) => void;
};

export default function DataGridPagination({
  page,
  onChangePage,
  onChangeSize,
}: DataGridPaginationProps) {
  const handlePrev = () => {
    if (!page || page.number === 0) return;

    onChangePage(page.number - 1);
  };

  const handleNext = () => {
    if (!page || page.number + 1 === page.totalPages) return;

    onChangePage(page.number + 1);
  };

  const handleChangeSize = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeSize(Number(e.target.value));
  };

  return (
    <div className="-mt-2 flex items-center justify-between rounded-md border-x border-b p-4 text-sm font-medium">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p>Page Size:</p>
          <select
            className="select select-sm select-bordered"
            onChange={handleChangeSize}
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <div>
          <p>
            Total of Elements:{' '}
            <span className="rounded-md border px-2 py-1">
              {page?.totalElements ?? 0}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <p>
            Total Pages:{' '}
            <span className="rounded-md border px-2 py-1">
              {page?.totalPages ?? 0}
            </span>
          </p>
        </div>
        <div className="join">
          <button
            className="join-item btn btn-sm"
            type="button"
            onClick={handlePrev}
          >
            «
          </button>
          <button className="join-item btn btn-sm" type="button">
            Page {page?.number === undefined ? 0 : page.number + 1}
          </button>
          <button
            className="join-item btn btn-sm"
            type="button"
            onClick={handleNext}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
