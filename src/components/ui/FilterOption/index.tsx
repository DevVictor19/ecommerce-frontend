import { Check } from 'react-feather';

type FilterOptionProps<T> = {
  current: T;
  label: string;
  value: T;
  onSelect: (value: T) => void;
};

export default function FilterOption<T>({
  current,
  label,
  onSelect,
  value,
}: FilterOptionProps<T>) {
  const isSelected = current === value;

  return (
    <li onClick={() => onSelect(value)}>
      <p>
        {label} {isSelected && <Check />}
      </p>
    </li>
  );
}
