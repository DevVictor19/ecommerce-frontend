import { cn } from '@/utils/cn';

type ButtonProps = {
  className?: string;
  label: string;
  formId?: string;
  type: 'button' | 'submit';
};

export default function Button({
  className,
  label,
  formId,
  type,
}: ButtonProps) {
  return (
    <button
      className={cn(
        'h-12 w-full rounded-md bg-primary-dark px-3 text-white drop-shadow-md hover:bg-primary-default active:bg-primary-default',
        className,
      )}
      form={formId}
      type={type}
    >
      {label}
    </button>
  );
}
