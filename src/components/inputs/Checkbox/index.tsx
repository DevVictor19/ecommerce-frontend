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
        'text-secondary-dark flex select-none items-center gap-2 text-sm',
        className,
      )}
    >
      <input type="checkbox" name={name} id={name} value={value} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
