'use client';

import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/ui/Button';

import { useSignupFormModel } from './signup-form.model';

export default function SignupForm() {
  const { errors, isLoading, register, submitHandler } = useSignupFormModel();

  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="flex flex-col gap-4">
        <TextInput
          label="Username"
          type="text"
          id="username"
          error={!!errors.username}
          errorMessage={errors.username?.message}
          {...register('username')}
        />
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
      <Button
        className="mt-12"
        label="Signup"
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
      />
    </form>
  );
}
