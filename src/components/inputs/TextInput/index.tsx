/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

type TextInputProps = {
  className?: string;
  id: string;
  label: string;
  errorMessage?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { className, id, label, errorMessage, error, ...rest }: TextInputProps,
    ref,
  ) => {
    return (
      <div className={cn('flex flex-col', className)}>
        <label className="text-secondary-dark" htmlFor={id}>
          {label}
        </label>
        <input
          className={cn(
            'text-secondary-dark outline-secondary-default h-12 w-full rounded-md border border-slate-200 bg-slate-100 px-4',
            {
              'border-red-500 focus:outline-none': error,
            },
          )}
          {...rest}
          id={id}
          ref={ref}
        />
        {errorMessage && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

export default TextInput;
