import { Sliders } from 'react-feather';

import FilterOption, { FilterKind } from '../filter-option/filter-option';

type FiltersButtonProps = {
  currentFilter: FilterKind;
  onSelect: (value: FilterKind) => void;
};

export default function FiltersButton({
  currentFilter,
  onSelect,
}: FiltersButtonProps) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="btn btn-secondary" role="button">
        <Sliders />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <FilterOption
          label="New Products"
          onSelect={onSelect}
          current={currentFilter}
          value="new-products"
        />
        <FilterOption
          label="A-Z"
          onSelect={onSelect}
          current={currentFilter}
          value="alphabetical"
        />
        <FilterOption
          label="Cheapest"
          onSelect={onSelect}
          current={currentFilter}
          value="cheapest"
        />
        <FilterOption
          label="Most expansive"
          onSelect={onSelect}
          current={currentFilter}
          value="most-expansive"
        />
      </ul>
    </div>
  );
}
