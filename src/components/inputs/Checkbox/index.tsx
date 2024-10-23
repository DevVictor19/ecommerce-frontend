import { cn } from '@/utils/cn';

type CheckBoxProps = {
  className?: string;
  label: string;
  name: string;
  value: string | number;
};

export default function CheckBox({
  className,
  label,
  name,
  value,
}: CheckBoxProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 text-secondary-dark text-sm select-none',
        className,
      )}
    >
      <input type="checkbox" name={name} id={name} value={value} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
