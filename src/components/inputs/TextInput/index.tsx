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
      <div className={cn('flex flex-col gap-1', className)}>
        <label
          className={cn('text-secondary-dark', { 'text-error': error })}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className={cn('input input-primary w-full', {
            'input-error': error,
          })}
          {...rest}
          id={id}
          ref={ref}
        />
        {errorMessage && (
          <p className="text-error mt-1 text-xs font-medium">{errorMessage}</p>
        )}
      </div>
    );
  },
);

export default TextInput;
