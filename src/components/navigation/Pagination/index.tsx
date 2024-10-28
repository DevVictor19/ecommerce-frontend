'use client';

import { useState } from 'react';

import { cn } from '@/utils/cn';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

const maxButtons = 7;

export default function Pagination({
  currentPage,
  totalPages,
  onChangePage,
}: PaginationProps) {
  const [firstPage, setFirstPage] = useState(currentPage);

  const start = 0; // index
  const end = totalPages - 1; // index

  const handleChangePrev = () => {
    const prevPage = currentPage - 1;

    if (prevPage < end) return;

    onChangePage(prevPage);
  };

  const handleChangeNext = () => {
    const nextPage = currentPage + 1;

    if (nextPage > end) return;

    onChangePage(nextPage);
  };

  if (totalPages <= maxButtons) {
    return (
      <div className="join">
        <button
          className="join-item btn"
          type="button"
          onChange={handleChangePrev}
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

  const handleChangeComplex = (page: number) => {
    let newFirstPage = page - 3; // index

    if (newFirstPage < start) {
      newFirstPage = start;
    }

    const lastPage = newFirstPage + maxButtons - 1;

    if (lastPage > end) {
      const overflow = lastPage - end;
      newFirstPage -= overflow;
    }

    setFirstPage(newFirstPage);
    onChangePage(page);
  };

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
