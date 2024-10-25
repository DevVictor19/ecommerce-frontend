'use client';

import CheckBox from '@/components/inputs/Checkbox';
import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/ui/Button';

import { useLoginFormModel } from './login-form.model';

export default function LoginForm() {
  const { errors, isLoading, register, submitHandler } = useLoginFormModel();

  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="flex flex-col gap-4">
        <TextInput
          label="E-mail"
          type="text"
          id="email"
          error={!!errors.email}
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <TextInput
          label="Password"
          type="password"
          id="password"
          error={!!errors.password}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <CheckBox label="Remember me" name="remember" value="on" />
        <span className="text-sm font-medium text-secondary-dark">
          Password Recovery
        </span>
      </div>
      <Button
        className="mt-12"
        label="Login"
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
      />
    </form>
  );
}
