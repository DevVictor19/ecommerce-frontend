import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'react-feather';

import loginWallpaper from '@/assets/login-wallpaper.png';
import { APP_ROUTE } from '@/enums/app-routes.enum';

import LoginForm from './form/login-form';

export default async function LoginView() {
  return (
    <main className="bg-base-100 flex min-h-screen">
      <section className="bg-base-300 hidden flex-1 items-center justify-center p-8 lg:flex">
        <div className="relative size-full overflow-hidden rounded-xl">
          <Image
            className="object-cover"
            src={loginWallpaper}
            fill
            alt="Two styled guys sitting together"
          />
        </div>
      </section>
      <section className="relative flex flex-1 items-center justify-center px-6">
        <div className="flex w-full max-w-xl flex-col  items-center">
          <div className="border-base-200 bg-base-300 mb-6 flex size-16 items-center justify-center rounded-full border p-4">
            <ShoppingBag className="grow-0" size={24} />
          </div>
          <div className="mb-10 text-center">
            <h1 className="mb-1 text-2xl">Hello again!</h1>
            <h2 className="opacity-50">
              Enter your account and start shopping
            </h2>
          </div>
          <LoginForm />
        </div>
        <h3 className="absolute bottom-8 opacity-60">
          Don&apos;t have an account yet?{' '}
          <Link href={APP_ROUTE.SIGNUP} className="text-secondary font-bold">
            Sign Up
          </Link>
        </h3>
      </section>
    </main>
  );
}
