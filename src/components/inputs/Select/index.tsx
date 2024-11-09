/* eslint-disable react/display-name */
import { forwardRef, SelectHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export type SelectOption = {
  value: string | readonly string[] | number;
  label: string;
};

type SelectProps = {
  className?: string;
  id: string;
  label: string;
  options: SelectOption[];
  errorMessage?: string;
  error?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      id,
      label,
      options,
      errorMessage,
      error,
      ...rest
    }: SelectProps,
    ref,
  ) => {
    return (
      <div className={cn('flex flex-col gap-1', className)}>
        <label
          className={cn('text-secondary-dark', { 'text-error': error })}
          htmlFor={id}
        >
          {label}
        </label>
        <select
          className={cn('select select-primary select-bordered w-full', {
            'select-error': error,
          })}
          {...rest}
          id={id}
          ref={ref}
        >
          {options.map((d) => (
            <option key={d.label} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        {errorMessage && (
          <p className="text-error mt-1 text-xs font-medium">{errorMessage}</p>
        )}
      </div>
    );
  },
);

export default Select;
