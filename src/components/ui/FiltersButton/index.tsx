import { Sliders } from 'react-feather';

import { cn } from '@/utils/cn';

import FilterOption from '../FilterOption';

export type FilterButtonOption<T> = {
  label: string;
  value: T;
};

type FiltersButtonProps<T> = {
  className?: string;
  currentFilter: T;
  onSelect: (value: T) => void;
  options: FilterButtonOption<T>[];
};

export default function FiltersButton<T>({
  className,
  currentFilter,
  onSelect,
  options,
}: FiltersButtonProps<T>) {
  return (
    <div className={cn('dropdown', className)}>
      <div tabIndex={0} className="btn btn-secondary" role="button">
        <Sliders />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {options.map(({ label, value }) => (
          <FilterOption
            key={value as string}
            current={currentFilter}
            label={label}
            onSelect={onSelect}
            value={value}
          />
        ))}
      </ul>
    </div>
  );
}
