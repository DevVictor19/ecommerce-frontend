import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'react-feather';

import loginWallpaper from '@/assets/login-wallpaper.png';
import CheckBox from '@/components/inputs/Checkbox';
import TextInput from '@/components/inputs/TextInput';
import Button from '@/components/ui/Button';
import { APP_ROUTE } from '@/enums/app-routes.enum';

export default function LoginView() {
  return (
    <main className="flex min-h-screen">
      <section className="hidden flex-1 items-center justify-center bg-slate-100 p-8 lg:flex">
        <div className="relative size-full overflow-hidden rounded-xl">
          <Image
            src={loginWallpaper}
            fill
            alt="Two styled guys sitting together"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="relative flex flex-1 items-center justify-center px-6">
        <div className="flex w-full max-w-xl flex-col  items-center">
          <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-slate-200 bg-slate-100 p-4">
            <ShoppingBag className="grow-0 text-secondary-dark" size={24} />
          </div>
          <div className="mb-10 text-center">
            <h1 className="mb-1 text-2xl text-secondary-dark">Hello again!</h1>
            <h2 className="text-secondary-dark opacity-50">
              Enter your account and start shopping
            </h2>
          </div>
          <form className="w-full">
            <div className="flex flex-col gap-4">
              <TextInput label="E-mail" name="email" type="text" />
              <TextInput label="Password" name="email" type="password" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <CheckBox label="Remember me" name="remember" value="on" />
              <span className="text-sm font-medium text-secondary-dark">
                Password Recovery
              </span>
            </div>
            <Button className="mt-12" label="Login" type="submit" />
          </form>
        </div>
        <h3 className="absolute bottom-8 text-secondary-dark opacity-60">
          Don&apos;t have an account yet?{' '}
          <Link href={APP_ROUTE.SIGNUP} className="font-bold text-primary-dark">
            Sign Up
          </Link>
        </h3>
      </section>
    </main>
  );
}
