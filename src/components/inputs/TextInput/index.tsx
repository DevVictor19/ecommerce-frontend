import { cn } from '@/utils/cn';

type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'password';
  disabled?: boolean;
  errorMessage?: string;
  error?: boolean;
};

export default function TextInput({
  label,
  name,
  placeholder,
  type,
  disabled,
  errorMessage,
  error,
}: TextInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-secondary-dark" htmlFor={name}>
        {label}
      </label>
      <input
        className={cn(
          'h-12 w-full rounded-md border border-slate-200 bg-slate-100 px-4 text-secondary-dark outline-secondary-default',
          {
            'border-red-500 focus:outline-none': error,
          },
        )}
        name={name}
        id={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
      {errorMessage && (
        <p className="mt-1 text-xs font-medium text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
