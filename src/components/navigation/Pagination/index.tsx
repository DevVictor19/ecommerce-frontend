'use client';

import { cn } from '@/utils/cn';
import { usePagination } from './pagination.hook';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onChangePage,
}: PaginationProps) {
  const {
    firstPage,
    handleChangeComplex,
    handleChangeNext,
    handleChangePrev,
    maxButtons,
  } = usePagination({ currentPage, onChangePage, totalPages });

  if (totalPages <= maxButtons) {
    return (
      <div className="join">
        <button
          className="join-item btn"
          type="button"
          onClick={handleChangePrev}
        >
          «
        </button>
        <button className="join-item btn">Page {currentPage + 1}</button>
        <button
          className="join-item btn"
          type="button"
          onClick={handleChangeNext}
        >
          »
        </button>
      </div>
    );
  }

  let count = firstPage;

  return (
    <div className="join">
      {Array.from({ length: maxButtons }).map(() => {
        const index = count++;

        return (
          <button
            className={cn('join-item btn', {
              'btn-active': currentPage === index,
            })}
            key={index}
            type="button"
            onClick={() => handleChangeComplex(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
