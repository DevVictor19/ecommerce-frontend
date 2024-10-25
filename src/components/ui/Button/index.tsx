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
        'flex justify-center h-12 w-full rounded-md bg-primary-dark px-3 items-center text-white drop-shadow-md hover:bg-primary-default active:bg-primary-default',
        className,
      )}
      {...rest}
    >
      {isLoading ? <RotateCw className="animate-spin" /> : label}
    </button>
  );
}
