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
    <div className={cn('form-control', className)}>
      <label className="label cursor-pointer" htmlFor={name}>
        <input
          className="checkbox checkbox-primary"
          type="checkbox"
          name={name}
          id={name}
          value={value}
        />
        <span className="label-text ml-2">{label}</span>
      </label>
    </div>
  );
}
