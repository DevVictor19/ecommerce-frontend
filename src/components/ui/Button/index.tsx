import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

type ButtonProps = {
  className?: string;
  label: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  label,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn('btn btn-primary btn-block', className)} {...rest}>
      {isLoading ? <span className="loading loading-spinner"></span> : label}
    </button>
  );
}
