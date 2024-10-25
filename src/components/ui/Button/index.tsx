import { ButtonHTMLAttributes } from 'react';
import { RotateCw } from 'react-feather';

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
    <button
      className={cn(
        'bg-primary-dark hover:bg-primary-default active:bg-primary-default flex h-12 w-full items-center justify-center px-3 text-white drop-shadow-md',
        className,
      )}
      {...rest}
    >
      {isLoading ? <RotateCw className="animate-spin" /> : label}
    </button>
  );
}
