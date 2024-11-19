import { ChangeEvent } from 'react';
import { Search } from 'react-feather';

import { cn } from '@/utils/cn';
import { debounce } from '@/utils/debounce';

type SearchBarProps = {
  className?: string;
  onSearch: (value: string) => void;
};

export default function SearchBar({ className, onSearch }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    debounce(() => onSearch(value), 1000);
  };

  return (
    <label
      htmlFor="search-input"
      className={cn(
        'input input-bordered flex w-full max-w-80 items-center justify-between overflow-hidden',
        className,
      )}
    >
      <input
        id="search-input"
        className="grow"
        type="text"
        placeholder="Search Product"
        onChange={handleChange}
      />
      <Search />
    </label>
  );
}
