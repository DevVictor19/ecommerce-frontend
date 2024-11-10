import { useState } from 'react';

type UsePaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  totalPages: number;
};

export function usePagination({
  currentPage,
  onChangePage,
  totalPages,
}: UsePaginationProps) {
  const [firstPage, setFirstPage] = useState(currentPage);

  const maxButtons = 7;
  const start = 0; // index
  const end = totalPages - 1; // index

  const handleChangePrev = () => {
    const prevPage = currentPage - 1;

    if (prevPage < start) return;

    onChangePage(prevPage);
  };

  const handleChangeNext = () => {
    const nextPage = currentPage + 1;

    if (nextPage > end) return;

    onChangePage(nextPage);
  };

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

  return {
    firstPage,
    handleChangeComplex,
    handleChangeNext,
    handleChangePrev,
    maxButtons,
  };
}
