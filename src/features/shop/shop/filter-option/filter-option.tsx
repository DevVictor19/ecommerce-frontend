import { Check } from 'react-feather';

export type FilterKind =
  | 'new-products'
  | 'alphabetical'
  | 'cheapest'
  | 'most-expansive';

type FilterOptionProps = {
  current: FilterKind;
  label: string;
  value: FilterKind;
  onSelect: (value: FilterKind) => void;
};

export default function FilterOption({
  current,
  label,
  onSelect,
  value,
}: FilterOptionProps) {
  const isSelected = current === value;

  return (
    <li onClick={() => onSelect(value)}>
      <p>
        {label} {isSelected && <Check />}
      </p>
    </li>
  );
}
