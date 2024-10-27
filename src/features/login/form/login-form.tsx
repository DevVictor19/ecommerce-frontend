'use client';

import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/ui/Button';

import { useLoginFormModel } from './login-form.model';

export default function LoginForm() {
  const { errors, isPending, register, submitHandler } = useLoginFormModel();

  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="mb-4 flex flex-col gap-4">
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
      <a className="text-primary text-sm font-medium">Password Recovery</a>
      <Button
        className="mt-8"
        label="Login"
        type="submit"
        isLoading={isPending}
        disabled={isPending}
      />
    </form>
  );
}
